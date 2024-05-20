export type Classnames = {
  topLevelGroup: string;
  group: string;
  nodeGroup: string;
  nodeShape: string;
  edgeGroup: string;
  portGroup: string;
};

export const DEFAULT_CLASSNAMES: Classnames = {
  topLevelGroup: "elk-svg-top-level-group",
  group: "elk-svg-group",
  nodeGroup: "elk-svg-node-group",
  nodeShape: "elk-svg-node-shape",
  edgeGroup: "elk-svg-edge-group",
  portGroup: "elk-svg-port-group",
};
