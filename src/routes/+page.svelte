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
    import tel from "$lib/svg/telephone.svg";
    import mail from "$lib/svg/mail-solid.svg";
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

<section class="section section-one">

    <div class="content-wrapper ">
        <span style="visibility:hidden;" id="section_one"></span>

        <div class="content grid main-grid">
            <div class="grid-cell heading">
                <div class="heading-card">
                    <Heading className="heading-desktop"></Heading>
                </div>
            </div>
            <div class="grid-cell profile">
                <div class="profile-card">
                    <div class="profile-img">
                        <img src="{profile}" alt="profile-image">
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
            <div class="grid-cell information">
                <div class="information-card">
                    <div class="catchphrases">
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
                        class="cta"
                        type="button"
                        href="/leistungen">HIER ERFAHREN SIE MEHR</a
                    >
                </div>
            </div>
            <div class="grid-cell contact">
                <div class="contact-card">
                    <header class="card-header">
                        <h5>Terminvereinbarung</h5>
                    </header>
                    <p>Sie können Termine gerne telefonisch oder über E-Mail vereinbaren.</p>
                    
                    <div class="contact-buttons">
                        
                        <a
                            class="cta"
                            type="button"
                            href="tel:+4369919048032">
                            <img  alt="svg icon" src="{tel}" width="30" height="30" />
                             +43 69919048032
                        </a>
                        
                        <a
                            class="cta"
                            type="button"
                            href="/kontakt">
                            <img  alt="svg icon" src="{mail}" width="30" height="30" />
                            Kontakformular
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

</section>

<section class="section section-two">
    <h1 class="decoeator" id="home_section2">Section2</h1>
</section>

<section class="section section-three">
    <h1 class="decoeator" id="home_section3">Section3</h1>
</section>

<style lang="scss">
    :root{
        // --bg-grid:#37cf2ce2;
        // --bg-content-wrapper: #c3ff80;
        // --bg-heading: red;
        // --bg-profile: green;
        // --bg-information: blue;
        // --bg-contact: orange;

        --grid-columns: 20% 20% 20% 20% auto;
        --grid-rows-desktop:15% 10% 10% auto;
        --grid-rows-mobile: 23% 15% 37%;
        --grid-template-desktop: 
            "heading heading heading profile profile"
            "heading heading heading profile profile"
            "heading heading heading profile profile"
            "information information information profile profile"
            "information information information contact contact"
            "information information information contact contact";

        --grid-template-mobile: 
            "profile profile profile profile profile"
            "heading heading heading heading heading"
            "information information information information information"
            "contact contact contact contact contact";

        --grid-gap: 10px;

    }
    :global(.scroll-down) {
        bottom: 50px;
        position: absolute;
        border: 1px solid white;
        left: calc(50% - 22.5px) !important;
    }

    h5{
        font-family: var(--font-family,"Segoe UI");
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        /* identical to box height */

        letter-spacing: 0.05rem;

        color: #FFFFFF;
    }
    .cta {
        background-color: var(--secondary);
        font-family: var(--font-family,"Segoe UI");
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

    .section {
        position: relative;
        min-height: 100vh;
        // height: 100%; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        height: auto;
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }
    .grid{
        box-sizing: border-box;
        display: grid;
        gap:var(--grid-gap, 10px);
        background: var(--bg-grid, transparent);
        margin-top: 80px;
        width: 100%;
        min-height: 100vh; /**"""""!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"*/
        height: 100%;
    }
    .main-grid {
        grid-template-columns:var(--grid-columns);
        grid-template-rows: var(--grid-rows-desktop, auto);
        grid-template-areas: var(--grid-template-desktop);
    }
    .grid-cell {
        position: relative;
        box-sizing: border-box;
        background: white;
        display: grid;
        height: 100%;
        width: 100%;
    }
    .heading{
        grid-area: heading;
        background-color: var(--bg-heading);
       
    }
    .profile{
        grid-area: profile;
        background-color: var(--bg-profile);
    }
    .information{
        grid-area: information;
        background-color: var(--bg-information);
    }
    .contact{
        grid-area: contact;
        background-color: var(--bg-contact);
    }
    .section-one{
        display: flex;
        align-items: center;
        justify-content: center;
        // min-height: 100vh;
        // height: 100%;
        .content-wrapper{
            box-sizing: border-box;
            display: flex;
            position: relative;
            flex-direction: column;
            background: var(--bg-content-wrapper, transparent);
            min-height: 100vh;

            height: 100%;
            // height: 100vh; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            width: 100%;
            max-width: var(--content-width,1240px);
        }
    }

    .heading-card {
        position: absolute;
        justify-self: left;
        align-self: start;
        margin-left:70px;
        :global(.heading-desktop) {
            align-self: center;
            position: relative !important;
            background-color: #fff;
        }
    }

    .profile-card{
        position: absolute;
        justify-self: right;
        align-self: start;
        max-width: 400px;
        max-height: 500px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        padding: 15px;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);

        .profile-img{
            width: 200px;
            height: 240px;
            overflow: hidden;
            // justify-self: center;
            img {
                height: 440px;
                object-fit: cover;
                object-position: -80px -15px;
            }
        }
        .profile-description{
                width: 100%;
                height: 200px;
                font-family: var(--font-family, "Segoe UI");
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

    .information-card{
        position: absolute;
        justify-self: left;
        align-self: start;
        background: #fff;
        max-width: 610px;
        width: 100%;
        min-height: 260px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 0 1.2rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-left:70px;
        .catchphrases{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            font-family: var(--font-family, "Segoe UI");
            // height: 150px;
            gap:10px;
            span{
                font-weight: 700;
                color:#378D93;
            }
            .catchphrase{
                font-weight: 300;
                font-size: 16px;
                // letter-spacing: .06rem;
            }
        }
        
    }

    .contact-card {
        position: absolute;
        justify-self: right;
        align-self: start;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fff;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        .card-header {
            height: 40px;
            width: 100%;
            background: #5D5D5D;
            display: flex;
            align-items: center;
            padding-left:15px;
            h5{
                color:white;
            }
        }
        p {
            font-weight: 300;
            font-size: 14px;
            font-family: var(--font-family, "Segoe UI");
            padding: 10px 15px 40px 15px;
        }
        .contact-buttons {
            .cta{
                font-size: 14px;
                padding: 10px 15px;
                width: auto;
            }
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px;
        }
    }


    // @media screen and (max-width:374px) {   
    //     .section::after {
    //         font-size: 13px;
    //         font-family: 'Arial';
    //         content: "device: too small";
    //     }
    //     .main-grid{
    //         grid-template-rows: var(--grid-rows-mobile, auto);
    //         grid-template-areas: var(--grid-template-mobile, auto);
    //         background: var(--primary);
    //     }
       
    //     .profile-card {
    //         box-shadow: none !important;
    //         .profile-description{
    //             display: none !important;
    //         }
    //     }
    // }
    // @media screen and (min-width:375px) and (max-width:390px) {   
    //     .section::after {
    //         font-size: 13px;
    //         font-family: 'Arial';
    //         content: "device: i-phone SE 375 x 667";
    //     }
    //     .main-grid{
    //         grid-template-rows: var(--grid-rows-mobile, auto);
    //         grid-template-areas: var(--grid-template-mobile, auto);
    //         background: var(--primary);
    //     }
    //     .profile-card {
    //         box-shadow: none !important;
    //         top:50px;
    //         .profile-img{
    //             border-radius: 50%;
    //             height:200px;
    //             width:200px;
    //             background-color: var(--primary);
    //             img {
    //                 height: 350px;
    //                 object-fit: cover;
    //                 object-position: -50px -15px;
    //             }
    //         }
    //         .profile-description{
    //             display: none !important;
    //         }
    //     }
    // }
    // @media screen and (min-width:390px) and (max-width:393px) {   
    //     .section::after {
    //         font-size: 13px;
    //         font-family: 'Arial';
    //         content: "device: i-phone 12 pro 390 x 844";
    //     }
    //     .main-grid{
    //         grid-template-rows: var(--grid-rows-mobile, auto);
    //         grid-template-areas: var(--grid-template-mobile, auto);
    //         background: var(--primary);
    //     }
    //     .profile-card {
    //         box-shadow: none !important;
    //         top:50px;
    //         .profile-img{
    //             border-radius: 50%;
    //             height:200px;
    //             width:200px;
    //             background-color: var(--primary);
    //             img {
    //                 height: 350px;
    //                 object-fit: cover;
    //                 object-position: -50px -15px;
    //             }
    //         }
    //         .profile-description{
    //             display: none !important;
    //         }
    //     }
    // }
    @media screen and (min-width:375px) and (max-width:1093px) {   
        .section::after {
            font-size: 13px;
            font-family: 'Arial';
            content: "device: pixel 5 393 x 851";
        }
        .section-one {
            height: 1000px;
        }
        .main-grid{
            grid-template-rows: var(--grid-rows-mobile, auto);
            grid-template-areas: var(--grid-template-mobile, auto);
            background: var(--primary);
        }
        .profile-card {
            box-shadow: none;
            // top:50px;
            background: transparent;
            justify-self: center;
            .profile-img{
                border-radius: 50%;
                height:200px;
                width:200px;
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

        .heading-card{
            top:-40px;
            margin-left: 0;
            justify-self: center;
        }

        .information-card{
            margin-left: 0;
            padding: 10px 0;
            height: 320px;
            justify-self: center;
            .catchphrases{
                align-items: center;
                .catchphrase{
                    text-align: center;
                }
            }
        }
        .contact-card{
            justify-self: center;
        }
    }

    @media screen and (min-width:1094px) {   
        .section::after {
            font-size: 13px;
            font-family: 'Arial';
            content: "device: i dont care...";
        }
        .section-one {
            height: 100vh;
        }
        .main-grid{
            grid-template-areas: var(--grid-template-desktop, auto);
            grid-template-rows: var(--grid-rows-desktop, auto);
        }
        
        
    }

</style>
