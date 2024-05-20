import { DEFAULT_CLASSNAMES, type Classnames } from "./classname";
import { svg } from "./dom";
import type { ElkEdge, ElkLabel, ElkNode, ElkPort } from "./elk-types";
import { BUILT_IN_SHAPES, type Shapes } from "./shape";

export type RenderProps = {
  container: Element;
  document?: Document;
  shapes?: Shapes;
  classnames?: Partial<Classnames>;
};

export type DataMap = Record<string, Data>;
export type Data = {
  shape?: string;
  classes?: string[];
};

export type Render = (node: ElkNode, data: DataMap) => void;

export function initRender(props: RenderProps): Render {
  validateProps(props);
  const document = props.document ?? window.document;
  const shapes = { ...BUILT_IN_SHAPES, ...props.shapes };
  const classnames = { ...DEFAULT_CLASSNAMES, ...props.classnames };

  const refs = new Map<string, SVGGElement>();

  return (node, data) => {
    const refsCopyForDeletedElements = new Map(refs);
    const initG = (id: string, classes: string[]) => {
      let element = refsCopyForDeletedElements.get(id);
      if (element === undefined) {
        const newElement = svg(document, "g") as SVGGElement;
        newElement.setAttribute("data-elk-id", id);
        newElement.classList.add(classnames.group, ...classes);
        refs.set(id, newElement);
        props.container.append(newElement);
        return newElement;
      }
      refsCopyForDeletedElements.delete(id);
      return element;
    };

    const handleLabel = (v: ElkLabel) => {};

    const handlePort = (v: ElkPort) => {
      const g = initG(v.id, [classnames.portGroup]);
      v.labels?.forEach(handleLabel);
    };

    const handleEdge = (v: ElkEdge) => {
      const g = initG(v.id, [classnames.edgeGroup]);
      v.labels?.forEach(handleLabel);
    };

    const handleNode = (v: ElkNode) => {
      const g = initG(v.id, [classnames.nodeGroup]);
      v.edges?.forEach(handleEdge);
      v.ports?.forEach(handlePort);
      v.labels?.forEach(handleLabel);
      v.children?.forEach(handleNode);
    };

    handleNode(node);
    refs.get(node.id)!.classList.add(classnames.rootNodeGroup);
    refsCopyForDeletedElements.forEach((g, id) => {
      g.remove();
    });
  };
}

function validateProps(props: RenderProps) {
  if (!props.container) {
    throw new Error("no container");
  }
  if (typeof window === "undefined" && !props.document) {
    throw new Error("no document");
  }
}
