<script>
    import {createEventDispatcher} from "svelte";

    import {ICON_SIZES} from "svelte-feather";

    const dispatch = createEventDispatcher();

    export let component = null;
    export let class_name = "";
    export let visible = true;

    export let color = "currentColor";
    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let size = ICON_SIZES.default;
    export let width = "2px";

    function on_anchor_click(event) {
        event.preventDefault();

        dispatch("click", {class_name});
    }
</script>

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

<a class:is-hidden={!visible} href="#" on:click={on_anchor_click}>
    <article class="card">
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

        <header class="text-center">
            <small>
                <code>{class_name}</code>
            </small>
        </header>
    </article>
</a>
