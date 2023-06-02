<script lang="ts">
    import Image from "$lib/components/Image.svelte";
    import LogoSvg from "$lib/components/LogoSvg.svelte";
    import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/ArrowDownSvg.svelte";
    import { ObserveProps, observer } from "$lib/actions/observer";
    import profile from "$lib/images/profile.png";
    import { openMaps } from "$lib/utils";
    import AnimatedHeading from "$lib/components/AnimatedHeading.svelte";
    $: vars = `--background-image: url(${profile});`;

    onMount(() => {});
    onDestroy(() => {});

    let params = {
        options: { threshold: 0.1, rootMargin: "0px" },
        observerProp: ObserveProps.isIntersecting,
    };
    const enter = (e: IntersectionObserverEntry) => {
        console.log("enter", e.target);
    };
    const exit = (e: IntersectionObserverEntry) => {
        console.log("exit", e.target);
    };
</script>

<svelte:head>
    <title>Home</title>
    <!-- {#each preloadImageUrls as image}
      <link rel="preload" as="image" href={image} />
    {/each} -->
</svelte:head>

<Section className="section1">
    <!-- Intersection Observer example -->
    <!-- <h1 id="home_section1" use:observer={params} on:enter={(entry)=>enter(entry)} on:exit={(entry)=>exit(entry)}>Section1</h1> -->

    <!-- Maps Example -->
    <!--<button type="button" on:click={(e)=>openMaps()}></button> -->
    <h1 id="home_section1">Section1</h1>
    <RoundButton classNames="hover scroll-down">
        <a href="/#home_section2">
            <ArrowDownSvg width="20px" height="30px" />
        </a>
    </RoundButton>
</Section>

<Section className="section2">
    <h1 id="home_section2">Section2</h1>
</Section>

<Section className="section3">
    <h1 id="home_section3">Section3</h1>
</Section>

<style lang="scss">
     :global(.scroll-down) {
        bottom: 50px;
        position: absolute;
    }
    :global(.section1) {
        flex-direction: column ;
        align-items: center;
    }
</style>
