import ELK, { type ElkNode } from "elkjs";
import "./style.css";
import { ElkSvg } from "elk-svg";
import { exampleNodes } from "./data";

async function go(node: ElkNode) {
  const container = document.getElementById("container")!;
  container.innerHTML = "";
  const elkSvg = new ElkSvg({
    container,
    defaultOptions: { node: { shape: "rect" }, edge: { arrow: "normal" } },
  });
  const elk = new ELK();
  (window as any).node = node;
  await elk.layout(node);
  console.log(node);
  elkSvg.render(node);
  elkSvg.render(node);
  setTimeout(() => {
    elkSvg.render(node);
  }, 1000);
}

let i = 1;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "Enter":
      console.log("example", i);
      go(exampleNodes[i]);
      i += 1;
      if (i === exampleNodes.length) {
        i = 0;
      }
      break;
  }
});

go(exampleNodes[0]);
