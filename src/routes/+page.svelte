<script>
	import Heading from '$lib/components/Heading.svelte';
    // import Image from "$lib/components/Image.svelte";
    // import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/ArrowDownSvg.svelte";
    import LogoSvg from '$lib/components/LogoSvg.svelte';
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
    
    
    <div class="content-wrapper">
        <Heading></Heading>
        <br> <br>
      <a style="color:white;" href="{encodeURI('https://wa.me/+4369919048032?text=This is WhatsApp sharing example using link')}" data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">069919048032</a>
      <!-- <br>
      <a style="color:white;" href="https://wa.me/+436991948032" target="_blank" >069919048032</a>
<br>
      <a style="color:white;" href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share"  
        target="_blank"> Share to WhatsApp </a>   
        <br>
        <button on:click="{()=>window.open('whatsapp://send?text=This is WhatsApp sharing example using button')}"> Open WhatsApp </button>    
        <br>
        <button on:click="{()=>window.open('https://web.whatsapp.com://send?text=This is whatsapp sharing example using button')}"> Open WhatsApp </button> -->
        <button on:click="{()=>window.open('https://wa.me/+4369919048032?text=This is WhatsApp sharing example using link')}" data-action="share/whatsapp/share"  >c Open WhatsApp </button>
        
        
        <RoundButton classNames="hover scroll-down" title="scroll to the next headline">
            <a href="/#home_section2" aria-label="links to section 2" style="padding:0 10px;">
                <ArrowDownSvg width="20px" height="30px" />
            </a>
        </RoundButton>
    </div>

    <div class="background-svg-banner">
        <div class="svg-wrapper">
            <LogoSvg
                height="800px"
                animation={false}
                --leaves-main=#f0f0f01a
                --leaves-overlay=#f0f0f01a
                --tree-color=#f0f0f01a
                --tree-overlay=#f0f0f01a
                --svg-stroke-width="0px"
            ></LogoSvg>
        </div>
        

    </div>
    
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
        border: 1px solid white;
        left:calc(50% - 22.5px) !important;
    }
    :global(.heading) {
        left:80px !important;
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
        // max-width: var(--content-width);

    }
   
    .section1{
        h1{
            margin-top: 70px;
        }
        width: 100%;
        height: 100%;
        .content-wrapper{
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // background-color: red;
            width:100%;
            max-width: var(--content-width);
            height: 100vh;
            z-index: 1;
            overflow: hidden;
        }
        

        .background-svg-banner {
            overflow: hidden;
            width: 100%;
            height: 550px;
            background-color: var(--primary);
            position: absolute;
            transform: translatY(32%);
            top:32%;
            z-index: 0;
            .svg-wrapper {
                position: absolute;
                top:250px;
                left:-250px;
                height: 100% !important;
                width: auto;
            }
        }
    }

    @media screen and (max-width: 480px){
        .content-wrapper{
            width: 100%;
            width: 100%;
            min-width: 100%;
            padding: 0 10px;
            // background: navy !important;
        }
        :global(.heading) {
            left:0px !important;
        }
    }
</style>
