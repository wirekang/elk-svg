import type { RenderElements } from "../render-types";
import type { DefaultRenderingOptions, Shape, StrictNode } from "../types";
import { Flatter } from "./flatter";
import { AbsolutePosition } from "./middlewares/absolute-position";
import { GenPath } from "./middlewares/gen-path";
import { SticNode } from "./middlewares/stick-node";
import { PathWriterImpl } from "./path-writer";

export class Preprocessor {
  private readonly pw = new PathWriterImpl();

  constructor(
    private readonly dro: DefaultRenderingOptions,
    private readonly shapes: Record<string, Shape>,
  ) {}

  public start(node: StrictNode): RenderElements {
    const flatResult = new Flatter(this.dro).flat(node);
    const middlewares = [
      new AbsolutePosition(),
      new SticNode(this.shapes, this.pw),
      new GenPath(this.shapes, this.pw),
    ];
    middlewares.forEach((m) => {
      m.run(flatResult);
    });
    return flatResult;
  }
}
