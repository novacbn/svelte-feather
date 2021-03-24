<script context="module">
    export const prerender = true;
</script>

<script>
    import {browser} from "$app/env";

    import {ICON_MANIFEST} from "../icons";

    import * as Editor from "../components/editor";
    import * as Grid from "../components/grid";

    let search = "";

    let editor = null;

    function on_reset_click(event) {
        if (editor) editor.reset();
    }

    function on_tag_click(event) {}
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
            {#each ICON_MANIFEST as {component, class_name, visible} (class_name)}
                <Grid.IconItem {class_name} {component} {visible} on:click />
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
                    <button on:click={on_reset_click}>RESET</button>
                </div>
            </header>

            <Editor.Controls bind:this={editor} />
        </aside>
    {/if}
</main>

<!-- {color}
        {fill}
        {linecap}
        {linejoin}
        {size}
        {width} -->
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
