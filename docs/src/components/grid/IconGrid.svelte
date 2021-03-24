<section>
    <slot />
</section>

<style>
    section {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    }
</style>
