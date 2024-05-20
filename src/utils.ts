export function n(v: number | undefined | null, suffix = "") {
  if (v === undefined || v === null) {
    return "0" + suffix;
  }
  return `${v}${suffix}`;
}

export function arr<T>(v: T[] | undefined | null | T) {
  if (v === undefined || v === null) {
    return [];
  }
  if (Array.isArray(v)) {
    return [...v];
  }
  return [v];
}

export function svg(document: Document, name: string) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

export function str(v: any) {
  if (v === undefined || v === null) {
    return "";
  }
  return v.toString();
}

export function setAll<K, V>(target: Map<K, V>, source: Map<K, V>) {
  for (const [k, v] of source) {
    target.set(k, v);
  }
}

export function transform(e: Element, ee: { x?: number; y?: number }) {
  const r = [] as string[];
  if (ee.x !== undefined && ee.y !== undefined) {
    r.push(`translate(${ee.x} ${ee.y})`);
  }
  if (r.length === 0) {
    e.removeAttribute("transform");
    return;
  }
  e.setAttribute("transform", r.join(" "));
}
