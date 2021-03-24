import {accessSync, mkdirSync, writeFileSync} from "fs";
import {join} from "path";

import feather from "feather-icons";

import {PATH_WORKSPACE} from "./constants.js";
import {format_class_name, format_display_name} from "./util.js";

import TEMPLATE_COMPONENT from "./templates/component.js";
import TEMPLATE_MODULE from "./templates/module.js";
import TEMPLATE_MANIFEST from "./templates/manifest.js";
import TEMPLATE_STUB from "./templates/stub.js";
import TEMPLATE_WEBCOMPONENTS from "./templates/webcomponents.js";

function can_access(path) {
    try {
        accessSync(path);
        return true;
    } catch (err) {
        return false;
    }
}

function make_components(path, icons) {
    icons.map(([name, icon]) => {
        const class_name = format_class_name(name);

        const component_contents = TEMPLATE_COMPONENT({icon});
        const component_path = join(path, `${class_name}.svelte`);

        writeFileSync(component_path, component_contents);

        const stub_contents = TEMPLATE_STUB({class_name});
        const stub_path = join(path, `${class_name}.js`);

        writeFileSync(stub_path, stub_contents);
    });
}

function make_module(path, icons) {
    icons = icons.map(([name, icon]) => format_class_name(name));

    writeFileSync(path, TEMPLATE_MODULE({class_names: icons}));
}

function make_manifest(path, icons) {
    icons = icons.map(([name, icon]) => {
        return {
            icon,

            class_name: format_class_name(name),
            display_name: format_display_name(name)
        };
    });

    writeFileSync(path, TEMPLATE_MANIFEST({icons}));
}

function make_webcomponents(path, icons) {
    icons = icons.map(([name, icon]) => format_class_name(name));

    writeFileSync(path, TEMPLATE_WEBCOMPONENTS({class_names: icons}));
}

function build_icons(icons, path_components, path_module, path_webcomponents, path_manifest) {
    if (!can_access(path_components)) mkdirSync(path_components);

    const icon_entries = Object.entries(icons);

    make_components(path_components, icon_entries);
    make_module(path_module, icon_entries);
    make_webcomponents(path_webcomponents, icon_entries);
    make_manifest(path_manifest, icon_entries);
}

build_icons(
    feather.icons,
    PATH_WORKSPACE.components,
    PATH_WORKSPACE.module,
    PATH_WORKSPACE.entry,
    PATH_WORKSPACE.manifest
);
