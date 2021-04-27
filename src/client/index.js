import React from "react";
import ReactDOM from "react-dom";
import Home from "../common/pages/Home";

// render不再复用dom，直接更新
// 客户端二次“渲染” hydrate 会对比服务端渲染下发的数据和当前浏览器生成的数据的差异
// 使用 hydrate 方法对组件进行渲染，为组件元素附加事件
// hydrate 方法在实现渲染的时候，会复用原本已经存在的 DOM 节点，减少重新生成节点以及删除原本 DOM 节点的开销。
ReactDOM.hydrate(<Home />,document.getElementById('root'))
