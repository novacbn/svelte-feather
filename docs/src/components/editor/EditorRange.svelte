<script>
    export let name = "";
    export let label = "";
    export let value = "";
    export let values = [];

    function on_range_input(event) {
        if (!event.isTrusted) return;

        const {value: index} = event.target;
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
            value={values.indexOf(value)}
            on:input={on_range_input}
        />

        <datalist id={list_name}>
            {#each steps as _, index (index)}
                <option value={index} />
            {/each}
        </datalist>
    </div>

    <div class="col">
        <input type="text" bind:value />
    </div>
</div>
