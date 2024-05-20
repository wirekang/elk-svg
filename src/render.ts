import { DEFAULT_CLASSNAMES, type Classnames } from "./classname";
import type { ElkNode } from "./elk-types";
import { BUILT_IN_SHAPES, type Shapes } from "./shape";
import { arr, setAll, str, svg, transform } from "./utils";

export type RenderProps = {
  container: Element;
  document?: Document;
  shapes?: Shapes;
  classnames?: Partial<Classnames>;
  dataIdAttr?: string;
};

export type Render = (
  rootNode: ElkNode,
  options: Record<string, ElementOptions>,
) => void;

export type ElementOptions = {
  shape?: string;
  classes?: string[];
};

export type Renderer = {
  /**
   * Create, delete or update svg elements.
   */
  render: Render;

  /**
   * Get a rendered 'g' element by id.
   */
  groupRef: ReadonlyMap<string, SVGGElement>;
};

export function initRenderer(props: RenderProps): Renderer {
  validateProps(props);
  const document = props.document ?? window.document;
  const shapes = { ...BUILT_IN_SHAPES, ...props.shapes };
  const classnames = { ...DEFAULT_CLASSNAMES, ...props.classnames };

  const topLevelGroup = svg(document, "g") as SVGGElement;
  topLevelGroup.classList.add(classnames.topLevelGroup);
  props.container.appendChild(topLevelGroup);

  const groupRef = new Map<string, SVGGElement>();
  const groupRefForDeletion = new Map(groupRef);
  const renderKeys = new Map<string, string>();
  const parentIds = new Map<string, string>();
  const parentContext: ParentContext = { element: "unreachable" as any };
  const getGroup = makeGetGroup(
    parentContext,
    groupRef,
    groupRefForDeletion,
    classnames,
    document,
    props.dataIdAttr ?? "data-elk-svg-id",
  );
  const checkRenderKey = makeCheckMap(renderKeys);
  const checkParentId = makeCheckMap(parentIds);

  const render: Render = (rootNode, options) => {
    groupRefForDeletion.clear();
    setAll(groupRefForDeletion, groupRef);
    const node = (v: ElkNode) => {
      const o = options[v.id] ?? {};
      const g = getGroup(v.id, [classnames.nodeGroup, ...arr(o.classes)]);

      // renderKey has changed(true) or new node(null).
      if (checkRenderKey(v.id, nodeRenderKey(v, o)) !== false) {
        g.replaceChildren();
        if (o.shape) {
          const shape = shapes[o.shape];
          if (shape === undefined) {
            console.error(`unknown shape: ${o.shape}`);
          } else {
            if (v.width === undefined || v.height === undefined) {
              console.error(
                `ElementOptions[${v.id}].shape is defined but width/height are undefined in Node`,
              );
            } else {
              const shapeElement = shape(
                { width: v.width, height: v.height },
                document,
              );
              shapeElement.classList.add(classnames.nodeShape);
              g.appendChild(shapeElement);
            }
          }
        }
      }
      if (v.id === parentContext.id) {
        throw new Error(`${v.id}`);
      }

      switch (checkParentId(v.id, parentContext.id)) {
        // new element.
        case null:
        // parentId is changed.
        case true:
          parentContext.element.appendChild(g);
          break;

        // same parent.
        case false:
          break;
      }

      transform(g, v);

      v.children?.forEach((child) => {
        parentContext.element = g;
        parentContext.id = v.id;
        node(child);
      });
    };

    parentContext.id = undefined;
    parentContext.element = topLevelGroup;
    node(rootNode);
    groupRefForDeletion.forEach((element, id) => {
      element.remove();
      groupRef.delete(id);
    });
  };

  return { render, groupRef };
}

function validateProps(props: RenderProps) {
  if (!props.container) {
    throw new Error("no container");
  }
  if (typeof window === "undefined" && !props.document) {
    throw new Error("no document");
  }
}

type ParentContext = {
  /**
   * undefined if parent is rootGroup. = You are a rootNode.
   */
  id?: string;
  element: SVGGElement;
};

function makeGetGroup(
  ctx: ParentContext,
  groupRef: Map<string, SVGGElement>,
  groupRefForDeletion: Map<string, SVGGElement>,
  classnames: Classnames,
  document: Document,
  dataIdAttr: string,
) {
  return (id: string, classes: string[]) => {
    const group = groupRef.get(id);
    const className = classnames.group + " " + classes.join(" ");
    if (group) {
      group.setAttribute("class", className);
      groupRefForDeletion.delete(id);
      return group;
    }
    const newGroup = svg(document, "g") as SVGGElement;
    newGroup.setAttribute("class", className);
    newGroup.setAttribute(dataIdAttr, id);
    ctx.element.appendChild(newGroup);
    groupRef.set(id, newGroup);
    return newGroup;
  };
}

/**
 * @returns null: new or no value, boolean: changed
 */
function makeCheckMap(m: Map<string, string>) {
  return (id: string, value: string | null | undefined) => {
    if (typeof value !== "string") {
      return null;
    }
    const previousValue = m.get(id);
    m.set(id, value);
    if (!previousValue) {
      return null;
    }
    return previousValue !== value;
  };
}

function nodeRenderKey(v: ElkNode, o?: ElementOptions) {
  return str(o?.shape);
}
