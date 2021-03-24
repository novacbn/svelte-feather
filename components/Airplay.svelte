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

<svelte:options tag="feather-airplay"/>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="feather feather-airplay feather-size-{size}
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
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>
</svg>