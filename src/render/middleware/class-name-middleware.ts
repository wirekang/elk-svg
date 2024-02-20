import { RenderMiddleware } from "./render-middleware.js";

export const classNameMiddleware: RenderMiddleware<any> = (ctx) => {
  ctx.output.attrs.class = ctx.input.renderProps?.className;
};
