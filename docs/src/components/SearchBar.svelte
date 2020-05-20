<script>
    import {IconSearch} from "svelte-feather";

    export let count = 0;
    export let value = "";

    let input_element;

    function on_key_press(event) {
        if (event.key === "/") {
            event.preventDefault();
            input_element.focus();
        }
    }
</script>

<style>
    p {
        align-items: center;
    }
</style>

<svelte:body on:keypress={on_key_press} />

<!--
    TODO: Needs debouncing for input
-->

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
            bind:value />
    </p>
</aside>
