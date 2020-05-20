const svelte = require("rollup-plugin-svelte");

module.exports = {
    rollup: {
        plugins: [
            svelte({
                dev: process.env.NODE_ENV !== "production"
            })
        ]
    }
};
