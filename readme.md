![NPM Version](https://img.shields.io/npm/v/elk-svg)
![NPM Version (with dist tag)](https://img.shields.io/npm/v/elk-svg/alpha)

# [elk-svg](https://github.com/wirekang/elk-svg)


**Lightweight**: elk-svg is a zero-dependency library renders [ELK json format](https://eclipse.dev/elk/documentation/tooldevelopers/graphdatastructure/jsonformat.html) into SVG.

**Customizable**: There is no additional abstraction layer. You can do whatever if SVG supports it.
`elk-svg` manages internal state and modifies DOM only if necessary: it means CSS animation will works well.


Check out [wiki](https://github.com/wirekang/elk-svg/wiki) for more information.

## Usage
```
npm i elk-svg
```

```typescript
import "./style.css" // See 'Styling' page in wiki.
import { ElkSvg } from "elk-svg";

const elk = new ELK();
const elkSvg = new ElkSvg({ container:document.querySelector("svg") });

async function renderElkNode(node:ElkNode) {
    await elk.layout(node);
    elkSvg.render(node);
}
```

## [Wiki](https://github.com/wirekang/elk-svg/wiki)
