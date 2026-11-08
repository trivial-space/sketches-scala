package sketches.rooms.columns

import trivalibs.graphics.geometry.Quad
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

// ---------------------------------------------------------------------------
// Tunables — the pillar algorithm, all relative to the pillar's own size
// ---------------------------------------------------------------------------

private val PaletteHueCount = 6
private val PillarColorCount = 4

// segment height, as a fraction of the height still to fill
private val MinSegment = 0.1
private val MaxSegment = 0.45
private val SegmentGap = 0.004

// corner displacement, as a fraction of the pillar width
private val VertexJitter = 0.04

private val HueJitter = 0.015
private val SaturationJitter = 0.23
private val ValueJitter = 0.3

// how far jittered corners can reach past the pillar rect, as a fraction of width
val PillarMarginRatio = VertexJitter * 2.0

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

  def pillarColors(): Arr[Vec3] =
    val colors = Arr[Vec3]()
    for _ <- 0 until PillarColorCount do colors.push(choices.pick())
    colors

// ---------------------------------------------------------------------------
// Pillar
// ---------------------------------------------------------------------------

class PaintedQuad(val quad: Quad[Vec2], val hsv: Vec3)

class PillarPainting(val width: Double, val height: Double, colors: Arr[Vec3]):
  private def nextSegment(
      remaining: Double,
  ): (segment: Double, remaining: Double) =
    if remaining <= height * MaxSegment then (remaining, 0.0)
    else
      val x = randInRange(MinSegment, MaxSegment) * remaining
      (x, remaining - x)

  private def jitteredCorner(x: Double, y: Double): Vec2 =
    Vec2(
      x + randNormal11() * VertexJitter * width,
      y + randNormal11() * VertexJitter * width,
    )

  private def jitteredQuad(bottom: Double, segment: Double): Quad[Vec2] =
    val gap = SegmentGap * height
    val top = bottom + segment - gap
    val low = bottom + gap
    Quad(
      jitteredCorner(0.0, top),
      jitteredCorner(0.0, low),
      jitteredCorner(width, low),
      jitteredCorner(width, top),
    )

  private def variedColor(hsv: Vec3): Vec3 =
    Vec3(
      hsv.x + randNormal11() * HueJitter,
      (hsv.y + randNormal11() * SaturationJitter).clamp01,
      (hsv.z + randNormal11() * ValueJitter).clamp01,
    )

  val segments = Arr[Double]()
  private var remaining = height
  while remaining > 0.0 do
    val next = nextSegment(remaining)
    segments.push(next.segment)
    remaining = next.remaining

  val quads = Arr[PaintedQuad]()
  private var bottom = 0.0
  for segment <- segments do
    val pairColor = colors.pick()
    for _ <- 0 to 1 do
      quads.push(
        PaintedQuad(jitteredQuad(bottom, segment), variedColor(pairColor)),
      )
    bottom += segment

  quads.sort((a, b) => if a.hsv.z < b.hsv.z then -1 else 1)
