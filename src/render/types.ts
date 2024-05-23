import type { Classnamer } from "../classnames";
import type { FlatElementType, FlatElementTypeMap } from "../flat-types";
import type { Logger } from "../logger";
import type { Shape } from "../shape-types";

export type Component<T extends FlatElementType> = {
  key(ctx: RenderingContext<T>): any[];
  render(ctx: RenderingContext<T>): SVGElement;
};

export type RenderingContext<T extends FlatElementType> = {
  logger: Logger;
  element: FlatElementTypeMap[T];
  classnamer: Classnamer;
  shapes: Record<string, Shape>;
};
