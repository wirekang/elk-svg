import { ElkSvgNode, ElkSvg, ElkSvgLabel } from "elk-svg";
import ElkConstructor, { ElkLabel } from "elkjs";
import "./style.css";

const elk = new ElkConstructor({
  defaultLayoutOptions: {
    "elk.alignment": "CENTER",
    "elk.algorithm": "layered",
    "elk.direction": "DOWN",
    "elk.edgeRouting": "POLYLINE",
    "elk.aspectRatio": "1",
    "elk.edgeLabels.inline": "true",
    "elk.layered.nodePlacement.favorStraightEdges": "false",
    // "elk.layered.spacing.nodeNodeBetweenLayers": "50",
    // "elk.layered.edgeRouting.splines.mode": "CONSERVATIVE",
    "elk.nodeLabels.placement": "[V_CENTER H_CENTER INSIDE]",
    // "elk.nodeSize.constraints": "NODE_LABELS",
  },
});
let lastId = 0;

const graph: ElkSvgNode = {
  id: "root",

  children: [],
  edges: [],
  renderProps: {
    hidden: true,
  },
};

function create() {
  const id = lastId + 1;
  graph.children!.push({
    id: `n${id}`,
    width: rand(30, 200),
    height: rand(30, 60),
    labels: labels(`n${id}`),
    renderProps: { shape: "rectangle", className: "node" },
  });
  if (lastId > 0) {
    graph.edges!.push({
      id: `e${id}`,
      sources: [`n${lastId}`],
      targets: [`n${id}`],
      labels: labels(`e${id}`),
      renderProps: { className: "edge" },
    });
  }
  if (lastId > 1 && rand(0, 1) === 0) {
    graph.edges!.push({
      id: `e${id}-2`,
      sources: [`n${lastId - 1}`],
      targets: [`n${id}`],
      labels: labels(`e${id}-2`),
      renderProps: { className: "edge" },
    });
  }
  if (lastId > 0 && rand(0, 1) === 0) {
    graph.children!.push({
      id: `nn${id}`,
      width: rand(30, 200),
      height: rand(30, 60),
      labels: labels(`nn${id}`),
      renderProps: { className: "node" },
    });
    graph.edges!.push({
      id: `e${id}-2ff`,
      sources: [`n${lastId}`],
      targets: [`nn${id}`],
      labels: labels(`e${id}-2ff`),
      renderProps: { className: "edge" },
    });
  }
  if (rand(0, 4) === 0) {
    graph.edges!.push({
      id: `e${id}-self`,
      sources: [`n${id}`],
      targets: [`n${id}`],
      labels: labels(`e${id}-self`),
      renderProps: { className: "edge" },
    });
  }
  lastId = id;
  render();
}

create();

async function render() {
  const layouted = await elk.layout(graph);
  console.log(layouted);
  elkSvg.render(layouted);
}
render();

const container = document.getElementById("container")!;

const elkSvg = new ElkSvg(container);
elkSvg.getSvgContainer().setViewBox({ x: 0, y: 0, w: 800, h: 800 });

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      viewbox(-30, 0);
      break;
    case "d":
      viewbox(30, 0);
      break;

    case "w":
      viewbox(0, -30);
      break;
    case "s":
      viewbox(0, 30);
      break;
    case "q":
      create();
      break;
  }
});

function viewbox(dx: number, dy: number) {
  const v = elkSvg.getSvgContainer().getViewBox();
  elkSvg
    .getSvgContainer()
    .setViewBox({ x: v.x + dx, y: v.y + dy, w: v.w, h: v.h });
  render();
}

function rand(min: number, max: number) {
  return min + Math.round(Math.random() * max);
}

function labels(id: any): ElkSvgLabel[] {
  const texts = [] as string[];

  if (rand(0, 6) === 0) {
    texts.push(`This is label of ${id}`);
  } else {
    texts.push(`${id}`);
  }
  return texts.map((text) => ({
    text,
    width: text.length * 9,
    height: 20,
    renderProps: { className: "label" },
  }));
}
