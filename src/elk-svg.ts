import { defaultLogger, type Logger } from "./logger";
import { Preprocessor } from "./preprocess";
import { Renderer } from "./render";
import type { DefaultRenderingOptions } from "./rendering-types";
import type { Shape } from "./shape-types";
import { defaultShapes } from "./shape";
import { ElkSvgStrictNode } from "./strict-types";

export class ElkSvg {
  private readonly renderer: Renderer;
  private readonly preprocessor: Preprocessor;

  constructor(options: ElkSvgOptions) {
    const o: Options = {
      ...options,
      classPrefix: options.classPrefix ?? "elk-svg-",
      defaultRenderingOptions: { ...options.defaultRenderingOptions },
      logger: options.logger ?? defaultLogger,
      shapes: { ...defaultShapes, ...options.shapes },
    };

    this.renderer = new Renderer({
      idAttribute: o.idAttribute,
      classnamer: (n) => o.classPrefix + n,
      container: o.container,
      logger: o.logger,
      shapes: o.shapes,
    });
    this.preprocessor = new Preprocessor(o.defaultRenderingOptions, o.shapes);
  }

  /**
   * By default, type checking for input node is disabled not to bother typesystem.
   *
   * Use {@link ElkSvgStrictNode} If you need a strict type (e.g. writing literal node).
   */
  public render(node: any) {
    const flatElements = this.preprocessor.start(node);
    this.renderer.render(flatElements);
  }
}

export type ElkSvgOptions = {
  /**
   * `svg` DOM Element.
   */
  container: Element;

  defaultRenderingOptions?: DefaultRenderingOptions;

  classPrefix?: string;
  logger?: Logger;
  idAttribute?: string;
  shapes?: Record<string, Shape>;
};

type Options = ElkSvgOptions & Required<Omit<ElkSvgOptions, "idAttribute">>;
