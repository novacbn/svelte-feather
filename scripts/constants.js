const {join} = require("path");

const PATH_WORKSPACE = {
    components: join(process.cwd(), "lib", "components"),
    manifest: join(process.cwd(), "docs", "src", "icons.js"),
    module: join(process.cwd(), "lib", "components", "index.js")
};

module.exports = {
    PATH_WORKSPACE
};
