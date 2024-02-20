import { RenderMiddleware } from "./render-middleware.js";

export const idToKeyMiddleware: RenderMiddleware<any> = (ctx) => {
  if (ctx.input.id !== undefined && ctx.input.id !== null) {
    ctx.output.key = ctx.input.id;
  }
};
