export type Classnames = {
  topLevelGroup: string;

  group: string;

  nodeGroup: string;
  nodeComponent: string;

  edgeGroup: string;
  edgeComponent: string;

  portGroup: string;
  portComponent: string;

  labelGroup: string;
  labelComponent: string;
};

export const CLASSNAMES: Classnames = {
  topLevelGroup: "elk-svg-top-level-group",
  group: "elk-svg-group",
  nodeGroup: "elk-svg-node-group",
  nodeComponent: "elk-svg-node-shape",
  edgeGroup: "elk-svg-edge-group",
  edgeComponent: "elk-svg-edge-component",
  portGroup: "elk-svg-port-group",
  portComponent: "elk-svg-port-component",
  labelGroup: "elk-svg-label-group",
  labelComponent: "elk-svg-label-component",
};

export type Attrnames = {
  id: string;
};

export const ATTRNAMES: Attrnames = {
  id: "data-elk-svg-id",
};
