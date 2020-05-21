<script>
    import {createEventDispatcher} from "svelte";

    import {ICON_TAGS} from "../icons";

    const dispatch = createEventDispatcher();

    function on_tag_click(event, tag) {
        event.preventDefault();

        dispatch("click", {tag});
    }
</script>

<style>
    p {
        display: flex;

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

<p>
    {#each ICON_TAGS as tag (tag)}
        <a href="#" on:click={(event) => on_tag_click(event, tag)}>
            <span class="badge is-small bg-primary text-light">{tag}</span>
        </a>
    {/each}
</p>
