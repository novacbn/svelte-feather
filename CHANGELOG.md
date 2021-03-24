# CHANGELOG

## v0.1.0 — UNRELEASED

-   **(BREAKING)** Components must be imported via `svelte-feather/components` now using the `Icons` map

```html
<script>
    import {IconWifi} from "svelte-feather";
</script>

<IconWifi />
```

**->**

```html
<script>
    import {Icons} from "svelte-feather/components";
</script>

<Icons.Wifi />
```

-   **(BREAKING)** Updated default size of Icon Components to be `1em` (`<Icons.Wifi />`), it is matches current font size of parent

    -   Added original default Icon size of `24px` as `ICON_SIZES.medium` (`<Icons.Wifi size="medium">`)

-   Added Console warning about importing directly from `svelte-feather/components`
-   Added export information for being able to import Icon Components directly, to improve Build Tools / IDE experience (i.e. slow code formatting)

    -   e.g. `import {Wifi} from "svelte-feather/components/Wifi";`

-   Added new bundled Web Components build at `/dist/svelte-feather.webcomponents.js` / `/dist/svelte-feather.webcomponents.min.js`

    -   If frontloading all the Icons at once and being Javascript-only is not a concern, this build is available in plain HTML via `<feather-${ICON}>`. e.g. `<feather-wifi size="large">`

-   Bump Feather from `4.26.0` -> `4.28.0`
-   Cleaned up some build code
-   Moved library files into root filesystem
