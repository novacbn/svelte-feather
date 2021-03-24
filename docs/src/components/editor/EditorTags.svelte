<script>
    import {createEventDispatcher} from "svelte";

    import {ICON_TAGS} from "../../icons";

    const dispatch = createEventDispatcher();

    function on_anchor_click(event, tag) {
        event.preventDefault();

        dispatch("click", {tag});
    }
</script>

<p>
    {#each ICON_TAGS as tag (tag)}
        <a href="#" on:click={(event) => on_anchor_click(event, tag)}>
            <span class="tag is-small bg-primary text-light">{tag}</span>
        </a>
    {/each}
</p>

<style>
    p {
        display: flex;

        margin-bottom: 1rem;
        padding-bottom: 0.5rem;

        overflow-x: auto;
        overflow-y: hidden;
    }

    a:not(:first-child) {
        margin-left: 0.5rem;
    }

    span {
        white-space: nowrap;
    }
</style>
