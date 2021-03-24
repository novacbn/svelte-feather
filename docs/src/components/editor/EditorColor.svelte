<script>
    export let label = "";
    export let value = "black";
</script>

<label>{label}</label>

<div class="row">
    <div class="col-8">
        <input type="text" bind:value />
    </div>

    <div class="col">
        <input type="color" bind:value />
    </div>
</div>

<style>
    input[type="color"] {
        display: block;

        width: 100%;
        height: 100%;

        padding: 0.35rem;

        border: 1px solid var(--color-lightGrey);
        border-radius: 4px;

        transition: all 0.2s ease;
    }
</style>
