package sketches.paintings.pillar

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel
import trivalibs.utils.random.randInRange

val Width = 640
val Height = 1000

val MinWidth = 0.3
val MaxWidth = 0.7
val MinHeight = 0.1
val MaxHeight = 0.45

class Pillar(val outerWidth: Double, val outerHeight: Double):
  val width = outerWidth * randInRange(MinWidth, MaxWidth)

@JSExportTopLevel("sketch")
def pillar(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val panel = p.panel(
      width = Width,
      height = Height,
      clearColor = (0.9, 0.88, 0.84, 1.0),
    )

    p.paintAndShow(panel)
