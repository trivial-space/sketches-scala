package sketches.rooms.columns

import org.scalajs.dom
import org.scalajs.dom.HTMLCanvasElement
import sketchlib.shaders.room.*
import sketchlib.utils.bake.*
import sketchlib.utils.bloom.Bloom
import sketchlib.utils.mirror.GaussianMirrorReflection
import sketchlib.utils.room.*
import trivalibs.dev.*
import trivalibs.graphics.geometry.{*, given}
import trivalibs.graphics.scene.BasicFirstPersonCameraController
import trivalibs.graphics.scene.PerspectiveCamera
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

// ---------------------------------------------------------------------------
// Tunables
// ---------------------------------------------------------------------------

// ---- geometry ----
private val ColSpace = 14.0
private val ColHeight = 40.0
private val ColWidth = 2.0
private val BalkHeight = ColWidth * 3.4
private val ColsZHalf = 6
private val ColsXHalf = 3

// ---- space ----
private val EyeHeight = 1.7
private val WallClearance = 0.5
private val NearPlane = 0.1
private val WalkSpeed = 4.0
// distance from the balk tops up to the light plane, as a fraction of BalkHeight
private val CofferDepthRatio = 0.75

// ---- texture resolution, texels per meter ----
private val AmbienceTexScale = 16.0
private val BeamCrossTexScale = 16.0
private val LightTexScale = 6.0
private val SlabTexScale = 160.0
private val MaxTexSize = 8192

// ---- ambience field ----
private val WorldNoiseScale = 0.025
private val OrientNoiseScale = 0.04
// vertical stretch of the field (< 1 elongates features upward)
private val NoiseVerticalScale = 0.3
// horizontal drift per meter of height; tilt angle ≈ atan(shear / vertical scale)
private val NoiseShear = 0.03
private val AmbienceLow = 0.74
private val OrientWeight = 0.3

// ---- edge fades, meters ----
// arris: radius at full visibility of the hidden neighbor face
private val Fades = (plane = 0.3, top = 0.6, corner = 0.4, arris = 0.2)
// how quickly an arris fade opens as its neighbor face turns toward the eye
private val VisBand = 0.25
private val ArrisSoften = 0.06

// ---- grime ----
private val GrimeWidth = 0.15
private val GrimeDarken = 0.85
private val GrimeCreep = 0.05
private val GrimePatchiness = 0.3
private val CreepScale = 0.9
private val PatchScale = 2.07

// ---- tints ----
private val WallTintLow = Vec3(0.97, 0.97, 0.96)
private val WallTintHigh = Vec3(0.88, 0.88, 0.87)
private val TopFadeDepth = 4.0
private val CeilTint = Vec3(0.87, 0.87, 0.86)
private val BalkSideTopTint = Vec3(1.0, 0.99, 0.97)
private val BalkTopGlow = 0.7
private val FloorTint = Vec3(0.80, 0.78, 0.75)

// ---- floor slabs ----
private val SlabSize = 1.6
private val JointHalfWidth = 0.004
private val JointBevel = 0.012
private val JointDarken = 0.6
private val SlabTintJitter = 0.08

// ---- light ----
// dim regions stay below the bloom threshold and read as sky
private val LightDimColor = Vec3(0.72, 0.78, 0.86)
private val LightBrightColor = Vec3(1.9, 1.82, 1.71)
private val LightNoiseScale = 1.0 / 30.0

// ---- paintings ----
// pillar width as a fraction of the bay's clear width
private val PillarWidthMin = 0.36
private val PillarWidthMax = 0.46
// pillar height as a fraction of SoffitY
private val PillarHeightMin = 1.0 / 3.0
private val PillarHeightMax = 0.95
private val PillarFloorGap = 0.4
private val PaintAlpha = 0.75
private val PaintTexScale = 48.0

// ---- paint grain ----
private val GrainSize = 0.01
private val GrainTileWorld = 1.0
private val GrainTexScale = 512.0
// ± coverage modulation (pillar sketch: 0.12 on 0.75 alpha)
private val GrainStrength = 0.16

// ---- mirror, bloom ----
private val ReflStrength = 0.25
private val BloomIntensity = 0.0035

// ---------------------------------------------------------------------------
// Derived
// ---------------------------------------------------------------------------

private val HalfX = ColsXHalf * ColSpace
private val HalfZ = ColsZHalf * ColSpace
private val ColHalf = ColWidth / 2.0
private val SoffitY = ColHeight - BalkHeight
private val LightY = ColHeight + BalkHeight * CofferDepthRatio

private val LightOverhang =
  (LightY - SoffitY) * (HalfX.max(HalfZ) * 2.0 - WallClearance)
    / (SoffitY - EyeHeight) * 1.05

private val FarPlane =
  val spanX = 2.0 * (HalfX + LightOverhang)
  val spanZ = 2.0 * (HalfZ + LightOverhang)
  (spanX * spanX + spanZ * spanZ + LightY * LightY).sqrt

// 20× the depth buffer's resolution at soffit height
private val FamilyYStagger =
  20.0 * SoffitY * SoffitY / NearPlane / 16777216.0

private val MaxStripWidth = MaxTexSize / AmbienceTexScale

// integer noise periods per grain tile, so the tile repeats seamlessly
private val GrainPeriod =
  Math.round(GrainTileWorld / GrainSize).toDouble.max(1.0)

// ---------------------------------------------------------------------------
// Plan
// ---------------------------------------------------------------------------

private def perimeterRing: Ring =
  val points = Arr[Vec2]()

  def side(corner: Vec2, along: Vec2, inward: Vec2, colsHalf: Int): Unit =
    def at(alongDist: Double, inwardDist: Double): Vec2 =
      corner + along * alongDist + inward * inwardDist
    val length = colsHalf * 2 * ColSpace
    points.push(at(ColHalf, ColHalf))
    points.push(at(ColHalf, 0.0))
    for k <- 1 until colsHalf * 2 do
      val center = k * ColSpace
      points.push(at(center - ColHalf, 0.0))
      points.push(at(center - ColHalf, ColHalf))
      points.push(at(center + ColHalf, ColHalf))
      points.push(at(center + ColHalf, 0.0))
    points.push(at(length - ColHalf, 0.0))

  side(Vec2(-HalfX, -HalfZ), Vec2(1.0, 0.0), Vec2(0.0, 1.0), ColsXHalf)
  side(Vec2(HalfX, -HalfZ), Vec2(0.0, 1.0), Vec2(-1.0, 0.0), ColsZHalf)
  side(Vec2(HalfX, HalfZ), Vec2(-1.0, 0.0), Vec2(0.0, -1.0), ColsXHalf)
  side(Vec2(-HalfX, HalfZ), Vec2(0.0, -1.0), Vec2(1.0, 0.0), ColsZHalf)
  Ring(points, Facing.Inward, SoffitY)

private def freeColumnRings: Arr[Ring] =
  val ixMax = ColsXHalf - 1
  val izMax = ColsZHalf - 1
  val rings = Arr[Ring]()
  for
    ix <- -ixMax to ixMax
    iz <- -izMax to izMax
    if Math.abs(ix) == ixMax || Math.abs(iz) == izMax
  do
    rings.push(
      Ring.rect(
        center = Vec2(ix * ColSpace, iz * ColSpace),
        dir = Vec2(1.0, 0.0),
        length = ColWidth,
        thickness = ColWidth,
        facing = Facing.Outward,
        height = SoffitY,
      ),
    )
  rings

private def balkClip: Boundary =
  val hx = HalfX + ColHalf
  val hz = HalfZ + ColHalf
  Boundary(
    Ring(
      Arr(Vec2(-hx, -hz), Vec2(hx, -hz), Vec2(hx, hz), Vec2(-hx, hz)),
      Facing.Inward,
      ColHeight,
    ),
  )

private def balksWithin(clip: Boundary): Arr[Beam] =
  val families = Arr(
    BeamFamily(Vec2(1.0, 0.0), ColSpace, 0.0, ColWidth),
    BeamFamily(Vec2(0.0, 1.0), ColSpace, 0.0, ColWidth),
  )
  val balks = Arr[Beam]()
  for i <- 0 until families.length do
    val soffit = SoffitY - i * FamilyYStagger
    for b <- familyBeams(families(i), clip, BalkHeight, soffit) do balks.push(b)
  balks

// ---------------------------------------------------------------------------
// Faces and strips
// ---------------------------------------------------------------------------

type WallVertex = (position: Vec3, uv: Vec2, edgeInfo: Vec4, tangent: Vec3)

private case class Face(wall: Wall, leftArris: Boolean, rightArris: Boolean)

private def ringFaces(r: Ring): Arr[Face] =
  val bnd = r.boundary
  val edges = bnd.edges
  val walls = wallsFrom(bnd, SoffitY)
  val faces = Arr[Face]()
  for i <- 0 until edges.length do
    val e = edges(i)
    val nextArris = edges((i + 1) % edges.length).arrisAtA
    val wall = walls(i)
    val right = Vec3.Y.cross(wall.inwardNormal)
    val leftIsA =
      right.x * (e.b.x - e.a.x) + right.z * (e.b.y - e.a.y) > 0.0
    faces.push(
      Face(
        wall,
        leftArris = if leftIsA then e.arrisAtA else nextArris,
        rightArris = if leftIsA then nextArris else e.arrisAtA,
      ),
    )
  faces

private def totalWidth(faces: Arr[Face]): Double =
  var w = 0.0
  for f <- faces do w += f.wall.width
  w

private def stripsOf(faces: Arr[Face]): Arr[Arr[Face]] =
  val strips = Arr[Arr[Face]]()
  var current = Arr[Face]()
  var width = 0.0
  for f <- faces do
    if width + f.wall.width > MaxStripWidth && current.length > 0 then
      strips.push(current)
      current = Arr[Face]()
      width = 0.0
    current.push(f)
    width += f.wall.width
  if current.length > 0 then strips.push(current)
  strips

private def stripQuads[V](
    faces: Arr[Face],
    vertex: (pos: Vec3, uv: Vec2, face: Face, fromLeft: Double) => V,
): Arr[Quad[V]] =
  val total = totalWidth(faces)
  val quads = Arr[Quad[V]]()
  var offset = 0.0
  for f <- faces do
    val w = f.wall
    val right = Vec3.Y.cross(w.inwardNormal)
    val u0 = offset
    def corner(fromLeft: Double, top: Boolean): V =
      val up = if top then w.height / 2.0 else -w.height / 2.0
      val pos = w.center + right * (fromLeft - w.width / 2.0) + Vec3.Y * up
      val uv = Vec2((u0 + fromLeft) / total, if top then 0.0 else 1.0)
      vertex(pos, uv, f, fromLeft)
    quads.push(
      Quad(
        corner(0.0, true),
        corner(0.0, false),
        corner(w.width, false),
        corner(w.width, true),
      ),
    )
    offset += w.width
  quads

private def bakeVertex(pos: Vec3, uv: Vec2, f: Face, fromLeft: Double) =
  (position = pos, uv = uv): RoomVertex

private def renderVertex(pos: Vec3, uv: Vec2, f: Face, fromLeft: Double) =
  (
    position = pos,
    uv = uv,
    edgeInfo = Vec4(
      fromLeft,
      f.wall.width,
      if f.leftArris then 1.0 else 0.0,
      if f.rightArris then 1.0 else 0.0,
    ),
    tangent = Vec3.Y.cross(f.wall.inwardNormal),
  ): WallVertex

private def texSize(widthM: Double, heightM: Double, scale: Double) =
  (
    w = Math.ceil(widthM * scale).toInt.max(1),
    h = Math.ceil(heightM * scale).toInt.max(1),
  )

private def checkTexSize(label: String, w: Int, h: Int): Unit =
  if w > MaxTexSize || h > MaxTexSize then
    dom.console.warn(s"columns: $label texture $w×$h exceeds $MaxTexSize")

// ---------------------------------------------------------------------------
// Shader fields
// ---------------------------------------------------------------------------

private def warp(wp: Vec3Expr): Vec3Expr =
  vec3(
    wp.x + wp.y * NoiseShear,
    wp.y * NoiseVerticalScale,
    wp.z * 0.8 + wp.y * NoiseShear,
  )

private def worldNoise(wp: Vec3Expr): FloatExpr =
  (warp(wp) * WorldNoiseScale)
    .simplexFbm(octaves = 5, lacunarity = 3.0, gain = 0.3, seed = 120.0)

private def orientNoise(wp: Vec3Expr, normal: Vec3Expr): FloatExpr =
  (warp(wp).cross(normal) * OrientNoiseScale)
    .simplexFbm(octaves = 3, lacunarity = 2.1, gain = 0.25, seed = 70.0)

private def ambience(
    world: FloatExpr,
    orient: FloatExpr,
    edge: FloatExpr,
): FloatExpr =
  lerp(
    AmbienceLow,
    1.0,
    ((world + orient * OrientWeight * edge) / (1.0 + OrientWeight)).fit1101,
  )

private def creepField(xz: Vec2Expr): FloatExpr =
  (vec3(xz.x, 0.0, xz.y) * CreepScale).simplexFbm(octaves = 3, seed = 41.0)

private def patchField(xz: Vec2Expr): FloatExpr =
  (vec3(xz.x, 0.0, xz.y) * PatchScale)
    .simplexFbm(octaves = 3, seed = 9.0)
    .fit1101

private def grime(
    dist: FloatExpr,
    creep: FloatExpr,
    patch: FloatExpr,
): FloatExpr =
  grimeExp(
    dist,
    creep = creep,
    patch = patch,
    width = GrimeWidth,
    darken = GrimeDarken,
    creepAmount = GrimeCreep,
    patchiness = GrimePatchiness,
  )

private def sideFade(
    dist: FloatExpr,
    isArris: FloatExpr,
    neighborFacing: FloatExpr,
): FloatExpr =
  val arrisRadius = neighborFacing.smoothstep(0.0, VisBand) * Fades.arris
  val radius = (arrisRadius - Fades.corner) * isArris + Fades.corner
  dist.smoothstep(0.0, radius.max(0.001))

private def wallEdge(
    wp: Vec3Expr,
    info: Vec4Expr,
    tangent: Vec3Expr,
    toEye: Vec3Expr,
): FloatExpr =
  sideFade(info.x, info.z, toEye.dot(tangent * -1.0))
    * sideFade(info.y - info.x, info.w, toEye.dot(tangent))
    * wp.y.smoothstep(0.0, Fades.plane)
    * (SoffitY - wp.y).smoothstep(0.0, Fades.top)

private def wallLight(amb: Vec4Expr, edge: FloatExpr, y: FloatExpr): FloatExpr =
  lerp(amb.y, amb.x, edge) * grime(y, amb.z.fit0111, amb.w)

private def wallTint(y: FloatExpr): Vec3Expr =
  vec3(WallTintLow).lerp(
    WallTintHigh,
    (SoffitY - y).smoothstep(TopFadeDepth, 0.0),
  )

private def vfloor(v: Vec2Expr): Vec2Expr = v - v.fract

private def latticeDist(p: Vec2Expr): FloatExpr =
  val node = vfloor(p / ColSpace + 0.5)
  val q = (p - node * ColSpace).abs - ColHalf
  val boxDist = q.max(vec2(0.0, 0.0)).length
  val hasColumn = node.x.abs
    .smoothstep(ColsXHalf - 1.6, ColsXHalf - 1.4)
    .max(node.y.abs.smoothstep(ColsZHalf - 1.6, ColsZHalf - 1.4))
  val wallDist = (HalfX - p.x.abs).min(HalfZ - p.y.abs)
  (boxDist + (1.0 - hasColumn) * 1000.0).min(wallDist)

private def cellHash(cell: Vec2Expr): FloatExpr =
  (cell.dot(Vec2(12.9898, 78.233)).sin * 43758.5453).fract

// ---------------------------------------------------------------------------
// Sketch
// ---------------------------------------------------------------------------

@JSExportTopLevel("sketch")
def roomsColumns(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val sampler = p.samplerLinear
    val tileSampler = p.sampler(
      FilterMode.Linear,
      FilterMode.Linear,
      FilterMode.Linear,
      AddressMode.Repeat,
    )

    val cam = PerspectiveCamera(
      fov = 0.9,
      near = NearPlane,
      far = FarPlane,
      pos = Vec3(0.0, EyeHeight, HalfZ - ColSpace / 2.0),
    )
    devPreserve(cam)

    // ---- plan ----

    val outerRing = perimeterRing
    val columnRings = freeColumnRings
    val rings = Arr[Ring](outerRing)
    for r <- columnRings do rings.push(r)
    val footprint = Footprint(rings)
    val floorBnd = footprint.floorBoundary
    val bounds = footprint.bounds

    val clip = balkClip
    val atlas = BeamAtlas(balksWithin(clip), clip)

    val wallStrips = stripsOf(ringFaces(outerRing))
    for r <- columnRings do wallStrips.push(ringFaces(r))

    // ---- geometry ----

    def form(faces: Arr[Quad[RoomVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    def wallForm(faces: Arr[Quad[WallVertex]]): Form =
      p.form(geometry =
        toBufferedGeometry(
          Mesh(faces),
          MeshBufferType.FaceVerticesWithFaceNormal,
        ),
      )

    val lightForm = form(
      Arr(planeQuad(bounds, LightY, faceUp = true, margin = LightOverhang)),
    )
    val balkForm = form(atlas.faces)

    // ---- ambience bakes ----

    val ambienceBaker = TextureBaker(p): (wp, normal, _, out) =>
      val world = LetFloat("world")
      val orient = LetFloat("orient")
      Block(
        world := worldNoise(wp),
        orient := orientNoise(wp, normal),
        out := vec4(
          ambience(world, orient, 1.0),
          ambience(world, orient, 0.0),
          creepField(wp.xz) * 0.5 + 0.5,
          patchField(wp.xz),
        ),
      )

    val ambienceClear = (0.87, 0.87, 0.5, 0.5)

    def bakeAmbience(label: String, f: Form, w: Int, h: Int): Panel =
      checkTexSize(label, w, h)
      ambienceBaker(f, w, h, clearColor = ambienceClear)

    val (bw, bh) = atlas.texSize(AmbienceTexScale, BeamCrossTexScale)
    val balkTex = bakeAmbience("balk atlas", balkForm, bw, bh)

    // ---- light ----

    val lightSize = texSize(
      bounds.maxX - bounds.minX + 2.0 * LightOverhang,
      bounds.maxZ - bounds.minZ + 2.0 * LightOverhang,
      LightTexScale,
    )
    checkTexSize("light", lightSize.w, lightSize.h)
    val lightTex = TextureBaker.bakeBlock(
      p,
      lightForm,
      lightSize.w,
      lightSize.h,
      format = TextureFormat.Rgba16Float,
    ): (wp, _, _, color) =>
      val level = LetFloat("level")
      Block(
        level := (vec3(wp.x, 0.0, wp.z) * LightNoiseScale)
          .simplexFbm(octaves = 3, seed = 17.0)
          .fit1101
          .smoothstep(0.3, 0.7),
        color := vec4(
          vec3(LightDimColor).lerp(LightBrightColor, level),
          1.0,
        ),
      )

    // ---- floor slabs ----

    val slabBounds = (minX = 0.0, minZ = 0.0, maxX = SlabSize, maxZ = SlabSize)
    val slabForm = form(Arr(planeQuad(slabBounds, 0.0, faceUp = false)))
    val slabPx = Math.ceil(SlabSize * SlabTexScale).toInt
    val slabTex = TextureBaker.bake(p, slabForm, slabPx, slabPx): (_, _, uv) =>
      val fromJoint = uv.min(1.0 - uv)
      val d = fromJoint.x.min(fromJoint.y) * SlabSize
      val v = lerp(
        JointDarken,
        1.0,
        d.smoothstep(JointHalfWidth, JointHalfWidth + JointBevel),
      )
      vec4(v, v, v, 1.0)

    // ---- paint grain ----

    val grainBounds =
      (minX = 0.0, minZ = 0.0, maxX = GrainTileWorld, maxZ = GrainTileWorld)
    val grainForm = form(Arr(planeQuad(grainBounds, 0.0, faceUp = false)))
    val grainPx = Math.ceil(GrainTileWorld * GrainTexScale).toInt
    val grainTex = TextureBaker.bake(p, grainForm, grainPx, grainPx):
      (_, _, uv) =>
        val n = (vec3(uv.x, uv.y, 0.0) * GrainPeriod).extendedFbmValue(
          octaves = 1,
          tilingPeriod = vec3(GrainPeriod, GrainPeriod, 0.0),
          seed = 5.0,
        )
        vec4(n * 0.5 + 0.5, 0.0, 0.0, 1.0)

    // ---- paintings ----

    type PaintVertex = (position: Vec3, color: Vec3)

    val paintShade =
      p.shade[PaintVertex, (color: Vec3), (size: VertexUniform[Vec2])]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.color := ctx.in.color,
              ctx.out.position := vec4(
                (ctx.in.position.xy / ctx.bindings.size).fit0111,
                0.0,
                1.0,
              ),
            )
          program.frag: ctx =>
            ctx.out.color := vec4(ctx.in.color, PaintAlpha)

    val palette = RoomPalette()

    def paintBay(bay: Wall): (panel: Panel, rect: Vec4) =
      val pillarW = bay.width * randInRange(PillarWidthMin, PillarWidthMax)
      val pillarH = SoffitY * randInRange(PillarHeightMin, PillarHeightMax)
      val pillar = PillarPainting(pillarW, pillarH, palette.pillarColors())
      val margin = pillarW * PillarMarginRatio
      val size = Vec2(pillarW + 2.0 * margin, pillarH + 2.0 * margin)

      def vertex(v: Vec2, color: Vec3): PaintVertex =
        (position = Vec3(v.x + margin, v.y + margin, 0.0), color = color)
      val quads = pillar.quads.map: pq =>
        val rgb = pq.hsv.hsv2rgbSmooth
        Quad(
          vertex(pq.quad.tl, rgb),
          vertex(pq.quad.bl, rgb),
          vertex(pq.quad.br, rgb),
          vertex(pq.quad.tr, rgb),
        )
      val paintForm = p.form(geometry =
        toBufferedGeometry(Mesh(quads), MeshBufferType.FaceVertices),
      )
      val px = texSize(size.x, size.y, PaintTexScale)
      checkTexSize("painting", px.w, px.h)
      val panel = p.panel(
        width = px.w,
        height = px.h,
        clearColor = (0.0, 0.0, 0.0, 0.0),
        multisample = true,
        mips = true,
        shape = p
          .shape(paintForm, paintShade, blendState = BlendState.Alpha)
          .bind("size" := size),
      )
      p.paint(panel)
      val rect = Vec4(
        (bay.width - pillarW) / 2.0 - margin,
        PillarFloorGap - margin,
        size.x,
        size.y,
      )
      (panel = panel, rect = rect)

    // ---- shades ----

    val eyePos = p.binding[Vec3]
    val canvasRes = p.binding[Vec2]

    type TexturedUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
    )
    type TexPanels = (tex: FragmentPanel)

    val lightShade =
      p.shade[BakeVertex, (uv: Vec2), TexturedUniforms, TexPanels]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          ctx.out.color := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp)

    type WallUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        samp: FragmentUniform[Sampler],
    )
    type WallVaryings = (
        uv: Vec2,
        worldPos: Vec3,
        edgeInfo: Vec4,
        tangent: Vec3,
    )

    val wallShade =
      p.shade[WithNormal[WallVertex], WallVaryings, WallUniforms, TexPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.worldPos := ctx.in.position,
              ctx.out.edgeInfo := ctx.in.edgeInfo,
              ctx.out.tangent := ctx.in.tangent,
              ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            val wp = ctx.in.worldPos
            val amb = LetVec4("amb")
            val toEye = LetVec3("toEye")
            Block(
              amb := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp),
              toEye := (ctx.bindings.eye - wp).normalize,
              ctx.out.color := vec4(
                wallTint(wp.y) * wallLight(
                  amb,
                  wallEdge(wp, ctx.in.edgeInfo, ctx.in.tangent, toEye),
                  wp.y,
                ),
                1.0,
              ),
            )

    type BayUniforms = (
        vp: VertexUniform[Mat4],
        eye: FragmentUniform[Vec3],
        samp: FragmentUniform[Sampler],
        tileSamp: FragmentUniform[Sampler],
        paintRect: FragmentUniform[Vec4],
        grainOffset: FragmentUniform[Vec2],
    )
    type BayPanels = (
        tex: FragmentPanel,
        paint: FragmentPanel,
        grain: FragmentPanel,
    )

    val bayShade =
      p.shade[WithNormal[WallVertex], WallVaryings, BayUniforms, BayPanels]:
        program =>
          program.vert: ctx =>
            Block(
              ctx.out.uv := ctx.in.uv,
              ctx.out.worldPos := ctx.in.position,
              ctx.out.edgeInfo := ctx.in.edgeInfo,
              ctx.out.tangent := ctx.in.tangent,
              ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
            )
          program.frag: ctx =>
            val wp = ctx.in.worldPos
            val rect = ctx.bindings.paintRect
            val amb = LetVec4("amb")
            val toEye = LetVec3("toEye")
            val light = LetFloat("light")
            val bayPos = LetVec2("bayPos")
            val paint = LetVec4("paintColor")
            val grain = LetFloat("grain")
            Block(
              amb := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp),
              toEye := (ctx.bindings.eye - wp).normalize,
              light := wallLight(
                amb,
                wallEdge(wp, ctx.in.edgeInfo, ctx.in.tangent, toEye),
                wp.y,
              ),
              bayPos := vec2(ctx.in.edgeInfo.x, wp.y),
              paint := ctx.textures.paint(
                vec2(bayPos.x - rect.x, rect.w - (bayPos.y - rect.y)) / rect.zw,
                ctx.bindings.samp,
              ),
              grain := 1.0 + (ctx.textures
                .grain(
                  (bayPos + ctx.bindings.grainOffset) / GrainTileWorld,
                  ctx.bindings.tileSamp,
                )
                .x * 2.0 - 1.0) * GrainStrength,
              ctx.out.color := vec4(
                wallTint(wp.y) * light * (1.0 - paint.a * grain)
                  + paint.rgb * grain * light,
                1.0,
              ),
            )

    val balkShade =
      p.shade[
        BakeVertex,
        (uv: Vec2, worldPos: Vec3),
        TexturedUniforms,
        TexPanels,
      ]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val amb = LetVec4("amb")
          val fromArris = LetFloat("fromArris")
          val sideLift = LetFloat("sideLift")
          val lit = LetFloat("lit")
          Block(
            amb := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp),
            fromArris := (atlas.soffitCenterDist(ctx.in.uv) - ColHalf).max(0.0),
            sideLift := ((ctx.in.worldPos.y - SoffitY) / BalkHeight).clamp01,
            lit := lerp(amb.y, amb.x, fromArris.smoothstep(0.0, Fades.arris)),
            ctx.out.color := vec4(
              vec3(WallTintHigh)
                .lerp(BalkSideTopTint, sideLift)
                .lerp(CeilTint, 1.0 - fromArris.smoothstep(0.0, ArrisSoften))
                * (lit + (1.0 - lit) * sideLift * BalkTopGlow),
              1.0,
            ),
          )

    type FloorUniforms = (
        vp: VertexUniform[Mat4],
        samp: FragmentUniform[Sampler],
        tileSamp: FragmentUniform[Sampler],
        res: FragmentUniform[Vec2],
    )
    type FloorPanels = (
        tex: FragmentPanel,
        slabTex: FragmentPanel,
        reflTex: FragmentPanel,
    )

    val floorShade =
      p.shade[
        BakeVertex,
        (uv: Vec2, worldPos: Vec3),
        FloorUniforms,
        FloorPanels,
      ]: program =>
        program.vert: ctx =>
          Block(
            ctx.out.uv := ctx.in.uv,
            ctx.out.worldPos := ctx.in.position,
            ctx.out.position := ctx.bindings.vp * vec4(ctx.in.position, 1.0),
          )
        program.frag: ctx =>
          val wp = ctx.in.worldPos
          val amb = LetVec4("amb")
          val dist = LetFloat("dist")
          val slabCoord = LetVec2("slabCoord")
          val base = LetVec3("base")
          val refl = LetVec4("refl")
          val reflMix = LetFloat("reflMix")
          Block(
            amb := ctx.textures.tex(ctx.in.uv, ctx.bindings.samp),
            dist := latticeDist(wp.xz),
            slabCoord := wp.xz / SlabSize,
            base := vec3(FloorTint)
              * (1.0 + (cellHash(vfloor(slabCoord)) - 0.5) * SlabTintJitter)
              * ctx.textures.slabTex(slabCoord, ctx.bindings.tileSamp).x
              * lerp(amb.y, amb.x, dist.smoothstep(0.0, Fades.plane))
              * grime(dist, amb.z.fit0111, amb.w),
            refl := ctx.textures.reflTex(
              ctx.fragCoord.xy / ctx.bindings.res,
              ctx.bindings.samp,
            ),
            reflMix := (1.0 - refl.a * 0.4) * ReflStrength,
            ctx.out.color := vec4(
              base * (1.0 - reflMix) + refl.rgb * reflMix,
              1.0,
            ),
          )

    // ---- scene assembly ----

    val aboveGround = Arr[AnyShape](
      p.shape(lightForm, lightShade, cullMode = CullMode.None)
        .bind("samp" := sampler, "tex" := lightTex),
      p.shape(balkForm, balkShade, cullMode = CullMode.None)
        .bind("samp" := sampler, "tex" := balkTex),
    )

    def isBay(f: Face): Boolean = f.wall.width > ColSpace / 2.0

    for i <- 0 until wallStrips.length do
      val strip = wallStrips(i)
      val size = texSize(totalWidth(strip), SoffitY, AmbienceTexScale)
      val tex = bakeAmbience(
        s"wall strip $i",
        form(stripQuads(strip, bakeVertex)),
        size.w,
        size.h,
      )
      val renderQuads = stripQuads(strip, renderVertex)
      val plainQuads = Arr[Quad[WallVertex]]()
      for j <- 0 until strip.length do
        val face = strip(j)
        if isBay(face) then
          val painting = paintBay(face.wall)
          aboveGround.push(
            p.shape(
              wallForm(Arr(renderQuads(j))),
              bayShade,
              cullMode = CullMode.None,
            ).bind(
              "samp" := sampler,
              "tileSamp" := tileSampler,
              "eye" := eyePos,
              "paintRect" := painting.rect,
              "grainOffset" := Vec2(
                rand() * GrainTileWorld,
                rand() * GrainTileWorld,
              ),
              "tex" := tex,
              "paint" := painting.panel,
              "grain" := grainTex,
            ),
          )
        else plainQuads.push(renderQuads(j))
      if plainQuads.length > 0 then
        aboveGround.push(
          p.shape(wallForm(plainQuads), wallShade, cullMode = CullMode.None)
            .bind("samp" := sampler, "eye" := eyePos, "tex" := tex),
        )

    val mirror = GaussianMirrorReflection(
      p,
      cam,
      shapes = aboveGround,
      vpName = "vp",
      alphaScale = LightY,
      blurStrength = 5.0,
      blurRatioVertical = 3.0,
      clearColor = Vec4(0.9, 0.9, 0.9, 0.0),
    )

    val sceneShapes = Arr[AnyShape]()
    for s <- aboveGround do sceneShapes.push(s)

    val floorW = bounds.maxX - bounds.minX
    val floorD = bounds.maxZ - bounds.minZ
    val piecesX = Math.ceil(floorW * AmbienceTexScale / MaxTexSize).toInt
    val piecesZ = Math.ceil(floorD * AmbienceTexScale / MaxTexSize).toInt
    for
      ix <- 0 until piecesX
      iz <- 0 until piecesZ
    do
      val pieceBounds = (
        minX = bounds.minX + floorW * ix / piecesX,
        minZ = bounds.minZ + floorD * iz / piecesZ,
        maxX = bounds.minX + floorW * (ix + 1) / piecesX,
        maxZ = bounds.minZ + floorD * (iz + 1) / piecesZ,
      )
      val pieceForm = form(Arr(planeQuad(pieceBounds, 0.0, faceUp = false)))
      val size = texSize(floorW / piecesX, floorD / piecesZ, AmbienceTexScale)
      val tex = bakeAmbience(s"floor $ix,$iz", pieceForm, size.w, size.h)
      sceneShapes.push(
        p.shape(pieceForm, floorShade, cullMode = CullMode.Front)
          .bind(
            "samp" := sampler,
            "tileSamp" := tileSampler,
            "tex" := tex,
            "slabTex" := slabTex,
            "reflTex" := mirror.resultPanel,
            "res" := canvasRes,
          ),
      )

    val sceneVp = p.binding[Mat4]

    val scenePanel = p
      .panel(
        format = TextureFormat.Rgba16Float,
        clearColor = (0.9, 0.95, 0.99, 1.0),
        depthTest = true,
        multisample = true,
        shapes = sceneShapes,
      )
      .bind("vp" := sceneVp)

    val bloom = Bloom(
      p,
      scenePanel,
      intensity = BloomIntensity,
      threshold = 1.0,
      blurRadius = 3.0,
      mipLevels = 5,
      toneKnee = 0.9,
      toneWhite = 1.5,
    )

    // ---- input ----

    val input = p.input(dragGlideHalfLife = 90.0, dragGlideMinSpeed = 50.0)
    val controller =
      BasicFirstPersonCameraController(
        cam,
        input,
        sensitivity = 2.5,
        speed = WalkSpeed,
      )

    p.onResize: (w, h) =>
      cam.set(aspect = w / h)
      canvasRes.set(Vec2(w, h))
      mirror.resize(w, h)

    animate: tpf =>
      input.update(tpf)
      controller.update(tpf)
      cam.pos = floorBnd.confine(
        cam.pos,
        margin = WallClearance,
        eyeY = if devMode then cam.pos.y else EyeHeight,
      )
      val vp = cam.viewProjMat
      sceneVp.set(vp)
      eyePos.set(cam.pos)
      mirror.paint(vp)
      p.paint(scenePanel)
      bloom.paint()
      p.show(bloom.resultPanel)
