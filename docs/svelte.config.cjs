const PACKAGE = require("./package.json");

const {join} = require("path");
const {cwd} = require("process");

const PATH_CHOTA = join(cwd(), "node_modules/chota/dist/chota.min.css");

const PATH_PRISM = join(cwd(), "node_modules/prismjs/themes/prism-tomorrow.css");

const INCLUDE_CLIENT = ["prismjs"];

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: require("@sveltejs/adapter-static")(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "body",

        paths: {
            base: "/svelte-feather/"
        },

        // Consult https://vitejs.dev/config/ to learn about these options
        vite: {
            resolve: {
                alias: {
                    "extern/styles/chota.min.css": PATH_CHOTA,
                    "extern/styles/prism.min.css": PATH_PRISM
                }
            },

            optimizeDeps: {
                include: INCLUDE_CLIENT
            },

            ssr: {
                noExternal: Object.keys(PACKAGE.dependencies || {})
            }
        }
    }
};
