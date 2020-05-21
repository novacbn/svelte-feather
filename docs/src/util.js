import {ICON_DEFAULTS} from "./icons";

export const TEMPLATE_CODE = ({class_name, color, fill, linecap, linejoin, size, width}) => {
    let properties = Object.entries({color, fill, linecap, linejoin, size, width});

    properties = properties.filter(([key, value]) => value !== ICON_DEFAULTS[key]);
    properties = properties.map(([key, value]) => ` ${key}="${value}"`);

    properties = properties.join("");

    return `<script>
    import {${class_name}} from "svelte-feather";
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
