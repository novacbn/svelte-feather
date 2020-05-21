<script>
    import {ICON_DEFAULTS} from "../icons";

    import IconGridItem from "./IconGridItem";

    export let color = ICON_DEFAULTS.color;
    export let fill = ICON_DEFAULTS.fill;
    export let linecap = ICON_DEFAULTS.linecap;
    export let linejoin = ICON_DEFAULTS.linejoin;
    export let size = ICON_DEFAULTS.size;
    export let width = ICON_DEFAULTS.size;

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
