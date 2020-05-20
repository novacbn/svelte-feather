<script>
    import {createEventDispatcher} from "svelte";

    import {ICON_SIZES} from "svelte-feather";

    const dispatch = createEventDispatcher();

    export let color = "currentColor";
    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let size = ICON_SIZES.default;
    export let width = "2px";

    export let icons = [];

    function on_anchor_click(event, class_name) {
        event.preventDefault();

        dispatch("click", {class_name});
    }
</script>

<style>
    section {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    }

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

<!--
    TODO: Need to fix grid rendering items being too large when below maximum per row items
-->

<section>
    {#each icons as {component, class_name, visible} (class_name)}
        <a href="#" on:click={(event) => on_anchor_click(event, class_name)}>
            <article class="card" class:is-hidden={!visible}>
                <p class="text-center">
                    <svelte:component
                        this={component}
                        {color}
                        {fill}
                        {linecap}
                        {linejoin}
                        {size}
                        {width} />
                </p>

                <header class="text-center">
                    <small>
                        <code>{class_name}</code>
                    </small>
                </header>
            </article>
        </a>
    {/each}
</section>
