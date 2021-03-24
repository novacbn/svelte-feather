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

<svelte:options tag="feather-thumbs-up"/>

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="feather feather-thumbs-up feather-size-{size}
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
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
</svg>