<script lang="ts">
	import Image from '$lib/components/Image.svelte';
    import LogoSvg from '$lib/components/LogoSvg.svelte';
    import Section from '$lib/components/Section.svelte';
    import { onDestroy, onMount, setContext } from 'svelte';
    import RoundButton from '$lib/components/RoundButton.svelte';
    import ArrowDownSvg from '$lib/components/ArrowDownSvg.svelte';
    import { ObserveProps, observer } from '$lib/actions/observer';
    import profile from '$lib/images/profile.png'
    onMount(()=>{
        
    })
    onDestroy(() => {
    });
    let params = {
        options:{ threshold: .1, rootMargin: "0px" },
        observerProp:ObserveProps.isIntersecting
    }
    const enter = (e:IntersectionObserverEntry) => {
        console.log("enter", e.target)
    }
    const exit = (e:IntersectionObserverEntry) => {
        console.log("exit", e.target)
    }

</script>
<svelte:head>
    <title>Home</title>
    <!-- {#each preloadImageUrls as image}
      <link rel="preload" as="image" href={image} />
    {/each} -->
</svelte:head>

<Section className="section1" >
    <h1 id="home_section1" use:observer={params} >Section1</h1>
    <LogoSvg height="200px" animation={true}></LogoSvg>
    <picture>
        <Image src={profile}></Image>
    </picture>
   
    <RoundButton classNames="hover scroll-down">
        <a href="/#home_section2">
            <ArrowDownSvg width="20px" height="30px" ></ArrowDownSvg>
        </a>
    </RoundButton>
</Section>

<Section>
    <h1 id="home_section2">Section2</h1>
</Section>

<style lang="scss">
    :global(.section1){
        justify-content: center;
        background: linear-gradient(292.05deg, #64FFEC 1.08%, #00C0A9 95.55%);

    }
    :global(.scroll-down) {
        background:red;
    }
    :global(.svg-icons) {
        fill:var(--text) !important;
        font-size: 30px !important;
    } 
    picture {
        height: 200px;
        border-radius: 200px;
        overflow: hidden;
    }
</style>