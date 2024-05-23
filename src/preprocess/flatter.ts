import type { LayoutedEdgeSection } from "../layouted-types";
import type { DefaultRenderingOptions } from "../rendering-types";
import type {
  ElkSvgStrictEdge,
  ElkSvgStrictLabel,
  ElkSvgStrictNode,
  ElkSvgStrictPort,
} from "../strict-types";
import type { FlatElementRef, FlatResult } from "./types";
import type { FlatElement } from "../flat-types";
import type { FlatLabel } from "../flat-types";
import type { FlatPort } from "../flat-types";
import type { FlatEdge } from "../flat-types";
import type { FlatNode } from "../flat-types";

export class Flatter {
  private readonly ref: Map<string, FlatElementRef> = new Map();
  private readonly all: FlatElement[] = [];
  private readonly nodes: FlatNode[] = [];
  private readonly edges: FlatEdge[] = [];
  private readonly ports: FlatPort[] = [];
  private readonly labels: FlatLabel[] = [];

  constructor(private readonly dro: DefaultRenderingOptions) {}

  public flat(node: ElkSvgStrictNode): FlatResult {
    this.doNode(0, null, node);
    return {
      all: this.all,
      nodes: this.nodes,
      edges: this.edges,
      ports: this.ports,
      labels: this.labels,
      ref: this.ref,
    };
  }

  private doNode(depth: number, parentId: string | null, node: ElkSvgStrictNode) {
    const flatNode = {
      svg: { ...this.dro.node, ...node.svg },
      x: node.x,
      y: node.y,
      width: node.width,
      height: node.height,
      id: node.id,
      depth,
      parentId,
      _shapePath: null,
    };
    this.all.push(flatNode);
    this.nodes.push(flatNode);
    this.ref.set(node.id, { type: "node", r: flatNode });
    node.children?.forEach(this.doNode.bind(this, depth + 1, node.id));
    node.edges?.forEach(this.doEdge.bind(this, depth + 1, node.id));
    node.ports?.forEach(this.doPort.bind(this, depth + 1, node.id));
    node.labels?.forEach(this.doLabel.bind(this, depth + 1, node.id));
  }

  private doEdge(depth: number, parentId: string, edge: ElkSvgStrictEdge) {
    const flatEdge: FlatEdge = {
      svg: { ...this.dro.edge, ...edge.svg },
      id: edge.id,
      container: edge.container,
      sections: copySection(edge.sections),
      sources: [...edge.sources],
      targets: [...edge.targets],
      depth,
      parentId,
      x: 0,
      y: 0,
    };
    this.all.push(flatEdge);
    this.edges.push(flatEdge);
    this.ref.set(edge.id, { type: "edge", r: flatEdge });
    edge.labels?.forEach(this.doLabel.bind(this, depth + 1, edge.id));
  }

  private doPort(depth: number, parentId: string, port: ElkSvgStrictPort) {
    const flatPort: FlatPort = {
      id: port.id,
      width: port.width,
      height: port.height,
      svg: { ...this.dro.port, ...port.svg },
      x: port.x,
      y: port.y,
      depth,
      parentId,
    };
    this.ports.push(flatPort);
    this.all.push(flatPort);
    this.ref.set(port.id, { type: "port", r: flatPort });
    port.labels?.forEach(this.doLabel.bind(this, depth + 1, port.id));
  }

  private doLabel(
    depth: number,
    parentId: string,
    label: ElkSvgStrictLabel,
    index: number,
  ) {
    const flatLabel: FlatLabel = {
      id: label.id ?? `__label__${parentId}_${index}`,
      svg: { ...this.dro.label, ...label.svg },
      depth,
      parentId,
      text: label.text,
      x: label.x,
      y: label.y,
      width: label.width,
      height: label.height,
    };
    this.labels.push(flatLabel);
    this.all.push(flatLabel);
    if (label.id) {
      this.ref.set(label.id, { type: "label", r: flatLabel });
    }
  }
}

function copySection(v: LayoutedEdgeSection[]): LayoutedEdgeSection[] {
  return v.map((v) => ({
    id: v.id,
    startPoint: structuredClone(v.startPoint),
    endPoint: structuredClone(v.endPoint),
    bendPoints: v.bendPoints?.map((v) => structuredClone(v)),
    incomingShape: v.incomingShape,
    outgoingShape: v.outgoingShape,
    incomingSections: structuredClone(v.incomingSections),
    outgoingSections: structuredClone(v.outgoingSections),
  }));
}
