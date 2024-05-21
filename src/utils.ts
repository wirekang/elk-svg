export function ntos(v: number | undefined | null, suffix = "") {
  if (v === undefined || v === null) {
    return "0" + suffix;
  }
  return `${v}${suffix}`;
}

export function svg<K extends keyof SVGElementTagNameMap>(name: K) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

export function transform(e: Element, t: { translate?: { x?: number; y?: number } }) {
  const r = [] as string[];

  const x = t.translate?.x;
  const y = t.translate?.y;
  if (x !== undefined || y !== undefined) {
    r.push(`translate(${ntos(x)} ${ntos(y)})`);
  }

  if (r.length === 0) {
    e.removeAttribute("transform");
    return;
  }
  e.setAttribute("transform", r.join(" "));
}

export function freezeMerge(...args: (object | null | undefined)[]) {
  const r = {};
  args.forEach((a) => {
    Object.assign(r, a);
  });
  return Object.freeze(r) as any;
}
