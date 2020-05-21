<script context="module">
    import {ICON_SIZES} from "svelte-feather";

    const RANGE_ICON_SIZES = [
        ICON_SIZES.tiny,
        ICON_SIZES.small,
        ICON_SIZES.default,
        ICON_SIZES.large,
        ICON_SIZES.huge
    ];

    const RANGE_STROKE_LINECAP = ["round", "square", "butt"];

    const RANGE_STROKE_LINEJOIN = ["round", "arcs", "bevel", "miter", "miter-clip"];

    const RANGE_STROKE_WIDTH = ["0.5px", "1px", "1.5px", "2px", "2.5px", "3px"];
</script>

<script>
    import {ICON_DEFAULTS} from "../icons";

    import InputColor from "./InputColor";
    import InputRange from "./InputRange";

    export let color = ICON_DEFAULTS.color;
    export let fill = ICON_DEFAULTS.fill;
    export let linecap = ICON_DEFAULTS.linecap;
    export let linejoin = ICON_DEFAULTS.linejoin;
    export let size = ICON_DEFAULTS.size;
    export let width = ICON_DEFAULTS.size;

    let linecap_index = "0";
    let linejoin_index = "0";

    let size_index = "2";
    let width_index = "3";

    export function reset() {
        color = ICON_DEFAULTS.color;
        fill = ICON_DEFAULTS.fill;

        linecap = ICON_DEFAULTS.linecap;
        linecap_index = "0";

        linejoin = ICON_DEFAULTS.linejoin;
        linejoin_index = "0";

        size = ICON_DEFAULTS.size;
        size_index = "2";

        width = ICON_DEFAULTS.width;
        width_index = "3";
    }
</script>

<style>
    h4 {
        margin-top: 0;
    }
</style>

<InputRange
    name="size"
    label="Size"
    bind:index={size_index}
    bind:value={size}
    values={RANGE_ICON_SIZES} />

<InputRange
    name="stroke-width"
    label="Stroke Width"
    bind:index={width_index}
    bind:value={width}
    values={RANGE_STROKE_WIDTH} />

<InputRange
    name="stroke-linecap"
    label="Stroke Line Cap"
    bind:index={linecap_index}
    bind:value={linecap}
    values={RANGE_STROKE_LINECAP} />

<InputRange
    name="stroke-linejoin"
    label="Stroke Line Join"
    bind:index={linejoin_index}
    bind:value={linejoin}
    values={RANGE_STROKE_LINEJOIN} />

<InputColor label="Color" bind:value={color} />
<InputColor label="Fill" bind:value={fill} />
