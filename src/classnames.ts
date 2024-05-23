const CLASSNAMES = [
  "top-level-group",
  "node-group",
  "port-group",
  "edge-group",
  "label-group",
  "node",
  "port",
  "edge",
  "label",
  "edge-line",
  "edge-arrow",
] as const;

export type Classnamer = (name: (typeof CLASSNAMES)[number]) => string;
