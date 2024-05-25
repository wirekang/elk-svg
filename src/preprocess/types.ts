import { RenderEdge, RenderLabel, RenderNode, RenderPort } from "../render-types";
import type {
  EdgeRenderingOptions,
  LabelRenderingOptions,
  NodeRenderingOptions,
  PortRenderingOptions,
} from "../types";

export type FlatNode = RenderNode & { svg: NodeRenderingOptions };
export type FlatPort = RenderPort & { svg: PortRenderingOptions };
export type FlatEdge = RenderEdge & { svg: EdgeRenderingOptions };
export type FlatLabel = RenderLabel & { svg: LabelRenderingOptions };
export type FlatElement = FlatNode | FlatPort | FlatEdge | FlatLabel;

export type FlatElementRef =
  | { type: "node"; r: FlatNode }
  | { type: "edge"; r: FlatEdge }
  | { type: "port"; r: FlatPort }
  | { type: "label"; r: FlatLabel };

export type FlatResult = {
  nodes: FlatNode[];
  edges: FlatEdge[];
  ports: FlatPort[];
  labels: FlatLabel[];
  all: FlatElement[];
  ref: Map<string, FlatElementRef>;
};

export interface Middleware {
  run: (f: FlatResult) => void;
}
