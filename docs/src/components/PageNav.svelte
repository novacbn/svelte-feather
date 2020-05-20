<script>
    import {IconGithub} from "svelte-feather";
</script>

<style>
    .version {
        padding-left: 0;
    }

    :global(.nav-icon) {
        margin-right: 0.75rem;
    }
</style>

<nav class="nav">
    <div class="nav-left">
        <a class="brand" href="#">svelte-feather</a>

        <a
            class="version"
            href="https://github.com/novacbn/svelte-feather/releases"
            target="_blank"
            rel="noopener noreferrer">
            <span class="badge">v0.0.1</span>
        </a>
    </div>

    <div class="nav-right">
        <a
            class="button outline"
            href="https://github.com/novacbn/svelte-feather"
            target="_blank"
            rel="noopener noreferrer">
            <IconGithub class="nav-icon" size="small" />
            GitHub
        </a>
    </div>
</nav>
