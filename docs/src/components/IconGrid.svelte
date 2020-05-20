<script>
    import {ICON_SIZES} from "svelte-feather";

    import IconGridItem from "./IconGridItem";

    export let color = "currentColor";
    export let fill = "none";
    export let linecap = "round";
    export let linejoin = "round";
    export let size = ICON_SIZES.default;
    export let width = "2px";

    export let icons = [];
</script>

<style>
    section {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    }
</style>

<section>
    {#each icons as {component, class_name, visible} (class_name)}
        <IconGridItem
            {class_name}
            {component}
            {color}
            {fill}
            {linecap}
            {linejoin}
            {size}
            {visible}
            {width}
            on:click />
    {/each}
</section>
