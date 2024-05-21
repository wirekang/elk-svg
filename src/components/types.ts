import type { ElkGraphElement } from "../elk-types";
import type { Logger } from "../logger";
import type { NodeShapeFunction } from "../node-shape";

/**
 * Component is one-to-one mapping of ElkGraphElement to DOMElement.
 */
export type Component<EE extends ElkGraphElement = ElkGraphElement> = {
  name: string;

  validate(ee: ElkGraphElement, data: RenderData): boolean;

  /**
   * If key is changed, DOMElement is created and replaces previous one.
   */
  key(ee: EE, data: RenderData): string;

  /**
   * Creates DomElement represents given ElkGraphElement.
   * Return null if nothing to show.
   */
  render(ctx: ComponentRenderContext, ee: EE, data: RenderData): Element | null;
};

/**
 * Rendering specific options.
 */
export type RenderData = {
  nodeShape?: string;
  classes?: string[];
};

export type ComponentRenderContext = {
  nodeShapeFunctions: Record<string, NodeShapeFunction>;
  logger: Logger;
};
