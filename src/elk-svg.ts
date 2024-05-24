import { defaultLogger } from "./logger";
import { Preprocessor } from "./preprocess";
import { Renderer } from "./render";
import { defaultShapes } from "./shapes";
import type { InputNode } from "./types";
import { ElkSvgOptions } from "./types";

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

  public render(node: InputNode): void {
    const flatElements = this.preprocessor.start(node as any);
    this.renderer.render(flatElements);
  }

  /**
   *
   * @param id the id of elk element.
   * @returns rendered DOM element or null.
   */
  public ref(id: string): Element | null {
    return this.renderer.ref(id);
  }
}

type Options = ElkSvgOptions & Required<Omit<ElkSvgOptions, "idAttribute">>;
