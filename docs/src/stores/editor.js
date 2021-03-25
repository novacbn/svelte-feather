import {writable} from "svelte/store";

import {ICON_DEFAULTS} from "../icons";

const DEFAULT_DATA = {
    color: ICON_DEFAULTS.color,
    fill: ICON_DEFAULTS.fill,
    linecap: ICON_DEFAULTS.linecap,
    linejoin: ICON_DEFAULTS.linejoin,
    size: ICON_DEFAULTS.size,
    width: ICON_DEFAULTS.width
};

export const CONTEXT_EDITOR = Symbol.for("editor-data");

export function editor_data(data = {}) {
    const {set, subscribe, update} = writable({...DEFAULT_DATA, ...data});

    return {
        set,
        subscribe,
        update,

        reset() {
            set({...DEFAULT_DATA});
        }
    };
}
