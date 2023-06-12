<script lang=ts>
    export let id= ""
    export let name= ""
    export let labelText= "label text"
    export let disabled=false
    export let checked=false
</script>
<label for="{id}">
    <input type="checkbox" id="{id}" name="{id}" {disabled} {checked}>
    {labelText}
</label>
<style lang="scss"></style>