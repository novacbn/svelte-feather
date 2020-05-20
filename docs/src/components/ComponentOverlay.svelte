<script>
    import {TEMPLATE_CODE} from "../util";

    export let component = "";

    function on_affirmative_click(event) {
        component = "";
    }

    function on_overlay_click(event) {
        if (event.target.tagName === "SECTION") component = "";
    }

    let highlight_html = "";
    $: {
        const code = TEMPLATE_CODE({class_name: component});

        highlight_html = Prism.highlight(code, Prism.languages.html, "html");
    }
</script>

<style>
    section {
        display: flex;

        position: fixed;

        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        z-index: 1;
    }

    section::before {
        display: block;
        content: "";

        position: absolute;

        width: 100%;
        height: 100%;

        background-color: var(--color-darkGrey);

        opacity: 0.5;
        z-index: -1;
    }

    code {
        user-select: all;
    }
</style>

<section class:is-hidden={!component} on:click={on_overlay_click}>
    <div class="card">
        <header>
            <h3>
                <code>{component}</code>
            </h3>
        </header>

        <pre>
            <code class="language-html">
                {@html highlight_html}
            </code>
        </pre>

        <footer class="is-right">
            <button class="button primary" on:click={on_affirmative_click}>OKAY!</button>
        </footer>
    </div>
</section>
