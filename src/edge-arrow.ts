import type { EdgeArrowFunction } from "./types";
import { svg } from "./utils";

export const normal: EdgeArrowFunction = (ctx, ee) => {
  // set from edgeComponent
  const s = ee.svg!.arrowSize!;

  const r = svg("polygon");
  r.setAttribute("points", `${-s} 0,0 ${s},0 ${-s}`);
  return r;
};
