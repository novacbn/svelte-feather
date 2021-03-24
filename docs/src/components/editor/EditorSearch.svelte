<script>
    import {XCircle} from "svelte-feather/components/XCircle";
    import {Search} from "svelte-feather/components/Search";

    import {debounce} from "../../util";

    export let count = 0;
    export let value = "";

    let input_element;
    let _value = value;

    const update_value = debounce((v) => {
        value = v;
    }, 200);

    function on_key_press(event) {
        if (event.key === "/") {
            event.preventDefault();
            input_element.focus();
        }
    }

    function on_input(event) {
        update_value(_value);
    }

    function on_reset_click(event) {
        _value = "";
        value = "";
    }

    $: _value = value;
</script>

<svelte:body on:keypress={on_key_press} />

<aside>
    <p class="grouped">
        <label for="search-text">
            <Search />
        </label>

        <input
            bind:this={input_element}
            type="text"
            id="search-text"
            placeholder="Search {count} icons (Press / to focus)"
            bind:value={_value}
            on:input={on_input}
        />

        <button class="button error icon-only" disabled={!_value} on:click={on_reset_click}>
            <XCircle />
        </button>
    </p>
</aside>

<style>
    p {
        align-items: center;
    }

    button {
        z-index: unset !important;
    }
</style>
