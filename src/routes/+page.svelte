<script>
    import Heading from "$lib/components/Heading.svelte";
    // import Image from "$lib/components/Image.svelte";
    // import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/ArrowDownSvg.svelte";
    import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import { ObserveProps, observer } from "$lib/actions/observer";
    import profile from "$lib/images/profile2.png";
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

    <div class="content-wrapper ">





        <div class="grid">
            <div class="box heading">
                <div class="heading-wrapper">
                    <Heading></Heading>
                </div>
            </div>
            <div class="box profile">
                <div class="profile-wrapper">
                    <div class="profile-img">
                        <img src="{profile}" alt="">
                    </div>
                    <div class="profile-description">
                        <h2 class="profile-name">Lisa-Marie Loof B.Sc</h2>
                        <p class="greeter">Herzlich Willkommen</p>
                        <p class="description">
                            Mein Name ist Lisa-Marie Loof und ich freue mich Sie
                            auf meiner Homepage begrüßen zu dürfen.
                        </p>
                    </div>
                </div>
            </div>
            <div class="box info">
                <div class="info-wrapper">
                    <div class="catchphrase-wrapper">
                        <p class="catchphrase">
                            Sie wollen aufhören zu <span class="attention"
                                >rauchen</span
                            >?
                        </p>
                        <p class="catchphrase">
                            Sie kämpfen mit <span class="attention"
                                >Lampenfieber</span
                            >
                            oder
                            <span class="attention">Prüfungssituationen</span>?
                        </p>
                        <p class="catchphrase">
                            Sie verbringen zuviel Zeit am <span
                                class="attention">Smartphone</span
                            >
                            oder <span class="attention">Computer</span>?
                        </p>
                        <p class="catchphrase">
                            Sie können sich nicht <span class="attention"
                                >nicht entspannen</span
                            >
                            oder haben
                            <span class="attention">Schlafprobleme</span>?
                        </p>
                    </div>
                    <a
                        class="btn cta-leistungen"
                        type="button"
                        href="/leistungen">HIER ERFAHREN SIE MEHR</a
                    >
                </div>
            </div>
            <div class="box contact"><h2>termin buchen</h2></div>
        </div>









        <!-- <a style="color:white;" href="{encodeURI('https://wa.me/+4369919048032?text=This is WhatsApp sharing example using link')}" data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">whatsapp test</a>
      <a style="color:white;" href="tel:+4369919048032" data-action="call Lisa Marie Loof" target="_blank" rel="noopener noreferrer">Anrufen</a> -->
        <!-- <button on:click="{()=>window.open('https://wa.me/+4369919048032?text=This is WhatsApp sharing example using link')}" data-action="share/whatsapp/share">whatsapp test</button> -->

        <RoundButton
            classNames="hover scroll-down"
            title="scroll to the next headline"
        >
            <a
                href="/#home_section2"
                aria-label="links to section 2"
                style="padding:0 10px;"
            >
                <ArrowDownSvg width="20px" height="30px" />
            </a>
        </RoundButton>
    </div>

    <div class="background-svg-banner">
        <div class="svg-wrapper">
            <LogoSvg
                height="800px"
                animation={false}
                --leaves-main="#f0f0f01a"
                --leaves-overlay="#f0f0f01a"
                --tree-color="#f0f0f01a"
                --tree-overlay="#f0f0f01a"
                --svg-stroke-width="0px"
            />
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
        left: calc(50% - 22.5px) !important;
    }

    section {
        position: relative;
        height: 100%;
        min-height: 100vh;
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        // background-color: red;
        // max-width: var(--content-width);
    }



    .section1 {
        width: 100%;
        height: 100%;
        .content-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // background-color: red;
            width: 100%;
            max-width: var(--content-width);
            height: 100vh;
            z-index: 1;
            overflow: hidden;
            // margin-top: 80px;
        }

        .background-svg-banner {
            overflow: hidden;
            width: 100%;
            height: 550px;
            background-color: var(--primary);
            position: absolute;
            transform: translatY(32%);
            top: 32%;
            z-index: 0;
            .svg-wrapper {
                position: absolute;
                top: 250px;
                left: -250px;
                height: 100% !important;
                width: auto;
            }
        }
    }

    .grid{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: grid;
        width:100%;
        height: 100%;

        // min-height: 600px;
        margin-top: 80px;
        // background-color:rgb(178, 187, 0);
        // gap: 10px;
        /* grid-template-columns: 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); 
        grid-template-rows: 200px 1fr 1fr auto;
    }

    .box{
        margin: 0;
        padding: 0;
        width:100%;
        // background-color: #e35f5f;
    }

    .heading {
        /* grid-column: 1; */
        display: flex;
        align-items:  end;
        width: 100%;
        .heading-wrapper {
            position: relative;
            width: 100%;
            // background-color: rgb(101, 178, 223);
            display: grid;
            // align-self: center;
            // justify-self: center;
            :global(.heading) {
                align-self: center;
                // justify-self: center;
                position: relative !important;
                background-color: #fff;
                width: 385px;
                // height: 180px;
                margin-left: 70px;
            }
        }
    }
  

    .profile {
        display: flex;
        // background-color: #e35f5f;
        justify-content: end;
        // justify-self: center;
        // align-self: center;
        grid-row-start:1;
        grid-row-end:3;
        grid-column: 2;
        height: 500px;

        .profile-wrapper {
            width: 400px;
            height:450px;
            margin-top: 25px;
            margin-right: 70px;

            padding: 0 15px;
            box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
            // background-color: rgb(101, 178, 223);
            background-color: #fff;
            display: grid;
            // flex-direction: column;
            // justify-content: center;
            // vertical-align: center;
            /* justify-content: center;
            vertical-align: center;
            flex-direction: column; */
            /* justify-self: center;
            align-self: center; */
            .profile-img{
                width: 200px;
                height: 250px;
                overflow: hidden;
                justify-self: center;
                img {
                    height: 440px;
                    object-fit: cover;
                    object-position: -80px -10px;
                }
            }
            .profile-description{
                width: 100%;
                height: 200px;
                font-family: "Segoe UI";
                // background-color: green;
                .profile-name {
                    color: var(--text);
                    font-size: 20px;
                    letter-spacing: 1.5px;
                    // font-family: 'Segoe UI';
                    font-weight: 400;
                    text-align: center;
                }
                .greeter {
                    text-align: center;
                    margin-top: 20px;
                    font-weight: 300;
                    font-size: 15px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }
                .description {
                    width: 100%;
                    font-weight: 300;
                    font-size: 14px;
                    text-align: justify;
                    letter-spacing: .5px;
                }
                
                /* align-self: center; */
            }
        }
        
    }
 
    .info{
        grid-column-start: 1;
        // background-color: #e35f5f;
        grid-row-start:2;
        grid-row-end:4;
        height: 550px;
        align-self: center;
        justify-self: center;
        display: grid;
        .info-wrapper{
            // align-self: center;
            justify-self: center;
            background: #fff;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            // justify-self: center;
            // align-self: center;
            padding: 10px 0 15px 0;
            width:100%;
            max-width: 560px;
            height: 280px;
            .catchphrase-wrapper {
                // display: grid;
                // background: yellow;

                display: flex;
                flex-direction: column;
                justify-content: space-around;
                // align-items: center;
                // align-items: flex-start;
                // padding: 0 0 0 27px;
                height: 180px;

                .catchphrase {
                    font-family: "Segoe UI";
                    font-style: normal;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 19px;
                    /* identical to box height */

                    letter-spacing: 0.05em;

                    color: #222222;
                }
            }

            .btn{
                outline: none;
                border-style: none;
            }
            .cta-leistungen{
                background-color: var(--secondary);
                font-family: 'Segoe UI';
                box-sizing: border-box;

                width: 250px;
                height: auto;
                padding: 13px 20px;

                font-style: normal;
                font-weight: 300;
                font-size: 15px;
                line-height: 18px;
                color:var(--text);
                /* identical to box height */

                text-align: center;
            }
        
        }
    
    }

    .contact{
        min-width:450px;
        grid-column: 2;
        /* grid-row:1; */
        background: yellow;
        grid-column-start: 2;
        /* grid-column:span 2; */
        grid-row:3;
    }

    @media screen and (max-width:800px) {
        .grid{
            // background:rgb(255, 0, 183);
            grid-template-columns:100%;
            grid-template-rows: 10rem 12rem auto auto;
            height: auto;
            gap:10px;
        }
        :global(.scroll-down){
                display: none !important;
            }
        .box{
            grid-column-start: auto;
            grid-column-end: auto;
            grid-row-start: auto;
            grid-row-end: auto;
            margin: 0px;
            display: flex;
            height: 100%;
        }  
        .profile {
            order: 1;
            justify-content: center;
            .profile-wrapper{
                background-color: transparent !important;
                box-shadow: none !important;
                margin-right: 0px !important;
                // margin-top: 40px !important;
                z-index: 10;
                .profile-img{
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    overflow: hidden;
                    justify-self: center;
                    background-color: var(--primary);
                    border: 8px solid #fff;
                    img {
                        height: 350px;
                        object-fit: cover;
                        object-position: -50px -15px;
                    }
                }
                .profile-description{
                    display: none;
                }
            }
        }
       
       
        .heading {
            order: 2;
            position: relative;
            height: 200px;
            width: 100%;
            // background-color: #e35f5f;
            /* align-self: center; */
            justify-self: center;
            display: grid;

        }
        .heading-wrapper{
            // position: absolute;
            // top:-30px;
            height: auto;
            // background-color: blue;
            justify-self: center;
            :global(.heading){
                align-self: center;
                justify-self: center;
                position: relative !important;
                background-color: #111875;
                width: auto !important;
                
                // height: 180px;
                margin-left: 0px  !important;
            }
             :global(.heading){
                align-self: center;
                justify-self: center;
                position: relative !important;
                // background-color: #111875;
                width: 385px;
                
                // height: 180px;
                margin-left: 0px  !important;
            }
        }
        .info {
            order:3;
            height: auto;
            display: grid;
            align-self: start;

            .info-wrapper{
                .catchphrase-wrapper {
                    // text-align: justify;
                    padding: 10px;
                    justify-content: space-between;
                    // word-wrap: break-word;
                    // word-break: break-all;
                    .catchphrase{
                        font-size: 14px;

                        padding: 7px 0;
                    }
                }
            }
        }
        .contact{
            order:4;
            height: auto;
        }
    }

    @media screen and (max-width: 480px) {
        .content-wrapper {
            width: 100%;
            height: 100%;
            min-width: 100%;
            padding: 0 10px;
            
            // background: navy !important;
        }
        :global(.scroll-down){
                display: none !important;
            }
        .background-svg-banner {
            overflow: hidden;
            width: 100%;
            height: 550px;
            background-color: var(--primary);
            position: absolute;
            transform: translatY(22%) !important;
            top: 22% !important;
           
            .svg-wrapper {
                position: absolute;
                top: 250px;
                left: -250px;
                height: 100% !important;
                width: auto;
            }
            
        }
        .grid{
            // margin-top: 180px !important;
        }
        
    }
</style>
