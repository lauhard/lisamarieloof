<script lang="ts">
    import type { LayoutData } from './$types';
    import { fade, fly } from 'svelte/transition';
	import Navigation from '$lib/components/Navigation.svelte';
    import '../app.css';
    import { onMount } from 'svelte';
    import LogoSvg from '$lib/components/LogoSvg.svelte';
    export let data: LayoutData
    console.log("layout")
    $:_loaded = false;
    onMount(()=>{
        console.log(" layout page");
        _loaded = true;
    })
</script>
<!-- in:fly={{ delay: 100, duration: 200, y: -10, }} out:fly={{ duration: 100,  y: 10, }}> -->
<!-- in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
<!-- in:fly={{ delay: 100, duration: 200, x: -800 }} out:fade={{ duration: 150, delay: 150 }}> -->
<!-- 
    Transition needs current route!
    pass route from server
-->
{#key data.currentRoute}
    <div class="app">
        <Navigation></Navigation>
        {#if _loaded}
            <div class="logo-wrapper">
                
                <LogoSvg height="55px" 
                    animation={true}
                    --leaves-main='#C8A560'
                    --leaves-overlay='#ae8c48'
                    --tree-color='#515151'
                    --tree-overlay='#2e2c2c'
                ></LogoSvg>
            </div>
        {/if}
    <main
        in:fade={{ duration: 150, delay: 150 }} out:fly={{ duration: 150, x: 100 }}
    >
        <slot></slot>
    </main>
    </div>
{/key}

<style lang="scss">
.app{
    height: 100%;
    width: 100%;
    // width: 100vw;
    .logo-wrapper{
        top:10px;
        position: fixed;
        left: 60px;
        z-index: 100000;
        display: flex;
        vertical-align: center;
       
    }
    main{
        // max-width: 1240px;
        // margin: 0 auto;
        height: 100vh;
        margin:0;
        padding:0;

    }
    @media screen and (max-width: 680px) {
        .logo-wrapper{
            right:15px;
        }
    }
}
</style>