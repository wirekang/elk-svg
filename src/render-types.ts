import type { StrictEdge, StrictLabel, StrictNode, StrictPort } from "./types";

type Flatten<T> = Omit<
  T,
  "children" | "edges" | "labels" | "ports" | "layoutOptions" | "svg"
> & { depth: number; parentId: string; classes: string[] };

export type RenderNode = Omit<Flatten<StrictNode>, "parentId"> & {
  parentId: string | null;
  shapePath?: string;
};

export type RenderEdge = Flatten<StrictEdge> & {
  arrow?: {
    x: number;
    y: number;
    angle: number;
    path: string;
  };

  linePath?: string;
};

export type RenderPort = Flatten<StrictPort> & {
  shapePath?: string;
};

export type RenderLabel = Flatten<StrictLabel> & {
  // Id is auto generated with parentId and index.
  id: string;
};

export type RenderElement = RenderNode | RenderEdge | RenderPort | RenderLabel;
export type RenderElementTypeMap = {
  node: RenderNode;
  port: RenderPort;
  edge: RenderEdge;
  label: RenderLabel;
};
export type RenderElementType = keyof RenderElementTypeMap;

export type RenderElements = {
  nodes: RenderNode[];
  edges: RenderEdge[];
  ports: RenderPort[];
  labels: RenderLabel[];
};
