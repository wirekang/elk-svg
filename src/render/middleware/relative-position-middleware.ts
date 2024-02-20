import { ElkSvgShape } from "../../typings.js";
import { n } from "../../utility/number.js";
import { RenderMiddleware } from "./render-middleware.js";

export const relativePositionMiddleware: RenderMiddleware<ElkSvgShape> = (
  ctx,
) => {
  ctx.output.attrs.x = n(ctx.output.attrs.x) + n(ctx.node.x);
  ctx.output.attrs.y = n(ctx.output.attrs.y) + n(ctx.node.y);
};
