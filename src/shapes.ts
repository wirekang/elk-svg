import type { Shape } from "./types";

const rectangle: Shape = {
  path: ({ w, h }, p) =>
    p
      .____________________________________________________________________________()
      .M(0, 0)
      .L(w, 0)
      .L(w, h)
      .L(0, h)
      .z(),
};

const ellipse: Shape = {
  path: ({ w, h }, p) =>
    p
      .____________________________________________________________________________()
      .M(w / 2, 0)
      .a(w / 2, h / 2, 0, 1, 0, 1, 0)
      .z(),
};

const diamond: Shape = {
  path: ({ w, h }, p) =>
    p
      .____________________________________________________________________________()
      .M(0, h / 2)
      .L(w / 2, 0)
      .L(w, h / 2)
      .L(w / 2, h)
      .z(),
};

const arrowNormal: Shape = {
  path: ({ w, h }, p) =>
    p
      .____________________________________________________________________________()
      .M(0, h)
      .L(w, h)
      .L(w / 2, 0)
      .z(),
};

const roundRectangle: Shape = {
  path: ({ w, h }, p) => {
    // todo: make customizable
    const r = Math.min(h / 3, w / 3, 20);
    return p
      .____________________________________________________________________________()
      .M(0, r)
      .A(r, r, 0, 0, 1, r, 0)
      .L(w - r, 0)
      .A(r, r, 0, 0, 1, w, r)
      .L(w, h - r)
      .A(r, r, 0, 0, 1, w - r, h)
      .L(r, h)
      .A(r, r, 0, 0, 1, 0, h - r)
      .Z();
  },
};

const capsule: Shape = {
  path: ({ w, h }, p) => {
    const r = Math.min(h / 2, w / 2);
    return p
      .____________________________________________________________________________()
      .M(0, r)
      .A(r, r, 0, 0, 1, r, 0)
      .L(w - r, 0)
      .A(r, r, 0, 0, 1, w, r)
      .L(w, h - r)
      .A(r, r, 0, 0, 1, w - r, h)
      .L(r, h)
      .A(r, r, 0, 0, 1, 0, h - r)
      .Z();
  },
};

export const defaultShapes: Record<string, Shape> = {
  rectangle,
  ellipse,
  diamond,
  "arrow-normal": arrowNormal,
  "round-rectangle": roundRectangle,
  capsule,
};
