module.exports = ({icons}) => {
    contents = [`import * as feather from "svelte-feather";`, "", "export default ["];

    icons = icons.map(
        ({class_name, display_name, name, tags}) => `    {
        component: feather.${class_name},
        class_name: "${class_name}",
        display_name: "${display_name}",
        name: "${name}",
        tags: ${JSON.stringify(tags)}
    }`
    );

    icons = icons.join(",\n");

    contents = contents.concat(icons);
    contents.push("];");

    return contents.join("\n");
};
