export default ({icons}) => {
    let all_tags = new Set();
    let icon_manifest = [];

    icons.map(({class_name, display_name, icon}) => {
        for (const tag of icon.tags) all_tags.add(tag);

        icon_manifest.push(`    {
        component: Icons.${class_name},
        class_name: "${class_name}",
        display_name: "${display_name}",
        name: "${icon.name}",
        tags: ${JSON.stringify(icon.tags)}
    }`);
    });

    icon_manifest = icon_manifest.join(",\n\n");

    all_tags = Array.from(all_tags);
    all_tags.sort();

    all_tags = JSON.stringify(all_tags, null, 4);

    return `import {ICON_SIZES} from "svelte-feather";
import {Icons} from "svelte-feather/components";

export const ICON_DEFAULTS = {
    color: "currentColor",
    fill: "none",
    linecap: "round",
    linejoin: "round",
    size: ICON_SIZES.large,
    width: "2px"
};

export const ICON_MAP = Icons;

export const ICON_MANIFEST = [
${icon_manifest}
];

export const ICON_TAGS = ${all_tags};`;
};
