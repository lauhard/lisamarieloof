<script>
	import checkmark from '$lib/svg/checkmark.svg';
	import mail from '$lib/svg/mail-solid.svg';
	import tel from '$lib/svg/telephone.svg';
    import Headline from "$lib/components/Headline.svelte";
    // import Image from "$lib/components/Image.svelte";
    // import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/svgs/ArrowDownSvg.svelte";
    import LogoSvg from "$lib/components/svgs/LogoSvg.svelte";
    import AlertSvg from "$lib/components/svgs/AlertSvg.svelte";
    import hypose from "$lib/images/wendeltreppe-min.webp";
    import praxis1 from "$lib/images/praxis1.jpg";
    import praxis2 from "$lib/images/praxis2.jpg";
    // import { ObserveProps, observer } from "$lib/actions/observer";
    import profileImage from "$lib/images/lisa-min.webp";

    import Profile from "$lib/components/Profile.svelte";
    import Information from "$lib/components/Information.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Faq from "$lib/components/FAQ.svelte";
    // import { openMaps, scrollToAnchor } from "$lib/utils";
    // $: vars = `--background-image: url(${profile});`;
    $: loading = false;
    onMount(() => {
        loading = true;
    });
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
    <link rel="preload" as="image" href={profileImage} />
    <link rel="preload" as="image" href={hypose} />
</svelte:head>

<!-- content here -->
<!-- #d7c88e2e -->
<section class="section section-one">
    <div class="background-svg-banner">
        <div class="svg-wrapper">
            <LogoSvg
                className="background-svg"
                height="1000px"
                animation={false}
                --leaves-main="#f0f0f01a"
                --leaves-overlay="#f0f0f01a"
                --tree-color="#f0f0f01a"
                --tree-overlay="#f0f0f01a"
                --svg-stroke-width="0px"
            />
        </div>
    </div>
    <div class="content-wrapper">
        <div class="left-side">
            <div class="headline-wrapper">
                <Headline />
            </div>
            <div class="information-wrapper">
                <!-- <h1>Lisa Marie Loof</h1> -->
                <Information />
            </div>
        </div>

        <div class="right-side">
            <div class="profile-image-wrapper">
                <img src={profileImage} alt="" srcset="" />
            </div>
        </div>
        <!-- <Headline /> -->

        <!-- <div class="profile-image-wrapper">
                <img src={profileImage} alt="" srcset="" />
            </div> -->
        <!-- <span style="visibility:hidden;" id="home_section_one" /> -->
        <!-- <div class="content grid main-grid"> -->
        <!-- <div class="grid-cell heading">
                <div class="heading-card">
                    <Headline className="heading-desktop" />
                </div>
            </div>
            <div class="grid-cell profile">
                <div class="profile-card">
                    <Profile {profileImage} className="profile-card" />
                </div>
            </div>
            <div class="grid-cell information">
                <div class="information-card">
                    <Information />
                </div>
            </div>
            <div class="grid-cell contact">
                <div class="contact-card">
                    <Contact className="contact-card" />
                </div>
            </div> -->

        <!-- </div> -->

        <RoundButton
            classNames="hover scroll-down"
            title="scroll to the next headline"
        >
            <a
                href="/#was-ist-hypnose"
                aria-label="links to section 2"
                style="padding:0 10px;"
            >
                <ArrowDownSvg width="20px" height="30px" />
            </a>
        </RoundButton>
    </div>
</section>

<section class="section section-two">
    <span style="visibility:hidden;" id="was-ist-hypnose" />

    <div class="content-wrapper">
        <div class="greeter">
            <h1 class="welcome">Herzlich Willkommen</h1>

            <div class="welcome-text">
                <p class="intro">Während Ihrer Zeit für Hypnose und Weiterentwicklung soll Ihnen in gemeinsamer Zusammenarbeit folgendes ermöglicht werden:</p>
                <br>
                <div class="line">
                    <img alt="self-Logo" src="{checkmark}" width="30px" height="auto">
                    <p> Ihre ganz eigenen Erfahrungen mit Hypnose zu machen und diese zu erleben.
                    </p>
                </div>
                <div class="line">
                    <img alt="self-Logo" src="{checkmark}" width="30px" height="auto"> 
                    <p>Ihren Themen, den entstehenden Gefühlen und Gedanken wird der Raum und die
                        Zeit gegeben zu wirken.</p>
                </div>
                <div class="line">
                    <img alt="self-Logo" src="{checkmark}" width="30px" height="auto"> 
                    <p> Ihre eigenen Ressourcen und Selbstheilungskräfte zu mobilisieren, um
                        an Ihren Themen zu arbeiten.</p>
                </div>
                <div class="line">
                    <img alt="self-Logo" src="{checkmark}" width="30px" height="auto"> 
                    <p>  Unser gemeinsamer Fokus wird auf dem
                        lösungs- und ressourcenorientierten Arbeiten liegen.</p>
                </div>
            </div>
        </div>
        
        <div class="contact">
            <p>
                Sie können Termine gerne telefonisch oder über E-Mail vereinbaren
            </p>
    
            <div class="contact-buttons">
                <a class="cta" type="button" href="tel:+4369919048032">
                    <img alt="svg icon" src={tel} width="26" height="26" />
                    +43 69919048032
                </a>
    
                <a class="cta" type="button" href="/kontakt">
                    <img alt="svg icon" src={mail} width="26" height="26" />
                    Kontakformular
                </a>
            </div>
        </div>

        <div class="praxis-wrapper">
            <div class="grid praxis">
                <div class="image image-onse">
                    <img src={praxis1} alt="" srcset="" />
                </div>
                <div class="image image-two">
                    <img src={praxis2} alt="" srcset="" />
                </div>
                <div class="image map">
                    <p>
                        Meine Praxis ist in der Feldgasse 34A 9020 in der
                        Klagenfurter-Altstadt
                    </p>
                    <a
                        class="cta"
                        href="https://goo.gl/maps/JhctkWRnJmyWfm3Y8"
                        target="_blank"
                        rel="noopener noreferrer">Karte öffnen</a
                    >
                </div>
                <!-- <div class="image"></div> -->
            </div>
        </div>


        <div class="hypnose-wrapper">
            <h2 class="decorator">Was ist Hypnose</h2>
            <article class="hypnose">
                <div class="hypnose__image">
                    <img src={hypose} alt="" srcset="" />
                </div>
                <div class="hypnose__text">
                    <p>
                        Zur einfacheren Einordnung lässt sich das menschliche
                        Bewusstsein grundsätzlich in zwei Bewusstseinsstadien
                        unterteilen. Das Bewusstsein und das Unterbewusstsein.
                        Das Bewusstsein ist beispielsweise für das rationale
                        Lösen von Aufgaben zuständig oder das Treffen bewusster
                        Entscheidungen. Dieser bewusste Anteil beträgt nur ca.
                        10 % unserer gesamt möglichen Leistungen. Das bedeutet
                        im Umkehrschluss, wir Menschen besitzen viel mehr
                        Potenzial, welches ungenutzt bleibt und sich im
                        Untergrund auf unser Bewusstsein auswirkt, ohne, dass
                        wir es bemerken.
                    </p>
                    <br />
                    <p>
                        In der Hypnose arbeiten wir mit dem Unterbewusstsein,
                        während der kritische Faktor des Bewusstseins in den
                        Hintergrund gerät. Dadurch gelangen wir an Inhalte, die
                        uns im Wachzustand nicht zur Verfügung stehen, wir
                        können sie abrufen und mit ihnen arbeiten. Der Fokus
                        wendet sich nach innen, man erlangt Zugang zu seinen
                        Gedanken und Gefühlen. Das ermöglicht es tiefgreifende
                        Veränderungsprozesse auszulösen, welche intrinsische und
                        nachhaltige Auswirkungen auf uns haben. Es sollen innere
                        Selbstheilungskräfte und unbewusste Ressourcen gestärkt
                        werden.
                    </p>
                    <br />
                    <p>
                        Darüber hinaus ist uns Menschen der Hypnotische Zustand
                        nicht fremd, wir erleben ihn täglich, wenn wir
                        beispielsweise ein gutes Buch lesen oder einen Film
                        schauen und vollständig in diese Welten eintauchen und
                        alles um uns herum ausblenden. Ebenso befinden wir uns
                        kurz vor dem Einschlafen oder direkt nach dem Aufwachen
                        in einem Zustand, der der Hypnose ähnelt.
                    </p>
                </div>
            </article>
        </div>
    </div>
</section>

<section class="section section-three">
    <div class="content-wrapper">
        <h1 class="decorator" id="haeufig-gestellte-fragen">
            Häufig gestellte Fragen
        </h1>
        <Faq />
    </div>
</section>

<style lang="scss">
    :root {
        // --bg-grid: #37cf2ce2;
        // --bg-content-wrapper: #c3ff80;
        // --bg-heading: red;
        // --bg-profile: green;
        // --bg-information: blue;
        // --bg-contact: orange;
        // --bg-section-one: gray;
        // --bg-section-two: red;

        // --grid-columns: 20% 25% 10% 20% auto;
        // --grid-rows-desktop: 10% 10% 10% auto;
        // --grid-rows-mobile: 210px 240px 380px auto; //230px
        // --grid-template-desktop: "heading heading heading profile profile"
        //     "heading heading heading profile profile"
        //     "heading heading heading profile profile"
        //     "information information information profile profile"
        //     "information information information contact contact"
        //     "information information information contact contact"
        //     "information information information contact contact";

        // --grid-template-mobile: "profile profile profile profile profile"
        //     "heading heading heading heading heading"
        //     "information information information information information"
        //     "contact contact contact contact contact";

        // --grid-gap: 10px;
    }

    :global(.scroll-down) {
        bottom: 35px;
        min-width: 50px;
        width: 50px;
        min-height: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid white;
        left: calc(50% - 22.5px);
        background: var(--secondary);
        &:hover {
            background: var(--secondary-hover) !important;
        }
    }

    .background-svg-banner {
        overflow: hidden;
        width: 100%;
        height: 65%;
        background-color: var(--primary);
        position: absolute;
        transform: translatY(10%) !important;
        bottom: 10% !important;
        overflow: hidden;

        .svg-wrapper {
            position: absolute;
            top: 30px;
            left: 100px;
            height: 100%;
            width: 100%;
            width: auto;
        }
    }

    .section {
        position: relative;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .content-wrapper {
        box-sizing: border-box;
        display: flex;
        position: relative;
        flex-direction: column;
        background: var(--bg-content-wrapper, transparent);
        min-height: 100vh;
        height: 100%;
        width: 100%;
        max-width: var(--content-width, 1240px);
        overflow: hidden;
    }

    .section-one {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-section-one);
        height: 100%;

        overflow: hidden;
        // min-height: 1000px;
        .content-wrapper {
            display: flex;
            flex-direction: row;
            position: relative;
            height: 100%;
            overflow: visible;
            min-height: 100vh;
            .left-side {
                min-width: 50%;
                width: 50%;
                display: flex;
                flex-direction: column;
                .headline-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    height: 50%;
                    width: 100%;
                    :global(.heading) {
                        position: absolute;
                        top: 55%;
                        transform: translateY(-55%);
                    }
                }
                .information-wrapper {
                    height: 50%;
                    position: relative;
                    display: flex;
                    height: auto;
                    :global(.information) {
                        position: absolute;
                        bottom: 50%;
                        transform: translateY(50%);
                    }
                }
            }

            .right-side {
                position: relative;
                min-height: 100vh;
                height: 100%;
                height: 100vh;
                width: 50%;
                overflow: visible;
                .profile-image-wrapper {
                    position: absolute;
                    bottom: 10%;
                    right: -3rem;
                    width: 100%;
                    height: 80%;
                    overflow: hidden;
                    img {
                        width: auto;
                        height: 100%;
                        min-height: 650px;
                        object-fit: cover;
                        object-position: 0px center;
                        // overflow: hidden;
                    }
                }
                position: relative;
            }
        }
    }

    // .grid {
    //     box-sizing: border-box;
    //     display: grid;
    //     gap: var(--grid-gap, 10px);
    //     background: var(--bg-grid, transparent);
    //     padding-top: 85px;
    //     // margin-top: 80px;
    //     width: 100%;
    //     height: 100%;
    //     min-height: 100vh;
    // }

    // .main-grid {
    //     grid-template-columns: var(--grid-columns);
    //     grid-template-rows: var(--grid-rows-desktop, auto);
    //     grid-template-areas: var(--grid-template-desktop);
    // }

    // .grid-cell {
    //     position: relative;
    //     box-sizing: border-box;
    //     background: white;
    //     display: grid;
    //     height: 100%;
    //     width: 100%;
    //     margin: 0;
    //     padding: 0;
    // }

    // .heading {
    //     grid-area: heading;
    //     background-color: var(--bg-heading);
    // }

    // .profile {
    //     grid-area: profile;
    //     background-color: var(--bg-profile);
    // }

    // .information {
    //     grid-area: information;
    //     background-color: var(--bg-information);
    // }

    // .contact {
    //     grid-area: contact;
    //     background-color: var(--bg-contact);
    // }

    // .heading-card {
    //     display: flex;
    //     justify-content: start;
    //     align-items: center;
    // }

    // .profile-card {
    //     display: flex;
    //     align-items: center;
    //     justify-content: end;
    //     :global(.profile-card) {
    //         max-width: 450px;
    //         margin-bottom: 30px;
    //     }
    // }

    // .information-card {
    //     display: flex;
    //     justify-content: left;
    //     align-items: start;
    //     margin-top: 3rem;
    //     // margin-left: 70px;
    // }

    // .contact-card {
    //     display: flex;
    //     justify-content: end;
    //     align-items: start;
    //     :global(.contact-card) {
    //         max-width: 450px;
    //         // min-height: 360px;
    //     }
    //     margin-bottom: 30px;
    //     // min-height: 320px;
    // }
    .cta {
        input[type="text"],
        input[type="button"] {
            -webkit-appearance: none;
            -webkit-border-radius: 0;
            border-style: none;
        }
        background-color: var(--secondary);
        font-family: var(--font-family, "Segoe UI");
        box-sizing: border-box;

        width: 250px;
        height: auto;
        padding: 13px 20px;

        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: var(--text);
        /* identical to box height */
        text-align: center;
        margin-bottom: 10px;
    }

    .section-two {
        --header-margin: 10px 0;
        --header-margin-mobile: 20px 0;
        --section-height: 100%;
        --section-min-height: 100%;
        --content-wrapper-height: 100%;
        --content-wrapper-min-height: 100%;

        background-color: var(--bg-section-two);
        height: var(--section-height);
        min-height: var(--section-height);
        // background-color: #a81e1e;

        .decorator {
            margin: var(--header-margin);
            text-align: center;
        }

        // background-color: blue;
        .content-wrapper {
            height: var(--content-wrapper-height);
            min-height: var(--content-wrapper-min-height);
            justify-content: center;
            max-width: 100%;

            .greeter {
                margin: 0 auto;
                max-width: var(--content-width);
                width: 100%;
                height: 450px;

                .welcome {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 10px;
                    color:var(--text);
                }
                .line{
                    display: flex;
                    flex-direction: row;
                    p{
                        line-height: 1.9rem;
                        font-weight: 300;
                        font-family: var(--font-family,"Segoe UI");
                        color:var(--text);
                        font-size: 1rem;
                    }
                    img{
                        padding: 10px 10px;
                        height: 100%;
                        width: 50px;
                    }
                }
                .intro{
                    line-height: 1.9rem;
                    font-weight: 400;
                    font-family: var(--font-family,"Segoe UI");
                    color:var(--text);
                    font-size: 1.1rem;
                    text-align: center;
                    // text-align: center;
                }

            }

            .contact {
                background-color: var(--primary);
                max-width: var(--content-width);
                flex-direction: column;
                width: 50%;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                // padding: 50px 0;
                height: 300px;
                margin-top: 50px;
                margin-bottom: 45px;
                p{
                    margin-bottom: 30px;
                    font-size: 1rem;
                    font-weight: 500;
                    font-family: var(--font-family,"Segoe UI");
                    color: #fff;
                    
                }
                .contact-buttons{
                    display: flex;
                    flex-direction: column;
                }
            }

            .grid {
                // padding: 100px;
                max-width: var(--content-width);
                // width: 100%;
                height: auto;
                // grid-template-columns: repeat(2, minmax(50px, 1fr)) ;
                grid-auto-rows: minmax(100px, 375px);
                gap: 40px;
                
            }
            .praxis {
                width: var(--content-width);
                margin: 0 auto;
                .image {
                    background-color: var(--primary);
                    min-height: 350px;
                    &:nth-of-type(2){
                        z-index: 500;
                    }
                }
                .map {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    width: 50%;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    padding: 20px;
                    justify-content: center;
                    height: 100%;
                    z-index: 1;
                    
                    align-items: center;
                    p {
                        text-align: center;
                        margin-bottom: 30px;
                        color: #fff;
                        font-family: var(--font-family, "Segoe UI");
                        font-size: 1rem;
                        font-weight: 300;
                    }
                    a {
                        padding: 20px;
                        text-transform: uppercase;
                    }
                }
            }

            .hypnose-wrapper {
                margin-top: 5rem;
                padding: 0;
                max-width: 100%;
                width: 100%;
                background-color: var(--primary-hover);
               display: flex;
               flex-direction: column;
               align-items: center;
               .decorator{
                color: #fff;
                // margin-top: 50px;
               }
               .decorator::before{
                    border-color:var(--secondary) !important;
               }

                .hypnose {
                    width: var(--content-width);
                    // background-color: var(--primary-hover);
                    background-color: transparent;
                    box-shadow: none;
                    padding: 0;
                    border-radius: 0px;
                    .hypnose__image {
                        max-width: 350px;
                        max-height: 350px;
                        margin-right: 30px;
                        margin-bottom: 10px;
                        float: left;
                        overflow: hidden;
                        border: solid 1px #fff;
                        box-sizing: border-box;
                        padding: 10px;
                        img {
                            overflow: hidden;
                            transition: all 0.3s ease-in-out;
                            object-fit: cover;
                            height: 100%;
                            width: 100%;
                            &:hover {
                                transform: scale(1.2);
                                transition: all 0.3s ease-in-out;
                            }
                        }
                    }
                    .hypnose__text {
                        width: 100%;
                        // margin-bottom: .5rem;

                        p {
                            text-align: justify;
                            font-size: .9rem;
                            // font-size: 16px;
                            font-weight: 300;
                            font-family: var(--font-family, "Segoe UI");
                            color: var(--text);
                            
                            // color:#fff;

                        }
                        // .text:hover {
                        //     background: var(--primary-hover);
                        //     padding: 15px;
                        //     transition: all 0.3s ease-in-out;
                        //     padding: 30px;
                        // }
                    }
                }
            }
        }
    }

    .section-three {
        --header-margin: 5rem 0 2rem 0;
        --content-wrapper-height: auto;
        --content-wrapper-min-height: auto;
        --section-height: 100%;
        --section-min-height: 100%;

        height: var(--section-height);
        min-height: var(--section-height);
        .decorator {
            margin: var(--header-margin);
            text-align: center;
        }
        .content-wrapper {
            height: var(--content-wrapper-height);
            min-height: var(--content-wrapper-min-height);
            justify-content: center;
        }
    }

    // @media screen and (min-width: 319px) and (max-width: 1093px) {
    //     .background-svg-banner {
    //         overflow: hidden;
    //         width: 100%;
    //         height: 800px;
    //         background-color: var(--primary);
    //         position: absolute;
    //         transform: translatY(16.5%) !important;
    //         top: 16.5% !important;
    //         :global(.background-svg) {
    //             height: 1200px;
    //         }
    //     }
    //     :global(.scroll-down) {
    //         display: none !important;
    //     }
    //     .content-wrapper {
    //         height: 100%;
    //     }
    //     .section-one {
    //         min-height: 100vh;
    //         height: 100%;
    //     }
    //     .grid {
    //         height: 100%;
    //         // margin-bottom: 20px;
    //     }
    //     .main-grid {
    //         grid-template-rows: var(--grid-rows-mobile, auto);
    //         grid-template-areas: var(--grid-template-mobile, auto);
    //     }
    //     .profile-card {
    //         :global(.profile-card) {
    //             max-width: 100%;
    //         }
    //     }
    //     .heading-card {
    //         justify-content: center;
    //         align-items: center;
    //         margin: 0px;
    //         padding: 0px;
    //     }
    //     .information-card {
    //         margin: 0;
    //         padding: 10px 0;
    //         justify-content: center;
    //         align-items: center;
    //         .catchphrases {
    //             align-items: center;
    //             .catchphrase {
    //                 text-align: center;
    //             }
    //         }
    //     }
    //     .contact-card {
    //         justify-self: center;
    //     }

    //     /**
    //     Section 2
    // */

    //     .section-two {
    //         .decorator {
    //             margin: var(--header-margin-mobile);
    //         }
    //         .content-wrapper {
    //             padding: 0 10px;

    //             .hypnose {
    //                 display: flex;
    //                 flex-direction: column;
    //                 align-items: center;
    //                 .hypnose__image {
    //                     margin: 0;
    //                     margin-bottom: 10px;
    //                     padding: 0;
    //                     max-width: 100%;
    //                     border: none;
    //                     img {
    //                         &:hover {
    //                             transform: scale(1);
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // @media screen and (min-width: 1094px) {
    //     // .section::after {
    //     //     font-size: 13px;
    //     //     font-family: "Arial";
    //     //     content: "device: i dont care...";
    //     // }
    //     .section-one {
    //         // height: 100vh;
    //     }
    //     .main-grid {
    //         grid-template-areas: var(--grid-template-desktop, auto);
    //         grid-template-rows: var(--grid-rows-desktop, auto);
    //     }
    // }
</style>
