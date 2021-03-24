import {build} from "esbuild";
import sveltePlugin from "esbuild-svelte";

import {PATH_WORKSPACE} from "./constants.js";

const BUILD_OPTIONS = {
    entryPoints: [PATH_WORKSPACE.entry],
    bundle: true,
    format: "iife",
    sourcemap: true,
    plugins: [
        sveltePlugin({
            compileOptions: {
                customElement: true
            }
        })
    ]
};

await Promise.all([
    build({
        ...BUILD_OPTIONS,
        outfile: PATH_WORKSPACE.webcomponents
    }),

    build({
        ...BUILD_OPTIONS,
        outfile: PATH_WORKSPACE.webcomponents_min,
        minify: true
    })
]);
