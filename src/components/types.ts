import type { ElkSvgElement, Logger, NodeShapeFunction } from "../types";

/**
 * Component is one-to-one mapping of ElkGraphElement to DOMElement.
 */
export type Component<EE extends ElkSvgElement = ElkSvgElement> = {
  name: string;

  validate(ee: ElkSvgElement): boolean;

  /**
   * If key is changed, DOMElement is created and replaces previous one.
   */
  key(ee: EE): string;

  /**
   * Creates DomElement represents given ElkGraphElement.
   * Return null if nothing to show.
   */
  render(ctx: ComponentRenderContext, ee: EE): Element | null;
};

export type ComponentRenderContext = {
  nodeShapeFunctions: Record<string, NodeShapeFunction>;
  logger: Logger;
};
