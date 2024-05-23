export type Point = { x: number; y: number };

export type ElkElement = {
  id?: string;
  labels?: ElkLabel[];
  layoutOptions?: Record<string, any>;
};

export type ElkLabel = ElkShape & {
  text?: string;
};

export type ElkShape = ElkElement & {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
};

export type ElkNode = ElkShape & {
  id: string;
  children?: ElkNode[];
  ports?: ElkPort[];
  edges?: ElkEdge[];
};

export type ElkPort = ElkShape & { id: string };

export type ElkEdge = ElkElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections?: ElkEdgeSection[];
  container?: string;
};

export type ElkEdgeSection = ElkElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};
