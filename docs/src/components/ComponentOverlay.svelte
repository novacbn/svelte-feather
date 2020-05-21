<script context="module">
    const OVERLAY_TABS = {
        code: "code",
        editor: "editor"
    };
</script>

<script>
    import {ICON_SIZES} from "svelte-feather";

    import {ICON_DEFAULTS, ICON_MAP, ICON_MANIFEST} from "../icons";

    import IconEditor from "./IconEditor";
    import SampleCode from "./SampleCode";

    export let class_name = "";
    export let tab = OVERLAY_TABS.code;

    export let color = ICON_DEFAULTS.color;
    export let fill = ICON_DEFAULTS.fill;
    export let linecap = ICON_DEFAULTS.linecap;
    export let linejoin = ICON_DEFAULTS.linejoin;
    export let size = ICON_DEFAULTS.size;
    export let width = ICON_DEFAULTS.width;

    let icon_editor;

    function on_affirmative_click(event) {
        class_name = "";
    }

    function on_reset_click(event) {
        if (icon_editor) icon_editor.reset();
    }

    function on_overlay_click(event) {
        if (event.target.tagName === "SECTION") class_name = "";
    }

    function on_tab_click(event, identifier) {
        event.preventDefault();

        tab = identifier;
    }

    $: component = ICON_MAP[class_name];
</script>

<style>
    section {
        display: flex;

        position: fixed;

        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        z-index: 1;
    }

    section::before {
        display: block;
        content: "";

        position: absolute;

        width: 100%;
        height: 100%;

        background-color: var(--color-darkGrey);

        opacity: 0.5;
        z-index: -1;
    }

    article {
        width: 45vw;
        min-width: 400px;

        max-width: 600px;
        max-height: 85vh;

        overflow-y: auto;
    }

    code {
        user-select: all;
    }

    a {
        flex: 1;
    }

    .overlay-editor {
        margin-top: 1.5rem;
    }

    footer {
        margin-top: 2rem;
    }
</style>

<section class:is-hidden={!class_name} on:click={on_overlay_click}>
    <article class="card">
        <header>
            <h3>
                <code>{class_name}</code>
            </h3>
        </header>

        <p class="text-center">
            {#if component}
                <svelte:component
                    this={component}
                    {color}
                    {fill}
                    {linecap}
                    {linejoin}
                    {size}
                    {width} />
            {/if}
        </p>

        <div class="tabs">
            <a
                class:active={tab === OVERLAY_TABS.code}
                href="#"
                on:click={(event) => on_tab_click(event, OVERLAY_TABS.code)}>
                Sample Code
            </a>

            <a
                class:active={tab === OVERLAY_TABS.editor}
                href="#"
                on:click={(event) => on_tab_click(event, OVERLAY_TABS.editor)}>
                Editor
            </a>
        </div>

        <SampleCode
            class={tab === OVERLAY_TABS.code ? '' : 'is-hidden'}
            {class_name}
            {color}
            {fill}
            {linecap}
            {linejoin}
            {size}
            {width} />

        <div class="overlay-editor" class:is-hidden={tab !== OVERLAY_TABS.editor}>
            <IconEditor
                bind:this={icon_editor}
                bind:color
                bind:fill
                bind:linecap
                bind:linejoin
                bind:size
                bind:width />
        </div>

        <footer class="is-right">
            <button class="button clear" on:click={on_reset_click}>RESET</button>
            <button class="button primary" on:click={on_affirmative_click}>OKAY!</button>
        </footer>
    </article>
</section>
