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
    class="feather feather-align-center feather-size-{size}
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
    <line x1="18" y1="10" x2="6" y2="10" />
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="14" x2="3" y2="14" />
    <line x1="18" y1="18" x2="6" y2="18" />
</svg>
