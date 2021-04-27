import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../common/pages/Home";
import app from "./http";

// '/':服务器端应用程序的入口文件
const content = renderToString(<Home />);
app.get('/',(req,res)=>{
    res.send(`
    <html>
            <head>
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `)
})