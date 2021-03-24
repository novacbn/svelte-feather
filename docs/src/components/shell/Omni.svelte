<script>
    import {Github} from "svelte-feather/components/Github";
</script>

<nav class="nav">
    <div class="nav-left">
        <a class="brand" href="#">svelte-feather</a>

        <a
            class="version"
            href="https://github.com/novacbn/svelte-feather/releases"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span class="badge">v0.1.0</span>
        </a>
    </div>

    <div class="nav-right">
        <a
            class="button outline"
            href="https://github.com/novacbn/svelte-feather"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Github class="nav-icon" size="small" />
            GitHub
        </a>
    </div>
</nav>

<style>
    .version {
        padding-left: 0;
    }

    :global(.nav-icon) {
        margin-right: 0.75rem;
    }
</style>
