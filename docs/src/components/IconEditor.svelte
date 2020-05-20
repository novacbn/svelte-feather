<script context="module">
    import {ICON_SIZES} from "svelte-feather";

    const RANGE_ICON_SIZES = [
        ICON_SIZES.tiny,
        ICON_SIZES.small,
        ICON_SIZES.default,
        ICON_SIZES.large,
        ICON_SIZES.huge
    ];

    const RANGE_ICON_LINECAP = ["round", "butt", "square"];

    const RANGE_ICON_LINEJOIN = ["round", "arcs", "bevel", "miter", "miter-clip"];
</script>

<script>
    export let color = "currentColor";
    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let size = ICON_SIZES.default;
    export let width = "2px";

    let linecap_range = "0";
    let linejoin_range = "0";
    let size_range = 2;
    let width_range = "2";

    function on_reset_click(event) {
        color = "currentColor";

        fill = "none";

        linecap = "round";
        linecap_range = "0";

        linejoin = "round";
        linejoin_range = "0";

        size = ICON_SIZES.default;
        size_range = 2;

        width = "2px";
        width_range = "2";
    }

    function on_linecap_input(event) {
        linecap = RANGE_ICON_LINECAP[parseInt(linecap_range)];
    }

    function on_linejoin_input(event) {
        linejoin = RANGE_ICON_LINEJOIN[parseInt(linejoin_range)];
    }

    function on_size_input(event) {
        size = RANGE_ICON_SIZES[parseInt(size_range)];
    }

    function on_width_input(event) {
        width = width_range.toString() + "px";
    }
</script>

<style>
    h4 {
        margin-top: 0;
    }

    input[type="color"] {
        display: block;

        width: 100%;
        height: 100%;

        padding: 0.35rem;

        border: 1px solid var(--color-lightGrey);
        border-radius: 4px;

        transition: all 0.2s ease;
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

<label>Size</label>
<div class="row">
    <div class="col-8">
        <input
            type="range"
            list="list-sizes"
            min="0"
            max="4"
            step="1"
            bind:value={size_range}
            on:input={on_size_input} />

        <datalist id="list-sizes">
            <option value="0" />
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value={size} />
    </div>
</div>

<label>Stroke Width</label>
<div class="row">
    <div class="col-8">
        <input
            type="range"
            list="list-widths"
            min="0.5"
            max="3"
            step="0.5"
            bind:value={width_range}
            on:input={on_width_input} />

        <datalist id="list-widths">
            <option value="0.5" />
            <option value="1" />
            <option value="1.5" />
            <option value="2" />
            <option value="2.5" />
            <option value="3" />
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value={width} />
    </div>
</div>

<label>Stroke Line Cap</label>
<div class="row">
    <div class="col-8">
        <input
            type="range"
            list="list-linecap"
            min="0"
            max="2"
            step="1"
            bind:value={linecap_range}
            on:input={on_linecap_input} />

        <datalist id="list-linecap">
            <option value="0" />
            <option value="1" />
            <option value="2" />
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value={linecap} />
    </div>
</div>

<label>Stroke Line Join</label>
<div class="row">
    <div class="col-8">
        <input
            type="range"
            list="list-linejoin"
            min="0"
            max="4"
            step="1"
            bind:value={linejoin_range}
            on:input={on_linejoin_input} />

        <datalist id="list-linejoin">
            <option value="0" />
            <option value="1" />
            <option value="2" />
            <option value="3" />
            <option value="4" />
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value={linejoin} />
    </div>
</div>

<label>Color</label>
<div class="row">
    <div class="col-8">
        <input type="text" bind:value={color} />
    </div>

    <div class="col">
        <input type="color" bind:value={color} />
    </div>
</div>

<label>Fill</label>
<div class="row">
    <div class="col-8">
        <input type="text" bind:value={fill} />
    </div>

    <div class="col">
        <input type="color" bind:value={fill} />
    </div>
</div>
