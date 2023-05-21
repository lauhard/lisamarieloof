<script lang="ts">
    import type { LayoutData } from './$types';
    import { fade, fly } from 'svelte/transition';
	import Navigation from '$lib/components/Navigation.svelte';
    import '../app.css';
    import { onMount } from 'svelte';
    export let data: LayoutData
    console.log("layout")
    onMount(()=>{
        console.log(" layout page")
    })
</script>
<Navigation></Navigation>
<!-- in:fly={{ delay: 100, duration: 200, y: -10, }} out:fly={{ duration: 100,  y: 10, }}> -->
<!-- in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
<!-- in:fly={{ delay: 100, duration: 200, x: -800 }} out:fade={{ duration: 150, delay: 150 }}> -->

<!-- 
    Transition needs current route!
    pass route from server
-->
{#key data.currentRoute}
    <div class="app">
    <main
        in:fade={{ duration: 150, delay: 150 }} out:fly={{ duration: 150, x: 100 }}
    >
        <slot></slot>

    </main>
    </div>
{/key}

<style lang="scss">
  
</style>