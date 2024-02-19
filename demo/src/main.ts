import { ElkSvg } from "elk-svg";
import ElkConstructor, { ElkNode } from "elkjs";
import "./style.css";

let lastId = 0;

const graph: ElkNode = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered",
    "elk.direction": "DOWN",
    "elk.edgeRouting": "SPLINES",
    "elk.aspectRatio": "1",
    "elk.layered.considerModelOrder.strategy": "PREFER_NODES",
    "elk.layered.nodePlacement.favorStraightEdges": "false",
    "elk.layered.spacing.nodeNodeBetweenLayers": "50",
  },
  children: [],
  edges: [],
};

function create() {
  const id = lastId + 1;
  graph.children!.push({
    id: `n${id}`,
    width: rand(30, 200),
    height: rand(30, 60),
  });
  if (lastId > 0) {
    graph.edges!.push({
      id: `e${id}`,
      sources: [`n${lastId}`],
      targets: [`n${id}`],
    });
  }
  if (lastId > 1 && rand(0, 1) === 0) {
    graph.edges!.push({
      id: `e${id}-2`,
      sources: [`n${lastId - 1}`],
      targets: [`n${id}`],
    });
  }
  if (lastId > 0 && rand(0, 1) === 0) {
    graph.children!.push({
      id: `nn${id}`,
      width: rand(30, 200),
      height: rand(30, 60),
    });
    graph.edges!.push({
      id: `e${id}-2ff`,
      sources: [`n${lastId}`],
      targets: [`nn${id}`],
    });
  }
  if (rand(0, 4) === 0) {
    graph.edges!.push({
      id: `e${id}-self`,
      sources: [`n${id}`],
      targets: [`n${id}`],
    });
  }
  lastId = id;
  render();
}

create();

async function render() {
  const layouted = await new ElkConstructor().layout(graph);
  console.log(layouted);
  elkSvg.render(layouted, {
    root: { hidden: true },
    n1: { shape: "circle" },
    n2: { shape: "circle" },
    n3: { shape: "circle" },
    [`n${lastId}`]: { fill: "red" },
  });
}
render();

const container = document.getElementById("container")!;

const elkSvg = new ElkSvg(container);
elkSvg.setViewBox(0, 0, 800, 800);

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
  const v = elkSvg.getViewBox();
  elkSvg.setViewBox(v.x + dx, v.y + dy, v.w, v.h);
  render();
}

function rand(min: number, max: number) {
  return min + Math.round(Math.random() * max);
}
