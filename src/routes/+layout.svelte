<script lang="ts">
    import type { LayoutData } from './$types';
    import { fade, fly } from 'svelte/transition';
	import Navigation from '$lib/components/Navigation.svelte';
    import '../app.css';
    import { onMount } from 'svelte';
    import LogoSvg from '$lib/components/LogoSvg.svelte';
    export let data: LayoutData
    console.log("layout")
    onMount(()=>{
        console.log(" layout page")
    })
</script>
<Navigation>
    <!-- <svelte:fragment slot="logo">
    </svelte:fragment> -->
</Navigation>

<!-- in:fly={{ delay: 100, duration: 200, y: -10, }} out:fly={{ duration: 100,  y: 10, }}> -->
<!-- in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
<!-- in:fly={{ delay: 100, duration: 200, x: -800 }} out:fade={{ duration: 150, delay: 150 }}> -->

<!-- 
    Transition needs current route!
    pass route from server
-->
{#key data.currentRoute}
    <div class="app">
        <div>
            <LogoSvg height="55px" animation={true}></LogoSvg>
        </div>
    <main
        in:fade={{ duration: 150, delay: 150 }} out:fly={{ duration: 150, x: 100 }}
    >
        <slot></slot>
    </main>
    </div>
{/key}

<style lang="scss">
.app{
    background: var(--background);
    div{
        top:10px;
        position: fixed;
        right: 40px;
        z-index: 100000;
    }
    main{
        max-width: 1240px;
        width: 100%;
        margin:0;
        padding:0;
        margin: 0 auto;
        // background-color: gray;
    }
}
</style>