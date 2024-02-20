import { RenderMiddleware } from "./render-middleware.js";

export const hiddenMiddleware: RenderMiddleware<any> = (ctx) => {
  if (ctx.input.renderProps?.hidden) {
    ctx.output.sel = "g";
    return false;
  }
};
