<script lang="ts">
    import { onMount } from "svelte";
    export let className="";
    export let showOnLoad:boolean = true;
    $:_loaded = false;
    onMount(()=>{
        _loaded = true;
    })
</script>

<section class="{className}">
    {#if showOnLoad === false}
        <slot></slot>
    {:else}
        {#if _loaded === true }
            <slot></slot>
        {/if}
    {/if}
  
</section>

<style lang="scss">
    section {
        position: relative;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        min-width: 100%;
        display:flex;
        // justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        // padding: 0 10px;
        box-sizing: border-box;
    }
</style>