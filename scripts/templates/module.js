module.exports = ({class_names}) => {
    class_names = class_names.map((class_name) => {
        return `export {default as ${class_name}} from "./${class_name}.svelte";`;
    });

    return class_names.join("\n");
};
