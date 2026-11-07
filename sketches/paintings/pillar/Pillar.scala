package sketches.paintings.pillar

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}
import trivalibs.utils.random.*

import scala.scalajs.js.annotation.JSExportTopLevel
import trivalibs.graphics.geometry.Quad

val Width = 640
val Height = 1000

val MinWidth = 0.3
val MaxWidth = 0.7
val MinHeight = 0.1
val MaxHeight = 0.45

val PaletteColorChoiseCount = 6
val PaletteColorCount = 4

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
        (randNormal01() * 0.7 + 0.4).clamp01,
        if j == 0 then randNormal01() * 0.65 else randNormal01() * 0.65 + 0.35,
      ).hsv2rgbSmooth,
    )
  val colors = Arr[Vec3]()
  for i <- 0 to (PaletteColorCount - 1)
  do colors.push(colorChoises.pick())

class Pillar(val outerWidth: Double, val outerHeight: Double):
  val width = outerWidth * randInRange(MinWidth, MaxWidth)
  val height = outerHeight * 0.95

  def nextHeightSegment(
      remainingHeight: Double,
  ): (heightSegment: Double, remainingHeight: Double) =
    if remainingHeight <= height * MaxHeight then return (remainingHeight, 0.0)
    val x = randInRange(MinHeight, MaxHeight) * remainingHeight
    (x, remainingHeight - x)

  val heightSegments = Arr[Double]()
  var segment = nextHeightSegment(outerHeight * 0.95)
  while segment.remainingHeight > 0.0 do
    heightSegments.push(segment.heightSegment)
    segment = nextHeightSegment(segment.remainingHeight)

  val quads = Arr[Quad[Vec2]]()

@JSExportTopLevel("sketch")
def pillar(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val panel = p.panel(
      width = Width,
      height = Height,
      clearColor = (0.9, 0.88, 0.84, 1.0),
    )

    p.paintAndShow(panel)
