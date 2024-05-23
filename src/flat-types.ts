import type {
  ElkSvgStrictEdge,
  ElkSvgStrictLabel,
  ElkSvgStrictNode,
  ElkSvgStrictPort,
} from "./strict-types";

export type Flatten<T extends { svg?: any }> = Omit<
  T,
  "children" | "edges" | "labels" | "ports" | "layoutOptions"
> &
  Required<Pick<T, "svg">> & { depth: number; parentId: string };

export type FlatNode = Omit<Flatten<ElkSvgStrictNode>, "parentId"> & {
  parentId: string | null;
  shapePath?: string;
};

export type FlatEdge = Flatten<ElkSvgStrictEdge> & {
  // Container's position
  x: number;
  y: number;

  arrow?: {
    x: number;
    y: number;
    angle: number;
    path: string;
  };

  linePath?: string;
};

export type FlatPort = Flatten<ElkSvgStrictPort> & {
  shapePath?: string;
};

export type FlatLabel = Flatten<ElkSvgStrictLabel> & {
  // Id is aut generated with parentId and index.
  id: string;
};

export type FlatElement = FlatNode | FlatEdge | FlatPort | FlatLabel;
export type FlatElementTypeMap = {
  node: FlatNode;
  port: FlatPort;
  edge: FlatEdge;
  label: FlatLabel;
};
export type FlatElementType = keyof FlatElementTypeMap;

export type FlatElements = {
  nodes: FlatNode[];
  edges: FlatEdge[];
  ports: FlatPort[];
  labels: FlatLabel[];
};
