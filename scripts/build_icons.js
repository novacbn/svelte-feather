const {writeFileSync} = require("fs");
const {join} = require("path");

const feather = require("feather-icons");

const {PATH_WORKSPACE} = require("./constants");
const {format_class_name, format_display_name} = require("./util");

const TEMPLATE_COMPONENT = require("./templates/component");
const TEMPLATE_MODULE = require("./templates/module");
const TEMPLATE_MANIFEST = require("./templates/manifest");

function make_components(path, icons) {
    icons.map(([name, icon]) => {
        let contents = icon.toString();
        contents = TEMPLATE_COMPONENT({name, contents});

        const component_path = join(path, "Icon" + format_class_name(name) + ".svelte");
        writeFileSync(component_path, contents);
    });
}

function make_module(path, icons) {
    icons = icons.map(([name, icon]) => "Icon" + format_class_name(name));

    writeFileSync(path, TEMPLATE_MODULE({class_names: icons}));
}

function make_manifest(path, icons) {
    icons = icons.map(([name, icon]) => {
        const {tags} = icon;

        return {
            name,
            tags,

            class_name: "Icon" + format_class_name(name),
            display_name: format_display_name(name)
        };
    });

    writeFileSync(path, TEMPLATE_MANIFEST({icons}));
}

function build_icons(icons, path_components, path_module, path_manifest) {
    const icon_entries = Object.entries(icons);

    make_components(path_components, icon_entries);
    make_module(path_module, icon_entries);
    make_manifest(path_manifest, icon_entries);
}

build_icons(
    feather.icons,
    PATH_WORKSPACE.components,
    PATH_WORKSPACE.module,
    PATH_WORKSPACE.manifest
);
