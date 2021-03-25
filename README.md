# [svelte-feather](https://novacbn.github.io/svelte-feather)

> [Feather Icons](https://feathericons.com) as [Svelte](https://svelte.dev) Components

## Icon Viewer

Visit the [Icon Viewer](https://novacbn.github.io/svelte-feather) to find all the available Icon Components and import examples.

## Installation

### Latest Release

```sh
npm install github:novacbn/svelte-feather#0.1.0
```

### Current `master` Branch

```sh
npm install github:novacbn/svelte-feather
```

### WebComponents

This library can also be used standalone as [WebComponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components). Just head over to [Releases](https://github.com/novacbn/svelte-feather/releases) to pick up a build and load via `<script>`:

```html
<script type="application/javascript" src="/path/to/svelte-feather.webcomponents.min.js"></script>
```

## Usage

Goto to the [Icon Viewer](https://novacbn.github.io/svelte-feather) and find the class name of the icon you want to use, then import it like so:

```html
<script>
    import {Icons} from "svelte-feather/components";
</script>

<Icons.Github size="large" />
```

Alternatively, you can do "fine-grained" imports as-well if your environment supports it, for better Build Tools / IDE experience:

```html
<script>
    import Github from "svelte-feather/components/Github";
</script>

<Github size="large" />
```

If using via the WebComponents build, just use all-lowercase identifiers, prefixing `feather-*`. Putting dashes infront of captials:

```html
<feather-arrow-right-circle size="large" />
```

## Properties

| Name       | Type     | Default                                                                                                  | Enumeration                                                                                                                                |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `class`    | `string` | `` | [HTML `class` Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) |
| `style`    | `string` | `` | [HTML `style` Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) |
| `color`    | `string` | `currentColor`                                                                                           | [CSS Color Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)                                                        |
| `size`     | `string` | `default`                                                                                                | `["default", "tiny", "small", "medium", "large", "huge"]`, [CSS Length Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/length) |
| `width`    | `string` | `1em`                                                                                                    | [CSS Length Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/length)                                                            |
| `fill`     | `string` | `none`                                                                                                   | [SVG `fill` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)                                                    |
| `linecap`  | `string` | `round`                                                                                                  | [SVG `stroke-linecap` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)                                |
| `linejoin` | `string` | `round`                                                                                                  | [SVG `stroke-linejoin` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)                              |

## Development

### Building Package

To build `svelte-feather` from source, first use `npm ci` to install all the dependencies. Use the commands below to execute the build-pipline.

#### `npm run build:icons`

Runs through `build:icons:generate` -> `build:icons:webcomponents` pipeline.

#### `npm run build:icons:generate`

Imports the icon data from the [`feathericons/feather`](https://github.com/feathericons/feather) NPM package, and generates the following:

-   `components/${class_name}.svelte` — The Svelte Component of each SVG icon
-   `components/${class_name}.js` — Stub re-exporter file to improve DX around "fine-grained" imports
-   `components/index.js` — The import module that collects every Svelte Component and re-exports them
-   `components/webcomponents.js` — Similar to above, but without re-exporting to save file size space in WebComponents build
-   `docs/src/icons.js` — The documentation manifest, which imports all the Svelte Components from `svelte-feather` and associates them with metadata

#### `npm run build:icons:webcomponents`

Uses [ESBuild](https://github.com/evanw/esbuild) to build and bundle all the Svelte Components together in a single file as [WebComponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

#### `npm run prebuild:clean`

Runs `rimraf ./dist/;rimraf ./components` to wipe current build of Icon Components and WebComponents bundle.

### Building Icon Viewer

To build the "Icon Viewer" from source, `cd` to `docs/`. Then use `npm ci` to install all the dependencies. Use the commands below to execute the build-pipline.

#### `npm run build:application`

Runs [SvelteKit](https://kit.svelte.dev) to build the documentation Application out to the `docs/build/` directory.

#### `npm run serve:application`

Similar to [`npm run build:application`](#npm-run-buildapplication), runs [SvelteKit](https://kit.svelte.dev) to serve a live-reload enabled HTTP server on port `3000` for debugging the Icon Viewer.

#### `npm run prebuild:clean`

Runs `rimraf ./build` to wipe the current Icon Viewer build.
