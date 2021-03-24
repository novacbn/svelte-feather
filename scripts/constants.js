import {join} from "path";
import {cwd} from "process";

const PATH_CWD = cwd();

export const PATH_WORKSPACE = {
    components: join(PATH_CWD, "components"),

    entry: join(PATH_CWD, "components", "webcomponents.js"),
    module: join(PATH_CWD, "components", "index.js"),

    manifest: join(PATH_CWD, "docs", "src", "icons.js"),

    webcomponents: join(PATH_CWD, "dist", "svelte-feather.webcomponents.js"),
    webcomponents_min: join(PATH_CWD, "dist", "svelte-feather.webcomponents.min.js")
};
