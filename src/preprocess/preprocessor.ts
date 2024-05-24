import type { FlatElements } from "../flat-types";
import type { DefaultRenderingOptions, Shape, StrictNode } from "../types";
import { Flatter } from "./flatter";
import { AbsolutePosition } from "./middlewares/absolute-position";
import { ShapePath } from "./middlewares/shape-path";

export class Preprocessor {
  constructor(
    private readonly dro: DefaultRenderingOptions,
    private readonly shapes: Record<string, Shape>,
  ) {}

  public start(node: StrictNode): FlatElements {
    const middlewares = [new AbsolutePosition(), new ShapePath(this.shapes)];
    const flatResult = new Flatter(this.dro).flat(node);
    middlewares.forEach((m) => {
      m.run(flatResult);
    });
    return flatResult;
  }
}
