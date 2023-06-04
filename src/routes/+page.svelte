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

    <div class="content-wrapper">
        <!-- <div class="grid">
            <div class="cell heading-wrapper">
                <Heading />
            </div>
            <div class="cell profile-wrapper">
                <div class="profile">
                    <div class="crop-image">
                        <img src={profile} alt="profile image" srcset="" />
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
            <div class="cell cta-wrapper">
                <div class="cta">
                    
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
            <div class="cell contact-wrapper">
                <div class="contact">4</div>
            </div>
        </div> -->




        <div class="grid">
            <div class="box heading">
                <div class="heading-wrapper">
                    <!-- <h1>
                        <span>Ihre Zeit für</span>
                        <span>Hypnose und</span>
                        <span>Weiterentwicklung</span>
                    </h1> -->
                    <Heading></Heading>
                </div>
            </div>
            <div class="box profile">
                <div class="profile-wrapper">
                    <div class="profile-img">
                        <img src="{profile}" alt="">
                    </div>
                    <div class="descr">
                        <h2 class="profile-name">Lisa-Marie Loof B.Sc</h2>
                        <p class="greeter">Herzlich Willkommen</p>
                        <p class="description">
                            Mein Name ist Lisa-Marie Loof und ich freue mich Sie
                            auf meiner Homepage begrüßen zu dürfen.
                        </p>
                    </div>
                </div>
            </div>
            <div class="box cta">
                <div class="cta-wrapper">
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
                    <a
                        class="btn cta-leistungen"
                        type="button"
                        href="/leistungen">HIER ERFAHREN SIE MEHR</a
                    >
                </div>
                
            </div>
            <div class="box book"><h2>termin buchen</h2></div>
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
            background-color: red;
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
        // .grid {
    //     box-sizing: border-box;
    //     display: grid;
    //     margin-top: 0px;
    //     width: 100%;
    //     height: 100%;
    //     // background-color: red;
    //     gap: 10px;
    //     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    //     grid-template-rows: 1fr 1fr 1fr auto;
    //     .cell {
    //         // background-color: white;
    //         width: 100%;
    //         height: 100%;
    //     }
    //     .heading-wrapper {
    //         position: relative;
    //         width: 100%;
    //         // background-color: rgb(101, 178, 223);
    //         display: grid;
    //         // align-self: center;
    //         // justify-self: center;
    //         :global(.heading) {
    //             align-self: center;
    //             // justify-self: center;
    //             position: relative !important;
    //             background-color: #ffffff;
    //             // height: 180px;
    //             margin-left: 70px;
    //         }
    //     }
    //     .profile-wrapper {
    //         display: flex;
    //         justify-content: end;
    //         // justify-self: left;
    //         align-self: end;
    //         grid-row-start: 1;
    //         grid-row-end: 3;
    //         grid-column: 2;
    //         height: 500px;
    //         padding: 0 10px 10px 0;
    //         //    background-color: #e35f5f;
    //         .profile {
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             width: 450px;
    //             height: 480px;
    //             background-color: #ffffff;

    //             box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
    //             .crop-image {
    //                 width: 200px;
    //                 height: 250px;
    //                 overflow: hidden;
    //                 justify-self: center;
    //                 img {
    //                     height: 440px;
    //                     object-fit: cover;
    //                     object-position: -80px -10px;
    //                 }
    //             }
    //         }
    //         .profile-description {
    //             width: 100%;
    //             height: auto;
    //             font-family: "Segoe UI";
    //             .profile-name {
    //                 color: var(--text);
    //                 font-size: 20px;
    //                 letter-spacing: 1.5px;
    //                 // font-family: 'Segoe UI';
    //                 font-weight: 400;
    //                 text-align: center;
    //             }
    //             .greeter {
    //                 text-align: center;

    //                 font-weight: 300;
    //                 font-size: 15px;
    //                 text-transform: uppercase;
    //                 letter-spacing: 2px;
    //             }
    //             .description {
    //                 width: 100%;
    //                 font-family: 300;
    //                 font-size: 16px;
    //                 text-align: justify;
    //                 padding: 30px;
    //             }
    //         }
    //     }

    //     .cta-wrapper {
    //         /* width:650px; */
    //         grid-column-start: 1;
    //         /* grid-column:span 2; */
    //         grid-row-start: 2;
    //         grid-row-end: 4;
    //         height: 500px;
    //         display: grid;
    //         align-self: start;
    //         justify-self: center;
    //         .cta {
    //             background-color: #fff;
    //             width: 550px;
    //             height: 260px;
    //             margin-bottom: 100px;
    //             box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    //             align-self: center;
    //             justify-self: end;
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             justify-content: space-around;
    //             .catchphrase-wrapper {
    //                 display: flex;
    //                 flex-direction: column;
    //                 align-items: flex-start;
    //                 padding: 0px;
    //                 gap: 11px;
                    
    //                 .catchphrase {
    //                     font-family: "Segoe UI";
    //                     font-style: normal;
    //                     font-weight: 300;
    //                     font-size: 16px;
    //                     line-height: 19px;
    //                     /* identical to box height */

    //                     letter-spacing: 0.05em;

    //                     color: #222222;
    //                 }
    //             }

    //             .btn{
    //                 outline: none;
    //                 border-style: none;
    //             }
    //             .cta-leistungen{
    //                 background-color: var(--secondary);
    //                 font-family: 'Segoe UI';
    //                 box-sizing: border-box;

    //                 width: 250px;
    //                 padding: 13px 20px;

    //                 font-style: normal;
    //                 font-weight: 300;
    //                 font-size: 15px;
    //                 line-height: 18px;
    //                 color:var(--text);
    //                 /* identical to box height */

    //                 text-align: center;
    //             }
    //         }
    //         /* wid */
    //     }
    //     .contact-wrapper {
    //         min-width: 450px;
    //         grid-column: 2;
    //         /* grid-row:1; */
    //         background: yellow;
    //         grid-column-start: 2;
    //         /* grid-column:span 2; */
    //         grid-row: 3;
    //     }
    // }

    // @media screen and (max-width: 800px) {
    //     .grid {
    //         // background: rgb(255, 0, 183);
    //         grid-template-columns: 100%;
    //         // height: 100%;
    //         // gap: 0;
    //     }
    //     .cell {
    //         grid-column-start: auto;
    //         grid-column-end: auto;
    //         grid-row-start: auto;
    //         grid-row-end: auto;
    //         margin: 0px;
    //         display: flex;
    //         height: 100%;
    //     }
    //     .profile-wrapper {
    //         order: 2;
    //         // .profile {
    //         //     background-color: transparent !important;
    //         //     z-index: 10;
    //         // }
    //     }
        
    //     // .profile-description {
    //     //     display: none;
    //     // }
    //     .heading-wrapper {
    //         order: 1;
    //         position: relative;
    //         height: 200px;
    //         width: 100%;
    //         background-color: #e35f5f;
    //         /* align-self: center; */
    //         justify-self: center;
    //         display: grid;
    //         :global(.heading) {
    //             position: absolute;
    //             top:-30px;
    //             height: auto;
    //             background-color: blue;
    //             justify-self: center;
    //         }
    //     }
        
    //     .cta-wrapper {
    //         order: 3;
    //     }
    //     .contact-wrapper {
    //         order: 4;
    //     }
    // }

    @media screen and (max-width: 480px) {
        .content-wrapper {
            width: 100%;
            width: 100%;
            min-width: 100%;
            // padding: 0 10px;
            // background: navy !important;
        }
        :global(.heading) {
            // left:0px !important;
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
        background-color:rgb(178, 187, 0);
        // gap: 10px;
        /* grid-template-columns: 1fr 1fr; */
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr)); 
        grid-template-rows: 200px 1fr 1fr auto;
    }
    .box{
        margin: 0;
        padding: 0;
        width:100%;
        background-color: #e35f5f;
    }

    .heading {
        /* grid-column: 1; */
        display: flex;
        align-items:  end;
        width: 100%;
    }
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
            // background-color: #111875;
            width: 385px;
            // height: 180px;
            margin-left: 70px;
        }
    }
    // .heading .heading-wrapper span {
    //     display: flex;
    // }
   
    .profile {
        display: flex;
        justify-content: center;
        justify-self: center;
        align-self: center;
        grid-row-start:1;
        grid-row-end:3;
        grid-column: 2;
        height: 500px;
        
    }
    .profile .profile-wrapper {
        width: 300px;
        height:auto;
        background-color: rgb(101, 178, 223);
        display: grid;
        /* justify-content: center;
        vertical-align: center;
        flex-direction: column; */
        /* justify-self: center;
        align-self: center; */
    }
    .profile .profile-wrapper .profile-img{
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
    .profile .descr{
       
        width:100%;
        height:150px;
        background-color: #8edf80c6;
       
        /* align-self: center; */
    }

    .cta{
        /* width:650px; */
        grid-column-start: 1;
        /* grid-column:span 2; */
        grid-row-start:2;
        grid-row-end:4;
        height: 550px;
        align-self: center;
        justify-self: center;
        display: grid;

        /* wid */
    }
    .cta-wrapper{
        background: green;
        justify-self: center;
        align-self: center;
        width:100%;
        height: 200px;
    }
    .cta-wrapper button {
        width:60px;
        height: auto;
        margin: 0 auto;
    }

    .book{
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
            background:rgb(255, 0, 183);
            grid-template-columns:100%;
            height: 100%;
            gap:0;
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
            
        }
        .profile-wrapper{
            background-color: transparent !important;
            z-index: 10;

        }
        .descr{
            display: none;
        }
        .heading {
            order: 2;
            position: relative;
            height: 200px;
            width: 100%;
            background-color: #e35f5f;
            /* align-self: center; */
            justify-self: center;
            display: grid;

        }
        .heading-wrapper{
            // position: absolute;
            // top:-30px;
            height: auto;
            background-color: blue;
            justify-self: center;
        }
        .cta {
            order:3;
        }
        .book{
            order:4
        }
    }
</style>
