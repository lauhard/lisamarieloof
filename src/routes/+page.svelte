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
    <!-- <h1 id="home_section1" >Section1</h1> -->
    <!-- <h1 id="home_section1" use:observer={params} on:enter={(entry)=>enter(entry)} on:exit={(entry)=>exit(entry)}>Section1</h1> -->
    <!-- <LogoSvg height="200px" animation={true}></LogoSvg> -->
    <!-- <picture>
        <Image src={profile}></Image>
    </picture> -->
    <!-- <button type="button" on:click={(e)=>openMaps()}></button> -->
    
   
    <div class="grid">
        <div class="heading">
            <h5 class="line1">Lisa-Marie Loof</h5>
            <h1 class="line2">Ihr Ort für <span>HYPNOSE</span> &</h1>
            <h1 class="line3">Weiterentwicklung</h1>
        </div>
      
       
    </div>
    <RoundButton classNames="hover scroll-down">
        <a href="/#home_section2">
            <ArrowDownSvg width="20px" height="30px" />
        </a>
    </RoundButton>
</Section>

<Section className="section2">
    <h1 id="home_section2"></h1>
</Section>

<style lang="scss">
     :global(.scroll-down) {
        bottom: 50px;
        position: absolute;
    }
    :global(.section1) {
        padding: 0 !important;
        margin: 0 !important;
        flex-direction: column !important;
        // width: 100vw !important;
        // justify-content: center;
        // background: #1339AC;
        justify-content: center;
        align-items: center;
    }
    .grid {
        background: #ffffff;
        // background: #1339AC;
        border-radius: 10px;
        margin-top:10px;
        width: 80%;
        height: 80%;
        // border:1px solid hsla(0, 0%, 50%, 0.3);
        // box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        // box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        // box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
        // box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        .heading {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 400px;
                height: 200px;

                // background-color: rgba(128, 128, 128, 0.548);

                h1,
                h5 {
                    position: absolute;
                    letter-spacing: 2px;
                    text-align: center;
                    justify-content: center;
                    font-family: "Saira Condensed";
                    color: #505050;
                }
                .line1 {
                    position: absolute;
                    font-weight: 300;
                    color:white;   
                    top:40px;
                    font-size: 14px;
                    left:0px;
                    background-color: var(--primary);
                    border-radius: 10px;
                    padding: 2px 10px;
                }
                .line2 {
                    // left: -15px;
                    font-size: 45px;
                    width: 100%;
                    span {
                        color: #ef476f;
                    }
                }
                .line3 {
                    bottom: 17px;
                    font-size: 45px;
                    color: #505050;
                }
                h1::after,
                h3::after,
                h1::before,
                h3::before {
                    display: none;
                }
            }
    }
  
   
   

</style>
