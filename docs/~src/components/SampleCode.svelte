<script>
    import {ICON_DEFAULTS} from "../icons";
    import {TEMPLATE_CODE} from "../util";

    let _class = "";
    export let style = "";

    export let class_name = "";

    export let color = ICON_DEFAULTS.color;
    export let fill = ICON_DEFAULTS.fill;
    export let linecap = ICON_DEFAULTS.linecap;
    export let linejoin = ICON_DEFAULTS.linejoin;
    export let size = ICON_DEFAULTS.size;
    export let width = ICON_DEFAULTS.width;

    export {_class as class};

    $: code = TEMPLATE_CODE({class_name, color, fill, linecap, linejoin, size, width});
    $: html = code ? Prism.highlight(code, Prism.languages.html, "html") : "";
</script>

<pre class="language-html {_class}" {style}>
    <code class="language-html">
        {@html html}
    </code>
</pre>
