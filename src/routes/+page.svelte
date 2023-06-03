<script>
	import Heading from '$lib/components/Heading.svelte';
    // import Image from "$lib/components/Image.svelte";
    // import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/ArrowDownSvg.svelte";
    // import { ObserveProps, observer } from "$lib/actions/observer";
    // import profile from "$lib/images/profile.png";
    // import { openMaps, scrollToAnchor } from "$lib/utils";
    // $: vars = `--background-image: url(${profile});`;

    onMount(() => {});
    // onDestroy(() => {});

    // let params = {
    //     options: { threshold: 0.1, rootMargin: "0px" },
    //     observerProp: ObserveProps.isIntersecting,
    // };
    // const enter = (e: IntersectionObserverEntry) => {
    //     console.log("enter", e.target);
    // };
    // const exit = (e: IntersectionObserverEntry) => {
    //     console.log("exit", e.target);
    // };
</script>

<svelte:head>
    <title>Startseite</title>
</svelte:head>

<section class="section1">
    <!-- Intersection Observer example -->
    <!-- <h1 id="home_section1" use:observer={params} on:enter={(entry)=>enter(entry)} on:exit={(entry)=>exit(entry)}>Section1</h1> -->

    <!-- Maps Example -->
    <!--<button type="button" on:click={(e)=>openMaps()}></button> -->
    <Heading></Heading>
    <RoundButton classNames="hover scroll-down">
        <a href="/#home_section2">
            <ArrowDownSvg width="20px" height="30px" />
        </a>
    </RoundButton>
</section>

<section class="section2">
    <h1 class="decoeator" id="home_section2">Section2</h1>
</section>

<section class="section3">
    <h1 class="decoeator" id="home_section3">Section3</h1>
</section>

<style lang="scss">
    :global(.scroll-down) {
        bottom: 50px;
        position: absolute;
    }
    section {
        position: relative;
        height:100%;
        min-height:100vh;
        width: 100%;
        min-width: 100%;
        display:flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        // background-color: red;
    }
   
    .section1{
        h1{
            margin-top: 70px;
        }
        width: 100%;
        height: 100%;
    }
</style>
