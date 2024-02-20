import { ElkSvgNode } from "../../typings.js";
import { RenderOutput } from "../typings.js";

export type RenderMiddleware<T> = (
  ctx: RenderMiddlewareContext<T>,
) => void | boolean;

export type RenderMiddlewareContext<T> = {
  node: ElkSvgNode;
  input: T;
  output: RenderOutput;
};
