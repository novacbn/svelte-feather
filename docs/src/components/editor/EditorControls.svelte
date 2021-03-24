<script context="module">
    import {ICON_SIZES} from "svelte-feather";

    const RANGE_ICON_SIZES = [
        ICON_SIZES.default,

        ICON_SIZES.tiny,
        ICON_SIZES.small,
        ICON_SIZES.medium,
        ICON_SIZES.large,
        ICON_SIZES.huge
    ];

    const RANGE_STROKE_LINECAP = ["round", "square", "butt"];

    const RANGE_STROKE_LINEJOIN = ["round", "arcs", "bevel", "miter", "miter-clip"];

    const RANGE_STROKE_WIDTH = ["0.5px", "1px", "1.5px", "2px", "2.5px", "3px"];
</script>

<script>
    import {ICON_DEFAULTS} from "../../icons";

    import EditorColor from "./EditorColor.svelte";
    import EditorRange from "./EditorRange.svelte";

    export let color = ICON_DEFAULTS.color;
    export let fill = ICON_DEFAULTS.fill;

    export let linecap = ICON_DEFAULTS.linecap;
    export let linejoin = ICON_DEFAULTS.linejoin;

    export let size = ICON_DEFAULTS.size;
    export let width = ICON_DEFAULTS.width;

    export function reset() {
        color = ICON_DEFAULTS.color;
        fill = ICON_DEFAULTS.fill;

        linecap = ICON_DEFAULTS.linecap;
        linejoin = ICON_DEFAULTS.linejoin;

        size = ICON_DEFAULTS.size;
        width = ICON_DEFAULTS.width;
    }
</script>

<EditorRange name="size" label="Size" values={RANGE_ICON_SIZES} bind:value={size} />

<EditorRange
    name="stroke-width"
    label="Stroke Width"
    values={RANGE_STROKE_WIDTH}
    bind:value={width}
/>

<EditorRange
    name="stroke-linecap"
    label="Stroke Line Cap"
    values={RANGE_STROKE_LINECAP}
    bind:value={linecap}
/>

<EditorRange
    name="stroke-linejoin"
    label="Stroke Line Join"
    values={RANGE_STROKE_LINEJOIN}
    bind:value={linejoin}
/>

<EditorColor label="Color" bind:value={color} />
<EditorColor label="Fill" bind:value={fill} />
