import { ElkSvgLabel } from "../../typings.js";
import { RenderMiddleware } from "./render-middleware.js";

export const textMiddleware: RenderMiddleware<ElkSvgLabel> = ({
  input,
  output,
}) => {
  output.sel = "text";
  output.attrs["text-anchor"] = "start";
  output.attrs["dominant-baseline"] = "hanging";
  output.attrs.x = input.x;
  output.attrs.y = input.y;
  output.children.push(input.text);
};
