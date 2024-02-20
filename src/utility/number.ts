export function n(v: any) {
  if (v === null || v === undefined) {
    return 0;
  }
  if (typeof v === "string") {
    return Number.parseFloat(v);
  }
  return v;
}
