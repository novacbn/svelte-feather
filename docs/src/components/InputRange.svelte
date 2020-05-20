<script>
    export let name = "";
    export let label = "";
    export let index = "2";
    export let value = "";
    export let values = [];

    function on_range_input(event) {
        value = values[index];
    }

    $: steps = new Array(values.length);
    $: list_name = "list-" + name;
</script>

<label for={name}>{label}</label>

<div class="row">
    <div class="col-8">
        <input
            type="range"
            list={list_name}
            min="0"
            max={steps.length - 1}
            step="1"
            {name}
            bind:value={index}
            on:input={on_range_input} />

        <datalist id={list_name}>
            {#each steps as _, index}
                <option value={index} />
            {/each}
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value />
    </div>
</div>
