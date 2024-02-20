export interface ElkPoint {
  x: number;
  y: number;
}

export interface ElkSvgGraphElement {
  id?: string;
  labels?: ElkSvgLabel[];
  layoutOptions?: any;
  renderProps?: ElkSvgRenderProps;
}

export interface ElkSvgShape extends ElkSvgGraphElement {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface ElkSvgNode extends ElkSvgShape {
  id: string;
  children?: ElkSvgNode[];
  edges?: ElkSvgEdge[];
  renderProps?: ElkSvgNodeRenderProps;
}

export interface ElkSvgLabel extends ElkSvgShape {
  text?: string;
}

export interface ElkSvgEdge extends ElkSvgGraphElement {
  id: string;
  junctionPoints?: ElkPoint[];
  sources: string[];
  targets: string[];
  sections?: ElkSvgEdgeSection[];
  renderProps?: ElkSvgEdgeRenderProps;
}

export interface ElkSvgEdgeSection extends ElkSvgGraphElement {
  id: string;
  startPoint: ElkPoint;
  endPoint: ElkPoint;
  bendPoints?: ElkPoint[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
}

export interface ElkSvgRenderProps {
  className?: string;
  hidden?: boolean;
}

export interface ElkSvgNodeRenderProps extends ElkSvgRenderProps {
  shape?: Shape;
}

export interface ElkSvgEdgeRenderProps extends ElkSvgRenderProps {}

export type Shape = "rectangle" | "circle";
