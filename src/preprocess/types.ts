import { FlatNode } from "../flat-types";
import { FlatElement } from "../flat-types";
import { FlatPort } from "../flat-types";
import { FlatLabel } from "../flat-types";
import { FlatEdge } from "../flat-types";

export type FlatElementRef =
  | { type: "node"; r: FlatNode }
  | { type: "edge"; r: FlatEdge }
  | { type: "port"; r: FlatPort }
  | { type: "label"; r: FlatLabel };

export interface Middleware {
  run: (f: FlatResult) => void;
}

export type FlatResult = {
  nodes: FlatNode[];
  edges: FlatEdge[];
  ports: FlatPort[];
  labels: FlatLabel[];
  all: FlatElement[];
  ref: Map<string, FlatElementRef>;
};
