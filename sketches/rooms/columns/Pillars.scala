package sketches.rooms.columns

import trivalibs.graphics.geometry.Quad
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

// ---------------------------------------------------------------------------
// Tunables — the pillar algorithm, all relative to the pillar's own size
// ---------------------------------------------------------------------------

private val PaletteHueCount = 6
private val GroupColorCount = 5
private val PillarColorCount = 4

// segment height, as a fraction of the height still to fill
private val MinSegment = 0.1
private val MaxSegment = 0.45
private val SegmentGap = 0.005

// segment rect variation, as a fraction of the pillar width
private val SegmentWidthJitter = 0.11
private val SegmentShiftJitter = 0.09

// reference block corner displacement, as a fraction of the pillar width
private val VertexJitter = 0.018

// each of a block's two quads against its reference block, as a fraction of
// the pillar width: a whole-quad shift in any direction, then its own corners
private val InstanceShift = 0.025
private val InstanceVertexJitter = 0.015

private val HueJitter = 0.015
private val SaturationJitter = 0.23
private val ValueJitter = 0.31

// how far jittered corners can reach past the pillar rect, as a fraction of width
val PillarMarginRatio =
  (VertexJitter + InstanceShift + InstanceVertexJitter + SegmentShiftJitter
    + SegmentWidthJitter * 0.5) * 2.0

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------

class RoomPalette:
  val hueOffset = rand() * (1.0 / PaletteHueCount)

  val choices = Arr[Vec3]()
  for
    i <- 0 until PaletteHueCount
    n = i.toDouble + hueOffset
    j <- 0 to 1
  do
    choices.push(
      Vec3(
        n / PaletteHueCount + randNormal11() * 0.1,
        (randNormal01() * 0.8 + 0.45).clamp01,
        if j == 0 then randNormal01() * 0.65 else randNormal01() * 0.65 + 0.45,
      ),
    )

  def pillarGroup(): PillarGroup = PillarGroup(
    pickMany(choices, GroupColorCount),
  )

class PillarGroup(val choices: Arr[Vec3]):
  def pillarColors(): Arr[Vec3] = pickMany(choices, PillarColorCount)

private def pickMany(from: Arr[Vec3], count: Int): Arr[Vec3] =
  val picked = Arr[Vec3]()
  for _ <- 0 until count do picked.push(from.pick())
  picked

// ---------------------------------------------------------------------------
// Pillar
// ---------------------------------------------------------------------------

class PaintedQuad(val quad: Quad[Vec2], val hsv: Vec3)

class PillarPainting(val width: Double, val height: Double, colors: Arr[Vec3]):
  private def randomOffset(scale: Double): Vec2 =
    Vec2(rand().fit0111, rand().fit0111) * (scale * width)

  private def segmentSpan(): (left: Double, right: Double) =
    val segmentWidth = width * (1.0 + randNormal11() * SegmentWidthJitter)
    val center = width * (0.5 + randNormal11() * SegmentShiftJitter)
    (left = center - segmentWidth * 0.5, right = center + segmentWidth * 0.5)

  private def referenceBlock(
      span: (left: Double, right: Double),
      bottom: Double,
      segment: Double,
  ): Quad[Vec2] =
    val gap = SegmentGap * height
    val top = bottom + segment - gap
    val low = bottom + gap
    def corner(x: Double, y: Double) = Vec2(x, y) + randomOffset(VertexJitter)
    Quad(
      corner(span.left, top),
      corner(span.left, low),
      corner(span.right, low),
      corner(span.right, top),
    )

  private def instanceOf(reference: Quad[Vec2]): Quad[Vec2] =
    val shift = randomOffset(InstanceShift)
    def corner(c: Vec2) = c + shift + randomOffset(InstanceVertexJitter)
    Quad(
      corner(reference.tl),
      corner(reference.bl),
      corner(reference.br),
      corner(reference.tr),
    )

  private def variedColor(hsv: Vec3): Vec3 =
    Vec3(
      hsv.x + randNormal11() * HueJitter,
      (hsv.y + randNormal11() * SaturationJitter).clamp01,
      (hsv.z + randNormal11() * ValueJitter).clamp01,
    )

  val segments = Arr[Double]()
  private var remaining = height
  while remaining > height * MaxSegment do
    val segment = randInRange(MinSegment, MaxSegment) * remaining
    segments.push(segment)
    remaining -= segment
  segments.push(remaining)
  segments.shuffle()

  val quads = Arr[PaintedQuad]()
  private var bottom = 0.0
  for segment <- segments do
    val pairColor = colors.pick()
    val reference = referenceBlock(segmentSpan(), bottom, segment)
    for _ <- 0 to 1 do
      quads.push(PaintedQuad(instanceOf(reference), variedColor(pairColor)))
    bottom += segment

  quads.sort((a, b) => if a.hsv.z < b.hsv.z then -1 else 1)
