import type { FlatElements } from "../flat-types";
import type { DefaultRenderingOptions } from "../rendering-types";
import type { Shape } from "../shape-types";
import type { ElkSvgStrictNode } from "../strict-types";
import { Flatter } from "./flatter";
import { AbsolutePosition } from "./middlewares/absolute-position";
import { ShapePath } from "./middlewares/shape-path";

export class Preprocessor {
  constructor(
    private readonly dro: DefaultRenderingOptions,
    private readonly shapes: Record<string, Shape>,
  ) {}

  public start(node: ElkSvgStrictNode): FlatElements {
    const middlewares = [new AbsolutePosition(), new ShapePath(this.shapes)];
    const flatResult = new Flatter(this.dro).flat(node);
    console.log(structuredClone(flatResult.all));
    middlewares.forEach((m) => {
      m.run(flatResult);
    });
    console.log(structuredClone(flatResult.all));
    return flatResult;
  }
}
