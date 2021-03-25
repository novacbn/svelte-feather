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
    import {getContext} from "svelte";

    import {CONTEXT_EDITOR} from "../../stores/editor";

    import EditorColor from "./EditorColor.svelte";
    import EditorRange from "./EditorRange.svelte";

    const store = getContext(CONTEXT_EDITOR);
</script>

<EditorRange name="size" label="Size" values={RANGE_ICON_SIZES} bind:value={$store.size} />

<EditorRange
    name="stroke-width"
    label="Stroke Width"
    values={RANGE_STROKE_WIDTH}
    bind:value={$store.width}
/>

<EditorRange
    name="stroke-linecap"
    label="Stroke Line Cap"
    values={RANGE_STROKE_LINECAP}
    bind:value={$store.linecap}
/>

<EditorRange
    name="stroke-linejoin"
    label="Stroke Line Join"
    values={RANGE_STROKE_LINEJOIN}
    bind:value={$store.linejoin}
/>

<EditorColor label="Color" bind:value={$store.color} />
<EditorColor label="Fill" bind:value={$store.fill} />
