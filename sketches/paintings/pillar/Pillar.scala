package sketches.paintings.pillar

import org.scalajs.dom.HTMLCanvasElement
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js.annotation.JSExportTopLevel

val Width = 640
val Height = 1000

@JSExportTopLevel("sketch")
def pillar(canvas: HTMLCanvasElement): Unit =
  Painter.init(canvas): p =>
    val panel = p.panel(
      width = Width,
      height = Height,
      clearColor = (0.9, 0.88, 0.84, 1.0),
    )

    p.paintAndShow(panel)
