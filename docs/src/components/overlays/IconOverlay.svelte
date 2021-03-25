<script context="module">
    const OVERLAY_TABS = {
        code: "code",
        editor: "editor"
    };
</script>

<script>
    import {getContext, setContext} from "svelte";

    import {ICON_MAP} from "../../icons";
    import {CONTEXT_EDITOR, editor_data} from "../../stores/editor";

    import * as Editor from "../editor";

    export let class_name = "";
    export let tab = OVERLAY_TABS.code;

    const global_store = getContext(CONTEXT_EDITOR);
    const store = editor_data();

    setContext(CONTEXT_EDITOR, store);

    function on_affirmative_click(event) {
        class_name = "";
    }

    function on_overlay_click(event) {
        if (event.target.tagName === "SECTION") class_name = "";
    }

    function on_tab_click(identifier, event) {
        event.preventDefault();

        tab = identifier;
    }

    $: component = ICON_MAP[class_name];

    $: {
        if (class_name) {
            tab = OVERLAY_TABS.code;
            store.set({...$global_store});
        }
    }
</script>

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
                    color={$store.color}
                    fill={$store.fill}
                    linecap={$store.linecap}
                    linejoin={$store.linejoin}
                    size={$store.size}
                    width={$store.width}
                />
            {/if}
        </p>

        <div class="tabs">
            <a
                class:active={tab === OVERLAY_TABS.code}
                href="#"
                on:click={on_tab_click.bind(null, OVERLAY_TABS.code)}
            >
                Sample Code
            </a>

            <a
                class:active={tab === OVERLAY_TABS.editor}
                href="#"
                on:click={on_tab_click.bind(null, OVERLAY_TABS.editor)}
            >
                Editor
            </a>
        </div>

        <Editor.Code class={tab === OVERLAY_TABS.code ? "" : "is-hidden"} {class_name} />

        <div class="overlay-editor" class:is-hidden={tab !== OVERLAY_TABS.editor}>
            <Editor.Controls />
        </div>

        <footer class="is-right">
            <button class="button clear" on:click={$store.reset.bind(null)}>RESET</button>
            <button class="button primary" on:click={on_affirmative_click}>OKAY!</button>
        </footer>
    </article>
</section>

<style>
    section {
        display: flex;

        position: fixed;
        top: 0;
        left: 0;

        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        z-index: 2;
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
