<script>
    import {query_param} from "svelte-commons";
    import {ICON_SIZES} from "svelte-feather";

    import ICONS from "./icons";

    import ComponentOverlay from "./components/ComponentOverlay";
    import IconEditor from "./components/IconEditor";
    import IconGrid from "./components/IconGrid";
    import PageHeader from "./components/PageHeader";
    import PageNav from "./components/PageNav";
    import PageFooter from "./components/PageFooter";
    import SearchBar from "./components/SearchBar";

    const component = query_param("component", "");
    const search = query_param("search", "", {replace: true});

    const color = query_param("color", "currentColor", {replace: true});
    const fill = query_param("fill", "none", {replace: true});
    const linecap = query_param("linecap", "round", {replace: true});
    const linejoin = query_param("linejoin", "round", {replace: true});
    const size = query_param("size", ICON_SIZES.default, {replace: true});
    const width = query_param("width", "2px", {replace: true});

    function on_icon_click(event) {
        $component = event.detail.class_name;
    }

    let _icons = [];
    $: {
        if ($search) {
            const search = $search.toLowerCase();

            _icons = ICONS.map(({class_name, component, display_name, name, tags}) => {
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
            _icons = ICONS.map((icon) => {
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
</style>

<ComponentOverlay bind:component={$component} />

<PageNav />
<PageHeader />

<main class="row">
    <div class="col">
        <SearchBar count={_icons.length} bind:value={$search} />

        <IconGrid
            icons={_icons}
            color={$color}
            fill={$fill}
            linecap={$linecap}
            linejoin={$linejoin}
            size={$size}
            width={$width}
            on:click={on_icon_click} />
    </div>

    <aside class="col-3">
        <IconEditor
            bind:color={$color}
            bind:fill={$fill}
            bind:linecap={$linecap}
            bind:linejoin={$linejoin}
            bind:size={$size}
            bind:width={$width} />
    </aside>
</main>

<PageFooter />
