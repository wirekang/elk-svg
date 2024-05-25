import type { Classnamer } from "../classnames";
import type { RenderElementType, RenderElementTypeMap } from "../render-types";
import type { Logger, Shape } from "../types";

export type Component<T extends RenderElementType> = {
  key(ctx: RenderingContext<T>): any[];
  render(ctx: RenderingContext<T>): SVGElement;
};

export type RenderingContext<T extends RenderElementType> = {
  logger: Logger;
  element: RenderElementTypeMap[T];
  classnamer: Classnamer;
  shapes: Record<string, Shape>;
};
