type RenderingOptions = {
  classes?: string[];
};

export type NodeRenderingOptions = RenderingOptions & {
  shape?: string | null;
  radius?: number;
};

export type EdgeRenderingOptions = RenderingOptions & {
  arrow?: {
    shape: string;
    size: number;
    thickness: number;
  };
};

export type PortRenderingOptions = RenderingOptions & {
  shape?: string | null;
};

export type LabelRenderingOptions = RenderingOptions;

export type DefaultRenderingOptions = {
  node?: NodeRenderingOptions;
  edge?: EdgeRenderingOptions;
  port?: PortRenderingOptions;
  label?: LabelRenderingOptions;
};
