export default ({icons}) => {
    let all_tags = new Set();
    let icon_map = [];
    let icon_manifest = [];

    icons.map(({class_name, display_name, icon}) => {
        for (const tag of icon.tags) all_tags.add(tag);

        icon_map.push(`    ${class_name}: feather.${class_name}`);

        icon_manifest.push(`    {
        component: feather.${class_name},
        class_name: "${class_name}",
        display_name: "${display_name}",
        name: "${icon.name}",
        tags: ${JSON.stringify(icon.tags)}
    }`);
    });

    icon_map = icon_map.join(",\n");
    icon_manifest = icon_manifest.join(",\n\n");

    all_tags = Array.from(all_tags);
    all_tags.sort();

    all_tags = JSON.stringify(all_tags, null, 4);

    return `import {Icons} from "svelte-feather/components";

export const ICON_DEFAULTS = {
    color: "currentColor",
    fill: "none",
    linecap: "round",
    linejoin: "round",
    size: feather.ICON_SIZES.default,
    width: "2px"
};

export const ICON_MAP = Icons;

export const ICON_MANIFEST = [
${icon_manifest}
];

export const ICON_TAGS = ${all_tags};`;
};
