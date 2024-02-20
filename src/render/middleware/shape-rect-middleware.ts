import { ElkSvgNode } from "../../typings.js";
import { RenderMiddleware } from "./render-middleware.js";

export const shapeRectMiddleware: RenderMiddleware<ElkSvgNode> = ({
  input,
  output,
}) => {
  if (
    input.renderProps?.shape === undefined ||
    input.renderProps.shape === "rectangle"
  ) {
    output.sel = "rect";
    output.attrs.x = input.x;
    output.attrs.y = input.y;
    output.attrs.width = input.width;
    output.attrs.height = input.height;
  }
};
