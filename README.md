# [svelte-feather](https://novacbn.github.io/svelte-feather)

> [Feather Icons](https://feathericons.com) as [Svelte](https://svelte.dev) Components

## Installation

### Latest Release

```sh
npm install git+https://github.com/novacbn/svelte-feather#0.0.1
```

### Current `master` Branch

```sh
npm install git+https://github.com/novacbn/svelte-feather
```

## Usage

Goto to the [Icon Viewer](https://novacbn.github.io/svelte-feather) and find the class name of the icon you want to use, then import it like so:

```html
<script>
    import {IconGithub} from "svelte-feather";
</script>

<IconGithub size="large" />
```

Alternatively, you can do "fine-grained" imports as-well if your environment supports it:

```html
<script>
    import IconGithub from "svelte-feather/lib/components/IconGithub.svelte";
</script>

<IconGithub size="large" />
```

## Properties

| Name       | Type     | Default                                                                                                  | Enumeration                                                                                                                      |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `class`    | `string` | `` | [HTML `class` Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) |
| `style`    | `string` | `` | [HTML `style` Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) |
| `color`    | `string` | `currentColor`                                                                                           | [CSS Color Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)                                              |
| `size`     | `string` | `default`                                                                                                | `["default", "tiny", "small", "large", "huge"]`, [CSS Length Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/length) |
| `width`    | `string` | `2px`                                                                                                    | [CSS Length Data Type](https://developer.mozilla.org/en-US/docs/Web/CSS/length)                                                  |
| `fill`     | `string` | `none`                                                                                                   | [SVG `fill` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)                                          |
| `linecap`  | `string` | `round`                                                                                                  | [SVG `stroke-linecap` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap)                      |
| `linejoin` | `string` | `round`                                                                                                  | [SVG `stroke-linejoin` Attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin)                    |

## Building

To build `svelte-feather` from source, first use `npm ci` to install all the dependencies. Then use the below commands to execute the build-pipeline

### `npm run script:icons`

Imports the icon data from the [`feathericons/feather`](https://github.com/feathericons/feather) NPM package, and generates the following:

-   `lib/components/${class_name}.svelte` — The Svelte Component of each SVG icon
-   `lib/components/index.js` — The import module that collects every Svelte Component and re-exports them
-   `docs/src/icons.js` — The documentation manifest, which imports all the Svelte Components from `svelte-feather` and associates them with metadata

### `npm run prettify:icons`

Runs [Prettier](https://prettier.io) on every generated Svelte Component, to standardize the output.

### `npm run link:package`

> **IMPORTANT**: This **MUST** be ran before utilizing documentation pipeline!

Runs [`npm link`](https://docs.npmjs.com/cli/link.html) on the main package.

### `npm run build:icons`

Runs through the following commands `script:icons -> prettify:icons`, as a complete build-pipeline.

## Documentation

> **NOTE**: While a bit rough, you can visit the current implementation of the documentation as [novacbn.github.io/svelte-feather](https://novacbn.github.io/svelte-feather).

To start building the documentation from source, open a terminal with `docs/` as the working directory. Then use the commands below.

### `npm run link:feather`

> **IMPORTANT**: This **MUST** be ran before utilizing any other commands.

Runs [`npm link svelte-feather`](https://docs.npmjs.com/cli/link.html) to symlink the parent `svelte-feather` directory into the `docs/node_modules` directory.

### `npm run build:app`

Runs [`NODE_ENV=production svelvet`](https://github.com/jakedeichert/svelvet) to build the documentation Application out to the `docs/public/dist` directory.

### `npm run serve:app`

Similar to [`npm run build:app`](#npm-run-buildapp), runs [`svelvet`](https://github.com/jakedeichert/svelvet) to serve a live-reload enabled HTTP server on port `8080` for debugging the documentation.

### `npm run prebuild:clean`

Runs `rimraf ./public/dist` to wipe the currently build documentation Application.
