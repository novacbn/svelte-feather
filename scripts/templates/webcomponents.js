export default ({class_names}) =>
    class_names
        .map((class_name) => {
            return `import "./${class_name}.svelte";`;
        })
        .join("\n");
