<script>
    import "extern/styles/chota.min.css";

    import * as Shell from "../components/shell";
</script>

<Shell.Omni />
<Shell.Hero />

<slot />

<Shell.Footer />

<style>
    :global(body) {
        background-color: var(--bg-secondary-color);
    }
</style>
