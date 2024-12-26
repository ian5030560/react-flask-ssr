import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import App from "./app";
import { stderr, stdout } from "process";

function serverRender() {
    const { pipe } = renderToPipeableStream(<App />, {
        onShellReady() {
            pipe(stdout);
        }
    });
    // return renderToString(<App/>);
}

// console.log(serverRender());
serverRender();