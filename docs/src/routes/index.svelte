<script context="module">
    export const prerender = true;
</script>

<script>
    import {setContext} from "svelte";
    import {browser} from "$app/env";

    import {ICON_MANIFEST} from "../icons";
    import {CONTEXT_EDITOR, editor_data} from "../stores/editor";

    import * as Editor from "../components/editor";
    import * as Grid from "../components/grid";

    const store = editor_data();
    setContext(CONTEXT_EDITOR, store);

    let search = "";

    function is_visible(icon, search) {
        if (!search) return true;
        const {class_name, tags} = icon;

        if (class_name.toLowerCase().includes(search)) return true;
        for (const tag of tags) {
            if (tag.toLowerCase().includes(search)) return true;
        }

        return false;
    }

    function on_tag_click(event) {
        const {tag} = event.detail;

        search = tag;
    }
</script>

<!--
    NOTE: The Editor is not rendered at-all during SSR. That way end-developers
    can still view the Icon Grid, even if interaction is not available
-->

<main class="row">
    <div class="col-12 is-marginless" class:col-9-md={browser}>
        {#if browser}
            <Editor.Search count={ICON_MANIFEST.length} bind:value={search} />
            <Editor.Tags on:click={on_tag_click} />
        {/if}

        <Grid.Icon>
            {#each ICON_MANIFEST as icon (icon.class_name)}
                <Grid.IconItem
                    visible={is_visible(icon, search)}
                    class_name={icon.class_name}
                    component={icon.component}
                    on:click
                />
            {/each}
        </Grid.Icon>
    </div>

    <hr class="hide-md hide-lg" />

    {#if browser}
        <aside class="col-12 col-3-md">
            <header class="row">
                <div class="col-7">
                    <h4>Customize</h4>
                </div>

                <div class="col-5 text-right">
                    <button on:click={store.reset.bind(null)}>RESET</button>
                </div>
            </header>

            <Editor.Controls />
        </aside>
    {/if}
</main>

<style>
    main {
        margin-top: 4rem;
        margin-bottom: 2rem;

        margin-left: 2rem;
        margin-right: 2rem;
    }

    aside {
        height: fit-content;
    }

    h4 {
        margin-top: 0;
    }

    @media screen and (min-width: 900px) {
        aside {
            position: sticky;
            top: 2rem;

            margin-left: 3rem;

            max-width: 450px;
        }
    }

    @media screen and (max-width: 899px) {
        main {
            flex-direction: column-reverse;
        }

        hr {
            margin-bottom: 2rem;
        }
    }
</style>
