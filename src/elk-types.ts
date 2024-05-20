export type LayoutOptions = Record<string, string>;

export type ElkPoint = { x: number; y: number };

export type ElkGraphElement = {
  labels?: ElkLabel[];
  layoutOptions?: LayoutOptions;
};

export type ElkLabel = Omit<
  ElkShape & {
    text?: string;
  },
  "id" | "labels"
>;

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
