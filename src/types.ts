export type Point = { x: number; y: number };

export type Logger = {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
};

export type ElkSvgOptions = {
  /**
   * `svg` DOM Element.
   */
  container: Element;

  /**
   * Set default {@link RenderingOptions}(i.e. 'svg' property) for every element.
   *
   * Note that by default, there is no "default value" for rendering options. If a Node doesn't have a 'svg.shape' property, it'll rendered as an empty `g` tag.
   */
  defaultRenderingOptions?: DefaultRenderingOptions;

  /**
   *
   * Set the prefix for DOM class. Check out the full list of classes from
   * {@link https://github.com/wirekang/elk-svg/blob/main/src/classnames.ts#L1 | HERE}.
   *
   * If 'classPrefix' is "foo_", all rendered Labels will have a "foo_label" class.
   *
   * @default "elk-svg-"
   */
  classPrefix?: string;

  /**
   * If you set 'idAttribute' manually, all rendered DOM element will have a given attribute with Elk element id.
   *
   * Note that you can get the reference of rendered DOM element by {@link ElkSvg.ref} method without any configuration.
   *
   * If 'idAttribute' is "data-id", a Node with id "n1" will be rendered as `<rect data-id="n1">...`
   */
  idAttribute?: string;

  shapes?: Record<string, Shape>;

  logger?: Logger;
};

export type RenderingOptions = {
  classes?: string[];
};

export type NodeRenderingOptions = RenderingOptions & {
  shape?: string | null;
};

export type EdgeRenderingOptions = RenderingOptions & {
  arrow?: {
    shape: string;
    size: number;
    thickness: number;
  } | null;
};

export type PortRenderingOptions = RenderingOptions & {
  shape?: string | null;
};

export type LabelRenderingOptions = RenderingOptions;

export type DefaultRenderingOptions = {
  node?: Partial<NodeRenderingOptions>;
  edge?: Partial<EdgeRenderingOptions>;
  port?: Partial<PortRenderingOptions>;
  label?: Partial<LabelRenderingOptions>;
};

export type StrictElement = {
  id?: string;
  labels?: StrictLabel[];
  layoutOptions?: Record<string, any>;
};

export type StrictLabel = StrictShape & {
  text?: string;
  svg?: LabelRenderingOptions;
};

export type StrictShape = StrictElement & {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type StrictNode = StrictShape & {
  id: string;
  children?: StrictNode[];
  ports?: StrictPort[];
  edges?: StrictEdge[];
  svg?: NodeRenderingOptions;
};

export type StrictPort = StrictShape & { id: string; svg?: PortRenderingOptions };

export type StrictEdge = StrictElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections: StrictEdgeSection[];
  container: string;
  svg?: EdgeRenderingOptions;
};

export type StrictEdgeSection = StrictElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};

export type InputElement = {
  id?: string;
  labels?: InputLabel[];
  layoutOptions?: any;
};

export type InputLabel = InputShape & {
  text?: string;
  svg?: LabelRenderingOptions;
};

export type InputShape = InputElement & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type InputNode = InputShape & {
  id: string;
  children?: InputNode[];
  ports?: InputPort[];
  edges?: InputEdge[];
  svg?: NodeRenderingOptions;
};

export type InputPort = InputShape & {
  id: string;
  svg?: PortRenderingOptions;
};

export type InputEdge = InputElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections?: InputSection[];
  container?: string;
  svg?: EdgeRenderingOptions;
};

export type InputSection = InputElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};

export type Shape = (input: ShapeInput) => ShapeOutput;

export type ShapeInput = { width: number; height: number };
export type ShapeOutput = {
  path: [string, ...number[]][] | string;
};
