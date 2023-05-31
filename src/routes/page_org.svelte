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
        <div class="box left">
            <div class="nested circle-wrapper">
                <div class="circle">
                    <div class="heading">
                        <h3 class="line1">Ihr Ort</h3>
                        <h1 class="line2">für <span>HYPNOSE</span> &</h1>
                        <h1 class="line3">Weiterentwicklung</h1>
                    </div>
                </div>
            </div> 
            <div class="nested">
                <div class="spacer"></div>
            </div>
            <div class="nested">
                <h5>Herzlich Willkommen</h5>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Atque, sint qui consectetur quis vitae nesciunt error modi labore, 
                    saepe optio natus! Vel ullam at illum et doloremque debitis recusandae dolore.
                </p>
            </div>
            <div class="nested">
                <div class="spacer"></div>
            </div>

            <div class="nested service-wrapper">
                <h5>Leistungen</h5>
                <div class="services">
                    <div class="service"></div>
                    <div class="service"></div>
                    <div class="service"></div>
                    <div class="service"></div>
                    <div class="service"></div>
                </div>
            </div>
        </div>
        <div class="box right">
            <div class="nested image-wrapper">
                <div class="image">

                </div>
            </div>
        </div>
    </div>
    <RoundButton classNames="hover scroll-down">
        <a href="/#home_section2">
            <ArrowDownSvg width="20px" height="30px" />
        </a>
    </RoundButton>
</Section>

<Section>
    <h1 id="home_section2">Section2</h1>
</Section>

<style lang="scss">
    :global(.section1) {
        padding: 0 !important;
        margin: 0 !important;
        // width: 100vw !important;
        // justify-content: center;
        background: linear-gradient(292.05deg, #dbdbdb 1.08%, #dbdcdc 95.55%);
    }
    :global(.scroll-down) {
        bottom: 50px;
        position: absolute;
    }
    :global(.svg-icons) {
        fill: var(--text) !important;
        font-size: 30px !important;
    }
    picture {
        height: 200px;
        border-radius: 200px;
        overflow: hidden;
    }
    .grid {
        // width: 1240px;
        // background-color: #caac6f;
        // border: 2px solid #f76707;
        width: 100%;
        height: 100%;
     
        gap: 0px;
      
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        box-sizing: border-box;
        .box {
            // border: 2px solid #ffa94d;
            border-radius: 5px;
            // padding: 1em;
            // color: #d9480f;
            width: 100%;
            box-sizing: border-box;

        }
        .spacer{
            width: 35px;
            height: 5px;
            background: #ef476f;
            border-radius: 30px;
            margin: 30px;
        }
        .nested {
            // border: 2px solid #ffec99;
            border-radius: 5px;
            // padding: 1em;
            position: relative;
            width: 100%;
            // background-color: #ef476f;
            // height: 100%;
            // height: 400px;
            flex-direction: column;
            display: flex;
            justify-content: center;
            align-items: center;
            p{
                text-align: center;
                font-size: 16px;
            }
        }
        .left,
        .right {
            height: 100%;
            width: 100%;
            overflow: hidden;
        }
        .left {
            .circle-wrapper {
                height: 340px;
                width: 100%;
                position: relative;
                display: flex;
                justify-content: flex-end;
                padding-bottom: 15px;
                .circle {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    background: rgb(250, 241, 241);
                    border: 1px solid rgba(246, 188, 208, 0.589);
                    box-shadow: 0 0 20px rgba(193, 10, 74, 0.507);

                    border-radius: 50%;
                    // background: radial-gradient(
                    //     circle,
                    //     rgba(255, 255, 255, 0) 35%,
                    //     rgba(251, 97, 151, 0.196) 55%,
                    //     rgba(255, 66, 132, 0.468) 90%
                    // );
                    background: radial-gradient(
                        circle,
                        rgba(255, 255, 255, 0) 50%,
                        rgba(251, 97, 151, 0.196) 70%,
                        rgba(255, 66, 132, 0.323) 90%
                    );
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    .heading {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 300px;
                        height: 200px;
                        // background-color: rgba(128, 128, 128, 0.548);
                        h1,
                        h3 {
                            position: absolute;
                            font-size: 50px;
                            letter-spacing: 2px;
                            text-align: center;
                            justify-content: center;
                            font-family: "Saira Condensed";
                            color: #505050;
                        }
                        .line1 {
                            position: absolute;
                            top: 30px;
                            font-size: 28px;
                        }
                        .line2 {
                            left: -15px;
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
            }
            .service-wrapper{
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: .5rem;
                h5{
                    color:#ef476f;
                }
                .services{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                    .service {
                        width: 150px;
                        height: 120px;
                        background: gray;
                    }
                }
            }
           
        }
        .right{
            // background-color: var(--background);

            height: 100vh;
            position:relative;
            box-sizing: border-box;

            .image-wrapper{
                position: relative;
                height: 70vh;
                box-sizing: border-box;
                // background-color: red;
                width: 50vw;

                .image{
                    box-sizing: border-box;
                    width:85%;
                    height:100%;
                    position: absolute;
                    right: 0px;
                    bottom: 0;
                    background-image:
                        linear-gradient(90deg, #dedcdc 30%, rgba(205, 189, 189, 0) 100%),
                        url('$lib/images/profile.png');
                    background-size:  150px, cover;
                    background-position:10px 0px;
                    background-repeat: no-repeat;


                    // width:50vw;
                    // height: 100vh;
                    // width: 15rem;
                    // height: 15rem;
                    // border-radius: 50%;
                    // background-image: url('$lib/images/profile.png');
                    // background-repeat: no-repeat;
                    // background-position:100% 20%;
                    // background-size: cover;
                }
            }
        }
    }
</style>
