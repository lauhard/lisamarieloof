<script lang="ts">

    export let id:string="dropdown";
    export let labelName:string="";
    export let required=true;
    export let options=[
        {
            id:1,
            key:"Rauchentwöhnung",
            value:"Rauchentwöhnung",
        },
        {
            id:2,
            key:"Tiefenentspannung",
            value:"Tiefenentspannung",
        },
        {
            id:3,
            key:"Digital-Detox",
            value:"Digital-Detox",
        },
        {
            id:4,
            key:"Lampenfieber",
            value:"Lampenfieber",
        },
        {
            id:5,
            key:"sonstiges",
            value:"Sonstige Anfragen",
        }
    ]
</script>
<select id={id} {required} on:change name={id}>
    <option value="" selected hidden></option>
    {#each options as option}
        <option  value="{option.key}" >{option.value}</option>
   {/each}
</select>

<style lang="scss">

</style>