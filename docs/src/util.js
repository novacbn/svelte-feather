export const TEMPLATE_CODE = ({class_name}) => `<script>
    import {${class_name}} from "svelte-feather";
</script>

<${class_name} />`;

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
