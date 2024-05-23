import type {
  EdgeRenderingOptions,
  LabelRenderingOptions,
  NodeRenderingOptions,
  PortRenderingOptions,
} from "./rendering-types";

type Point = { x: number; y: number };

export type ElkSvgInputElement = {
  id?: string;
  labels?: ElkSvgInputLabel[];
  layoutOptions?: any;
};

export type ElkSvgInputLabel = ElkSvgInputShape & {
  text?: string;
  svg?: LabelRenderingOptions;
};

export type ElkSvgInputShape = ElkSvgInputElement & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type ElkSvgInputNode = ElkSvgInputShape & {
  id: string;
  children?: ElkSvgInputNode[];
  ports?: ElkSvgInputPort[];
  edges?: ElkSvgInputEdge[];
  svg?: NodeRenderingOptions;
};

export type ElkSvgInputPort = ElkSvgInputShape & {
  id: string;
  svg?: PortRenderingOptions;
};

export type ElkSvgInputEdge = ElkSvgInputElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections?: ElkSvgInputSection[];
  container?: string;
  svg?: EdgeRenderingOptions;
};

export type ElkSvgInputSection = ElkSvgInputElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};
