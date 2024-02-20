import { RenderMiddleware } from "./render-middleware.js";
import { n } from "../../utility/number.js";
import { ElkSvgNode } from "../../typings.js";

export const shapeCircleMiddleware: RenderMiddleware<ElkSvgNode> = ({
  input,
  output,
}) => {
  if (input.renderProps?.shape === "circle") {
    const r = Math.max(input.width ?? 0, input.height ?? 0) / 2;
    output.sel = "circle";
    output.attrs.cx = n(input.x);
    output.attrs.cy = n(input.y);
    output.attrs.r = r;
  }
};
