import type { Point } from "./elk-types";

export type LayoutedElement = {
  id?: string;
  labels?: LayoutedLabel[];
  layoutOptions?: Record<string, any>;
};

export type LayoutedLabel = LayoutedShape & {
  text?: string;
};

export type LayoutedShape = LayoutedElement & {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type LayoutedNode = LayoutedShape & {
  id: string;
  children?: LayoutedNode[];
  ports?: LayoutedPort[];
  edges?: LayoutedEdge[];
};

export type LayoutedPort = LayoutedShape & { id: string };

export type LayoutedEdge = LayoutedElement & {
  id: string;
  junctionPoints?: Point[];
  sources: string[];
  targets: string[];
  sections: LayoutedEdgeSection[];
  container: string;
};

export type LayoutedEdgeSection = LayoutedElement & {
  id: string;
  startPoint: Point;
  endPoint: Point;
  bendPoints?: Point[];
  incomingShape?: string;
  outgoingShape?: string;
  incomingSections?: string[];
  outgoingSections?: string[];
};
