<script>
    import {createEventDispatcher, getContext} from "svelte";

    import {browser} from "$app/env";

    import {CONTEXT_EDITOR} from "../../stores/editor";

    const dispatch = createEventDispatcher();
    const store = getContext(CONTEXT_EDITOR);

    export let component = null;
    export let class_name = "";
    export let visible = true;

    function on_anchor_click(event) {
        event.preventDefault();

        dispatch("click", {class_name});
    }
</script>

<!--
    NOTE: If the client doesn't support Javascript (or disabled), then we're just displaying
    the Icon Grid without interactivity
-->

{#if browser}
    <a class:is-hidden={!visible} href="#" on:click={on_anchor_click}>
        <article class="card">
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

            <header class="text-center">
                <small>
                    <code>{class_name}</code>
                </small>
            </header>
        </article>
    </a>
{:else}
    <article class="card" class:is-hidden={!visible}>
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

        <header class="text-center">
            <small>
                <code>{class_name}</code>
            </small>
        </header>
    </article>
{/if}

<style>
    article {
        padding-top: 2rem;
        padding-bottom: 2rem;

        overflow: hidden;
    }

    p {
        margin-bottom: 1rem;
    }

    a {
        color: inherit;
    }
</style>
