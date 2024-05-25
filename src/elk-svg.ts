import { defaultLogger } from "./logger";
import { Preprocessor } from "./preprocess";
import { Renderer } from "./render";
import { defaultShapes } from "./shapes";
import type { ElkSvg, InputNode } from "./types";
import { ElkSvgOptions } from "./types";

/**
 *
 * @param options
 * @returns {@link ElkSvg} instance.
 */
export function initElkSvg(options: ElkSvgOptions): ElkSvg {
  return new ElkSvgImpl(options);
}

class ElkSvgImpl implements ElkSvg {
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

  public ref(id: string): Element | null {
    return this.renderer.ref(id);
  }
}

type Options = ElkSvgOptions & Required<Omit<ElkSvgOptions, "idAttribute">>;
