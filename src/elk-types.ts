export type ElkPoint = { x: number; y: number };

export type ElkGraphElement = {
  id?: string;
  labels?: ElkLabel[];
};

export type ElkLabel = ElkShape & {
  text?: string;
};

export type ElkShape = ElkGraphElement & {
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

export type ElkEdge = ElkGraphElement & {
  id: string;
  junctionPoints?: ElkPoint[];
  sources: string[];
  targets: string[];
  sections?: ElkEdgeSection[];
  container?: string;
};

export type ElkEdgeSection = ElkGraphElement & {
  id: string;
  startPoint: ElkPoint;
  endPoint: ElkPoint;
  bendPoints?: ElkPoint[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};

export type LayoutedElkNode = ElkNode & {
  x: number;
  y: number;
  width: number;
  height: number;
  children?: LayoutedElkNode[];
  edges?: LayoutedElkEdge[];
};

export type LayoutedElkEdge = ElkEdge & {
  container: string;
};
