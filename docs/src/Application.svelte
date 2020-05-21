<script>
    import {query_param} from "svelte-commons";

    import {ICON_DEFAULTS, ICON_MANIFEST} from "./icons";

    import ComponentOverlay from "./components/ComponentOverlay";
    import IconEditor from "./components/IconEditor";
    import IconGrid from "./components/IconGrid";
    import PageHeader from "./components/PageHeader";
    import PageNav from "./components/PageNav";
    import PageFooter from "./components/PageFooter";
    import SearchBar from "./components/SearchBar";

    const class_name = query_param("class_name", "");
    const search = query_param("search", "", {replace: true});

    const color = query_param("color", ICON_DEFAULTS.color, {replace: true});
    const fill = query_param("fill", ICON_DEFAULTS.fill, {replace: true});
    const linecap = query_param("linecap", ICON_DEFAULTS.linecap, {replace: true});
    const linejoin = query_param("linejoin", ICON_DEFAULTS.linejoin, {replace: true});
    const size = query_param("size", ICON_DEFAULTS.size, {replace: true});
    const width = query_param("width", ICON_DEFAULTS.width, {replace: true});

    let icon_editor;

    function on_icon_click(event) {
        $class_name = event.detail.class_name;
    }

    function on_reset_click(event) {
        if (icon_editor) icon_editor.reset();
    }

    let icons = [];
    $: {
        if ($search) {
            const search = $search.toLowerCase();

            icons = ICON_MANIFEST.map(({class_name, component, display_name, name, tags}) => {
                let visible =
                    class_name.toLowerCase().includes(search) ||
                    name.includes(search) ||
                    display_name.toLowerCase().includes(search);

                if (!visible) {
                    for (const tag of tags) {
                        if (tag.includes(search)) {
                            visible = true;
                            break;
                        }
                    }
                }

                return {class_name, component, display_name, name, tags, visible};
            });
        } else {
            icons = ICON_MANIFEST.map((icon) => {
                return {...icon, visible: true};
            });
        }
    }
</script>

<style>
    main {
        margin-top: 4rem;
        margin-bottom: 2rem;

        margin-left: 2rem;
        margin-right: 2rem;
    }

    aside {
        position: sticky;
        top: 2rem;

        margin-left: 3rem;

        max-width: 450px;
        height: fit-content;
    }

    h4 {
        margin-top: 0;
    }
</style>

<ComponentOverlay
    color={$color}
    fill={$fill}
    linecap={$linecap}
    linejoin={$linejoin}
    size={$size}
    width={$width}
    bind:class_name={$class_name} />

<PageNav />
<PageHeader />

<main class="row">
    <div class="col">
        <SearchBar count={icons.length} bind:value={$search} />

        <IconGrid
            color={$color}
            fill={$fill}
            linecap={$linecap}
            linejoin={$linejoin}
            size={$size}
            width={$width}
            {icons}
            on:click={on_icon_click} />
    </div>

    <aside class="col-12 col-3-lg">
        <header class="row">
            <div class="col-7">
                <h4>Customize</h4>
            </div>

            <div class="col-5 text-right">
                <button on:click={on_reset_click}>RESET</button>
            </div>
        </header>

        <IconEditor
            bind:this={icon_editor}
            bind:color={$color}
            bind:fill={$fill}
            bind:linecap={$linecap}
            bind:linejoin={$linejoin}
            bind:size={$size}
            bind:width={$width} />
    </aside>
</main>

<PageFooter />
