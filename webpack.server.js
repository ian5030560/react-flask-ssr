const path = require('path');
const nodeExternal = require("webpack-node-externals");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    entry: path.resolve(__dirname, "views", "index.server.jsx"),
    extends: path.resolve(__dirname, "webpack.common.js"),
    target: "node",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static', 'server')
    },
    externals: [nodeExternal()],
}
