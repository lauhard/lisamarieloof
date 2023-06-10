<script lang="ts">
    import type { LayoutData } from './$types';
    import { fade, fly } from 'svelte/transition';
	import Navigation from '$lib/components/Navigation.svelte';
    import '../app.css';
    import { onMount } from 'svelte';
    import Logo from '$lib/components/Logo.svelte';
    export let data: LayoutData
    $:domReady = false;
    onMount(async ()=>{
        domReady = true;
    })
</script>
<!-- in:fly={{ delay: 100, duration: 200, y: -10, }} out:fly={{ duration: 100,  y: 10, }}> -->
<!-- in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
<!-- in:fly={{ delay: 100, duration: 200, x: -800 }} out:fade={{ duration: 150, delay: 150 }}> -->
<!-- 
    Transition needs current route!
    pass route from server
-->

<!-- in:fade={{ duration: 150, delay: 150 }} out:fly={{ duration: 150, x: 100 }} -->
    <!-- in:fade={{ duration: 150, delay: 100 }} out:fade={{ delay:100, duration:150}} -->

{#key data.currentRoute }
    <div class="app"
    in:fade={{ duration: 250, delay: 100 }} out:fade={{ delay:100, duration:250}}
    >
        <header>
            <Logo>

            </Logo>
            <Navigation>

            </Navigation>
        </header>
             <!-- content here -->
             <main
            
        >
            <slot></slot>
        </main>
       
        
    </div>
{/key}

<style lang="scss">
    :global(.navigation){
        margin-top: 5px;
    }
    :global(.logo) {
        z-index: 999;
        padding-top: 10px;
        // background: white !important;

        // margin-left: -70px;
    }
    header{
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
        max-width: var(--content-width);
        justify-self: center;
        // background: white !important;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
// :global(#logoSvg){
//     position: fixed;
//     top:10px;
//     left: 20px;
//     width: auto;
//     height: 47px;
//     z-index: 100000;
//     display: flex;
//     vertical-align: center;
// }
.app{
    width: 100%;
    // height: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    main{
        // max-width: var(--content-width);
        // height: 100vh;
        // background-color: green;
        min-height: 100%;
        height: auto;
        width: 100%;
    }
    @media screen and (max-width: 680px) {
        :global(#logoSvg){
            right:15px;
        }
    }
}
</style>