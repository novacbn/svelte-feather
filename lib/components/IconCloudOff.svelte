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
    class="feather feather-cloud-off feather-size-{size}
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
    <path
        d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
    <line x1="1" y1="1" x2="23" y2="23" />
</svg>
