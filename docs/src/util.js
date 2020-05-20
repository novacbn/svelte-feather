export const TEMPLATE_CODE = ({class_name}) => `<script>
    import {${class_name}} from "svelte-feather";
</script>

<${class_name} />`;
