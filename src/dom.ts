export function n(v: number | undefined | null, suffix = "") {
  if (v === undefined || v === null) {
    return "0" + suffix;
  }
  return `${v}${suffix}`;
}

export function svg(document: Document, name: string) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}
