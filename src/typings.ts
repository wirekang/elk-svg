export type RenderPropsMap = Record<string, RenderProps>;
export type RenderProps = {
  fill?: string;
  hidden?: boolean;
  shape?: Shape;
};

export type Shape = "rectangle" | "circle";
