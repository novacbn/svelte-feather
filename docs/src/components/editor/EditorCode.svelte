<script>
    import "extern/styles/prism.min.css";

    import {highlight} from "prismjs";
    import {getContext} from "svelte";

    import {TEMPLATE_CODE} from "../../util";
    import {CONTEXT_EDITOR} from "../../stores/editor";

    const store = getContext(CONTEXT_EDITOR);

    let _class = "";
    export let style = "";

    export {_class as class};

    export let class_name = "";

    $: code = TEMPLATE_CODE({...$store, class_name});
    $: html = code ? highlight(code, Prism.languages.html, "html") : "";
</script>

<pre
    class="language-html {_class}"
    {style}>
    <code class="language-html">
        {@html html}
    </code>
</pre>

<style>
    code.language-html :global(.tag) {
        display: inline;

        padding: 0;

        border: none;
        letter-spacing: normal;
        text-transform: none;
    }
</style>
