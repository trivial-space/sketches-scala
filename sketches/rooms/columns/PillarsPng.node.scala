package sketches.rooms.columns

import trivalibs.graphics.geometry.{*, given}
import trivalibs.prelude.core.{*, given}
import trivalibs.prelude.painter.{*, given}

import scala.scalajs.js
import scala.scalajs.js.annotation.JSExportTopLevel

object PillarsPng:
  // ---- tunables ----
  // bay frame height as a fraction of the image height
  val FrameFill = 0.98
  val PillarCount = 3

  @JSExportTopLevel("renderPillars")
  def renderPillars(gpu: GPU, out: PixelImage): js.Promise[Unit] =
    Painter
      .init(out, gpu, logAdapter = true)
      .flatMap: p =>
        type PaintVertex = (position: Vec3, color: Vec3)

        val shade =
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

        val imageSize = Vec2(out.width, out.height)
        val frame = bayFrame(BayWidth)
        val pxPerMeter = imageSize.y * FrameFill / frame.w
        val frameBottom = (imageSize.y - frame.w * pxPerMeter) / 2.0
        val group = RoomPalette().pillarGroup()

        def pillarQuads(size: Vec2, left: Double): Arr[Quad[PaintVertex]] =
          val pillar = PillarPainting(size.x, size.y, group.pillarColors())
          val origin = Vec2(left, frameBottom + PillarFrameGap * pxPerMeter)
          def vertex(v: Vec2, color: Vec3): PaintVertex =
            val pos = origin + v * pxPerMeter
            (position = Vec3(pos.x, pos.y, 0.0), color = color)
          pillar.quads.map: pq =>
            val rgb = pq.hsv.hsv2rgbSmooth
            Quad(
              vertex(pq.quad.tl, rgb),
              vertex(pq.quad.bl, rgb),
              vertex(pq.quad.br, rgb),
              vertex(pq.quad.tr, rgb),
            )

        val sizes = Arr[Vec2]()
        for _ <- 0 until PillarCount do sizes.push(randomPillarSize(frame))
        var pillarsWidth = 0.0
        for s <- sizes do pillarsWidth += s.x * pxPerMeter
        val gap = (imageSize.x - pillarsWidth) / (PillarCount + 1)

        val quads = Arr[Quad[PaintVertex]]()
        var left = gap
        for s <- sizes do
          for q <- pillarQuads(s, left) do quads.push(q)
          left += s.x * pxPerMeter + gap

        val form = p.form(geometry =
          toBufferedGeometry(Mesh(quads), MeshBufferType.FaceVertices),
        )
        val panel = p.panel(
          clearColor = Vec4(WallTintLow.x, WallTintLow.y, WallTintLow.z, 1.0),
          multisample = true,
          shape = p
            .shape(form, shade, blendState = BlendState.Alpha)
            .bind("size" := imageSize),
        )
        p.paintAndShow(panel)
        p.awaitReadback()
