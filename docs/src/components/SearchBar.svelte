<script>
    import {IconSearch, IconXCircle} from "svelte-feather";

    import {debounce} from "../util";

    export let count = 0;
    export let value = "";

    let input_element;
    let _value = value;

    const update_value = debounce((v) => {
        value = v;
    }, 250);

    function on_key_press(event) {
        if (event.key === "/") {
            event.preventDefault();
            input_element.focus();
        }
    }

    function on_reset_click(event) {
        _value = "";
    }

    $: update_value(_value);
</script>

<style>
    p {
        align-items: center;
    }

    button {
        z-index: unset !important;
    }
</style>

<svelte:body on:keypress={on_key_press} />

<aside>
    <p class="grouped">
        <label for="search-text">
            <IconSearch />
        </label>

        <input
            bind:this={input_element}
            type="text"
            id="search-text"
            placeholder="Search {count} icons (Press / to focus)"
            bind:value={_value} />

        <button class="button error icon-only" disabled={!_value} on:click={on_reset_click}>
            <IconXCircle />
        </button>
    </p>
</aside>
