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
    import InputColor from "./InputColor";
    import InputRange from "./InputRange";

    export let color = "currentColor";
    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let size = ICON_SIZES.default;
    export let width = "2px";

    let linecap_index = "0";
    let linejoin_index = "0";

    let size_index = "2";
    let width_index = "3";

    function on_reset_click(event) {
        color = "currentColor";
        fill = "none";

        linecap = "round";
        linecap_index = "0";

        linejoin = "round";
        linejoin_index = "0";

        size = ICON_SIZES.default;
        size_index = "2";

        width = "2px";
        width_index = "3";
    }
</script>

<style>
    h4 {
        margin-top: 0;
    }
</style>

<!--
    TODO: Needs debouncing for input
-->

<header class="row">
    <div class="col-7">
        <h4>Customize</h4>
    </div>

    <div class="col-5 text-right">
        <button on:click={on_reset_click}>RESET</button>
    </div>
</header>

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
