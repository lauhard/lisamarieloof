<script lang="ts">
    import type { LayoutData } from "./$types";
    import { fade, fly } from "svelte/transition";
    import Navigation from "$lib/components/Navigation.svelte";
    import "../app.css";
    import { onMount } from "svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Header from "$lib/components/svgs/Header.svelte";
    export let data: LayoutData;
    onMount(async () => {});
    let oldScroll: number | undefined = undefined;
    export const offset = 50;
    $: scrollY = 0;
    $: innerWidth = 0;
    $: hide = false;
    $: if (scrollY) {
        if (oldScroll === undefined) {
            oldScroll = scrollY;
        }
        if (oldScroll < scrollY) {
            hide = true;
        } else {
            hide = false;
        }
        
        oldScroll = scrollY;
       
    }
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
<svelte:window bind:scrollY bind:innerWidth />

{#key data.currentRoute}
    <div
        class="app"
        in:fade={{ duration: 250, delay: 10 }}
        out:fade={{ delay: 10, duration: 250 }}
    >
        <div class="content-wrapper" class:scroll={scrollY > offset && !hide} class:hide={hide === true}>
            <header>
                <Logo />
                <Navigation />
            </header>
        </div>
        <!-- content here -->
        <main>
            <slot />
        </main>
    </div>
{/key}

<style lang="scss">
    :global(.navigation) {
        margin-top: 5px;
    }
    :global(.logo) {
        z-index: 999;
        padding-top: 10px;
        // background: white !important;
        // margin-left: -70px;
    }
    .hide {
        opacity: 0;
        height: 0;
        transition: all 0.2s ease-in-out;
    }
    .scroll {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        opacity: 1;
        transition: all 0.5s ease-in-out;
        transition: all .2s ease-in-out;
        background-color:#fff !important;
        height: 85px !important;
    }
    .content-wrapper {
        width: 100vw;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        z-index: 999;
        position: fixed;
        top: 0;
        transition: all .5s ease-in-out;
        //  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        //     rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        header {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            z-index: 999;
            width: 100%;
            max-width: var(--content-width);
            // background: var(--primary);
            // background: #fff;
            // padding: 0 15%;
            justify-self: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            opacity: 1;
            transition: all .5s ease-in-out;
        }
    }
    .app {
        width: 100%;
        min-height: 100vh;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        main {
            // max-width: var(--content-width);
            min-height: 100vh;
            height: 100%;
            // height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
        }
        @media screen and (max-width: 680px) {
            :global(#logoSvg) {
                right: 15px;
            }
        }
    }
</style>
