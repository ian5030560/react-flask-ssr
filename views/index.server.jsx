import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import App from "./app";
import { stdout } from "process";
import { SSRProvider } from "./ssr";

const value = process.argv[2];

if (value === "pipe") {
    const { pipe } = renderToPipeableStream(<SSRProvider value={true}><App /></SSRProvider>, {
        bootstrapScripts: [],
        onShellReady() {
            pipe(stdout);
        }
    });
}
else {
    stdout.write(renderToString(<SSRProvider value={true}><App /></SSRProvider>));
}