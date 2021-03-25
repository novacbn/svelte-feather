import {ICON_SIZES} from "svelte-feather";

import {ICON_DEFAULTS} from "./icons";

export const TEMPLATE_CODE = ({class_name, color, fill, linecap, linejoin, size, width}) => {
    let properties = Object.entries({color, fill, linecap, linejoin, size, width});

    properties = properties.filter(([key, value]) => {
        // NOTE: Need to have special handling for sizes, since
        // our default is `large`

        if (key === "size") return value !== ICON_SIZES.default;
        return value !== ICON_DEFAULTS[key];
    });

    properties = properties.map(([key, value]) => `\n    ${key}="${value}"`);
    properties = properties.join("");

    return `<script>
    // NOT RECOMMENDED: Import all Components
    import {Icons} from "svelte-feather/components";
</script>

<Icons.${class_name}${properties} />

<script>
    // RECOMMENDED: Fine-grained Component Import
    import {${class_name}} from "svelte-feather/components/${class_name}";
</script>

<${class_name}${properties} />`;
};

export function debounce(callback, duration) {
    let identifier;

    return (...args) => {
        if (identifier) {
            clearTimeout(identifier);
            identifier = null;
        }

        identifier = setTimeout(() => {
            callback(...args);
        }, duration);
    };
}
