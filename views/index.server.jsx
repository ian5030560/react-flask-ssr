import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import App from "./app";
import { stdout } from "process";

const value = process.argv[2];

if (value === "pipe") {
    const { pipe } = renderToPipeableStream(<App />, {
        bootstrapScripts: [],
        onShellReady() {
            pipe(stdout);
        }
    });
}
else {
    stdout.write(renderToString(<App />));
}