export default ({class_names}) => {
    return `console.warn("\\n\\n[svelte-feather :: Warning] Importing 'svelte-feather/components' can slow down your Build Tools / IDE Experience, consider importing 'svelte-feather/components/\${COMPONENT NAME}' instead!\\n\\n");

${class_names
    .map((class_name) => {
        return `import {${class_name}} from "./${class_name}";`;
    })
    .join("\n")}

export const Icons = {
${class_names.map((class_name) => `    ${class_name}`).join(",\n")}
};`;
};
