<section>
    <slot />
</section>

<style>
    section {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

        padding: 0 2rem;
    }
</style>
