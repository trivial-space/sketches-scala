package sketches.paintings.pillar

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.graphics.geometry.Quad
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel

val Width = 640
val Height = 1000

val MinWidth = 0.3
val MaxWidth = 0.7
val MinHeight = 0.1
val MaxHeight = 0.45
val HeightGap = 0.004

val PaletteColorChoiseCount = 6
val PaletteColorCount = 4

/** Corner displacement, as a fraction of the pillar width. */
val VertexJitter = 0.04

/** Per-quad HSV variation around its pair's palette color. */
val HueJitter = 0.015
val SaturationJitter = 0.23
val ValueJitter = 0.3

class Palette:
  val colorOffset = rand() * (1.0 / PaletteColorChoiseCount)

  val colorChoises = Arr[Vec3]()
  for
    i <- 0 to (PaletteColorChoiseCount - 1)
    n = i.toDouble + colorOffset
    j <- 0 to 1
  do
    colorChoises.push(
      Vec3(
        n / PaletteColorChoiseCount + randNormal11() * 0.1,
        (randNormal01() * 0.8 + 0.45).clamp01,
        if j == 0 then randNormal01() * 0.65 else randNormal01() * 0.65 + 0.45,
      ),
    )

  val colors = Arr[Vec3]()
  for i <- 0 to (PaletteColorCount - 1)
  do colors.push(colorChoises.pick())

class ColoredQuad(val quad: Quad[Vec2], val color: Vec3)

class Pillar(val outerWidth: Double, val outerHeight: Double, palette: Palette):
  val width = outerWidth * randInRange(MinWidth, MaxWidth)
  val height = outerHeight * 0.95
  val left = (outerWidth - width) * 0.5
  val bottom = (outerHeight - height) * 0.5

  def nextHeightSegment(
      remainingHeight: Double,
  ): (heightSegment: Double, remainingHeight: Double) =
    if remainingHeight <= height * MaxHeight then return (remainingHeight, 0.0)
    val x = randInRange(MinHeight, MaxHeight) * remainingHeight
    (x, remainingHeight - x)

  val heightSegments = Arr[Double]()
  var remainingHeight = height
  while remainingHeight > 0.0 do
    val segment = nextHeightSegment(remainingHeight)
    heightSegments.push(segment.heightSegment)
    remainingHeight = segment.remainingHeight

  def jitteredCorner(x: Double, y: Double): Vec2 =
    Vec2(
      x + randNormal11() * VertexJitter * width,
      y + randNormal11() * VertexJitter * width,
    )

  def jitteredQuad(segmentBottom: Double, segmentHeight: Double): Quad[Vec2] =
    val offset = HeightGap * height
    val right = left + width
    val top = segmentBottom + segmentHeight - offset
    val bottom = segmentBottom + offset
    Quad(
      jitteredCorner(left, top),
      jitteredCorner(left, bottom),
      jitteredCorner(right, bottom),
      jitteredCorner(right, top),
    )

  def variedColor(hsv: Vec3): Vec3 =
    Vec3(
      hsv.x + randNormal11() * HueJitter,
      (hsv.y + randNormal11() * SaturationJitter).clamp01,
      (hsv.z + randNormal11() * ValueJitter).clamp01,
    )

  val quads = Arr[ColoredQuad]()
  var segmentBottom = bottom
  for segmentHeight <- heightSegments do
    val pairColor = palette.colors.pick()
    for _ <- 0 to 1 do
      quads.push(
        ColoredQuad(
          jitteredQuad(segmentBottom, segmentHeight),
          variedColor(pairColor),
        ),
      )
    segmentBottom += segmentHeight

  quads.sort((quad1, quad2) => if quad1.color.z < quad2.color.z then -1 else 1)

type QuadAttribs = (position: Vec2)
type QuadVaryings = (pos: Vec2)
type QuadUniforms = (color: Vec3)

@JSExportTopLevel("sketch")
def pillar(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val shade = p.shade[QuadAttribs, QuadVaryings, QuadUniforms]: program =>
      program.vert: ctx =>
        val pos = LetVec2("pos")
        Block(
          pos := ctx.in.position / Vec2(Width, Height),
          ctx.out.position := vec4(pos.fit0111, 0.0, 1.0),
          ctx.out.pos := pos,
        )
      program.frag: ctx =>
        ctx.out.color := vec4(
          ctx.bindings.color,
          0.75 + ((ctx.in.pos * 380).simplexNoise() * 0.12),
        )

    val pillar = Pillar(Width.toDouble, Height.toDouble, Palette())

    val shapes = pillar.quads.map: coloredQuad =>
      val form = p.form(geometry = coloredQuad.quad.toBufferedGeometry)
      p.shape(form, shade, blendState = BlendState.Alpha)
        .bind("color" := p.binding(coloredQuad.color.hsv2rgbSmooth))

    val panel = p.panel(
      width = Width,
      height = Height,
      clearColor = (0.9, 0.88, 0.84, 1.0),
      multisample = true,
      shapes = shapes,
    )

    p.paintAndShow(panel)
