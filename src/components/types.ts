import type {
  Classnames,
  EdgeArrowFunction,
  ElkSvgElement,
  Logger,
  NodeShapeFunction,
} from "../types";

export type Component<EE extends ElkSvgElement = ElkSvgElement> = {
  name: string;
  validate(ee: ElkSvgElement): boolean;
  key(ee: EE): string;
  render(ctx: ComponentRenderContext, ee: EE): Element | null;
};

export type ComponentRenderContext = {
  nodeShapeFunctions: Record<string, NodeShapeFunction>;
  edgeArrowFunctions: Record<string, EdgeArrowFunction>;
  classnames: Classnames;
  logger: Logger;
};
