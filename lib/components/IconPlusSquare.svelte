<script>
    import {ICON_SIZES, ICON_SIZE_UNITS, is_size_primitive} from "../util.js";

    let _class = "";
    export let style = "";

    export let color = "currentColor";
    export let size = ICON_SIZES.default;

    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let width = "2";

    export {_class as class};

    let font_size;
    $: {
        if (is_size_primitive(size)) {
            font_size = size;
        } else {
            font_size = ICON_SIZE_UNITS[size] || ICON_SIZE_UNITS[ICON_SIZES.default];
        }
    }
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="feather feather-plus-square feather-size-{size}
    {_class}"
    width={font_size}
    height={font_size}
    viewBox="0 0 24 24"
    {fill}
    stroke={color}
    stroke-width={width}
    stroke-linecap={linecap}
    stroke-linejoin={linejoin}
    {style}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
</svg>
