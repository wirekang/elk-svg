import { ElkSvgEdge } from "../../typings.js";
import { RenderMiddleware } from "./render-middleware.js";

export const edgePolylineMiddleware: RenderMiddleware<ElkSvgEdge> = (ctx) => {
  const points = [] as string[];

  (ctx.input.sections ?? []).forEach((section) => {
    points.push(`${section.startPoint.x},${section.startPoint.y}`);
    (section.bendPoints ?? []).forEach((it) => {
      points.push(`${it.x},${it.y}`);
    });
    points.push(`${section.endPoint.x},${section.endPoint.y}`);
  });
  ctx.output.sel = "polyline";
  ctx.output.attrs.points = points.join(" ");
};
