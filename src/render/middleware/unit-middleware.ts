import { RenderMiddleware } from "./render-middleware.js";

export const unitMiddleware: RenderMiddleware<any> = ({ output }) => {
  unit(output.attrs, "x");
  unit(output.attrs, "y");
  unit(output.attrs, "width");
  unit(output.attrs, "height");
  unit(output.attrs, "dx");
  unit(output.attrs, "dy");
  unit(output.attrs, "cx");
  unit(output.attrs, "cy");
  unit(output.attrs, "r");
};

function unit(attrs: any, key: string, unit = "px") {
  const v = attrs[key];
  if (typeof v !== "number") {
    return;
  }
  attrs[key] = `${v}${unit}`;
}
