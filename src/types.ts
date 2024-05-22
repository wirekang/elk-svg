export type ElkSvgOptions = {
  /**
   * `svg` DOM Element.
   */
  container: Element;

  /**
   * to override default nodeShape or provide custom shape.
   * @see {@link NodeShapeFunction}
   */
  nodeShapeFunctions?: Record<string, NodeShapeFunction>;

  /**
   * to override default classes.
   * @see {@link Classnames}
   */
  classnames?: Classnames;

  /**
   * to override default attributes.
   * @see {@link Attrnames}
   */
  attrnames?: Attrnames;

  logger?: Logger;

  defaultOptions?: {
    node?: ElkSvgNodeOptions;
    edge?: ElkSvgEdgeOptions;
    port?: ElkSvgPortOptions;
    label?: ElkSvgLabelOptions;
  };
};

export type NodeShapeFunction = (
  node: ElkSvgNode & { width: number; height: number },
  logger: Logger,
) => Element;

export type Classnames = {
  topLevelGroup: string;

  group: string;

  nodeGroup: string;
  nodeComponent: string;

  edgeGroup: string;
  edgeComponent: string;

  portGroup: string;
  portComponent: string;

  labelGroup: string;
  labelComponent: string;
};

export type Attrnames = {
  id: string;
};

export type Logger = {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
};

export type ElkSvgElementOptions = {
  classes?: string[];
};

export type ElkSvgNodeOptions = ElkSvgElementOptions & {
  shape?: string;

  /**
   * For rounded shapes.
   */
  radius?: number;
};

export type ElkSvgEdgeOptions = ElkSvgElementOptions & {};

export type ElkSvgLabelOptions = ElkSvgElementOptions & {};

export type ElkSvgPortOptions = ElkSvgElementOptions & {};

export type Point = { x: number; y: number };

export type ElkSvgElement = {
  id?: string;
  labels?: ElkSvgLabel[];

  svg?: ElkSvgElementOptions;
};

export type ElkSvgLabel = ElkSvgShape & {
  text?: string;
};

export type ElkSvgShape = ElkSvgElement & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type ElkSvgNode = ElkSvgShape & {
  id: string;
  children?: ElkSvgNode[];
  ports?: ElkSvgPort[];
  edges?: ElkSvgEdge[];

  svg?: ElkSvgNodeOptions;
};

export type ElkSvgPort = ElkSvgShape & { id: string; svg?: ElkSvgPortOptions };

export type ElkSvgEdge = ElkSvgElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections?: ElkSvgEdgeSection[];
  container?: string;

  svg?: ElkSvgEdgeOptions;
};

export type ElkSvgEdgeSection = ElkSvgElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};
