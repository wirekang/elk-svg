import type {
  LayoutedEdge,
  LayoutedLabel,
  LayoutedNode,
  LayoutedPort,
} from "./layouted-types";
import type {
  EdgeRenderingOptions,
  LabelRenderingOptions,
  NodeRenderingOptions,
  PortRenderingOptions,
} from "./rendering-types";

export type ElkSvgStrictNode = Omit<
  LayoutedNode,
  "children" | "edges" | "ports" | "labels"
> & {
  children?: ElkSvgStrictNode[];
  edges?: ElkSvgStrictEdge[];
  ports?: ElkSvgStrictPort[];
  labels?: ElkSvgStrictLabel[];
  svg?: NodeRenderingOptions;
};

export type ElkSvgStrictEdge = Omit<LayoutedEdge, "labels"> & {
  labels?: ElkSvgStrictLabel[];
  svg?: EdgeRenderingOptions;
};
export type ElkSvgStrictPort = LayoutedPort & { svg?: PortRenderingOptions };

export type ElkSvgStrictLabel = LayoutedLabel & { svg?: LabelRenderingOptions };
