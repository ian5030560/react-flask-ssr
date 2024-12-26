const path = require('path');

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /.jsx|js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel-loader"
            }
        ]
    },
};