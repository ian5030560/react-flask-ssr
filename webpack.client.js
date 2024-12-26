const path = require('path');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    entry: path.resolve(__dirname, "views", "index.client.jsx"),
    extends: path.resolve(__dirname, "webpack.common.js"),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'static', 'client'),
    },
}
