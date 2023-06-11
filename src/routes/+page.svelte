<script>
    import Heading from "$lib/components/Heading.svelte";
    // import Image from "$lib/components/Image.svelte";
    // import LogoSvg from "$lib/components/LogoSvg.svelte";
    // import Section from "$lib/components/Section.svelte";
    import { onDestroy, onMount, setContext } from "svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/svgs/ArrowDownSvg.svelte";
    import LogoSvg from "$lib/components/svgs/LogoSvg.svelte";
    import AlertSvg from "$lib/components/svgs/AlertSvg.svelte";
    import hypose from "$lib/images/wendeltreppe.jpg";
    // import { ObserveProps, observer } from "$lib/actions/observer";
    import profileImage from "$lib/images/profileImage.webp";

    import Profile from "$lib/components/Profile.svelte";
    import Information from "$lib/components/Information.svelte";
    import Contact from "$lib/components/Contact.svelte";
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
        <!-- <span style="visibility:hidden;" id="home_section_one" /> -->
        <div class="content grid main-grid">
            <div class="grid-cell heading">
                <div class="heading-card">
                    <Heading className="heading-desktop" />
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
            </div>
        </div>

        <RoundButton
            classNames="hover scroll-down"
            title="scroll to the next headline"
        >
            <a
                href="/#home_section_two"
                aria-label="links to section 2"
                style="padding:0 10px;"
            >
                <ArrowDownSvg width="20px" height="30px" />
            </a>
        </RoundButton>
    </div>
</section>

<section class="section section-two">
    <!-- <span style="visibility:hidden;" id="home_section_two" /> -->
    <h1 class="decorator" id="home_section_two" >Was ist Hypnose</h1>

    <!-- <div class="content-wrapper">
        <article class="hypnose">
            <div class="hypnose__image">
                <img src={hypose} alt="" srcset="" />
            </div>
            <div class="hypnose__text">
                <p>
                    Zur einfacheren Einordnung lässt sich das menschliche
                    Bewusstsein grundsätzlich in zwei Bewusstseinsstadien
                    unterteilen. Das Bewusstsein und das Unterbewusstsein. Das
                    Bewusstsein ist beispielsweise für das rationale Lösen von
                    Aufgaben zuständig oder das Treffen bewusster
                    Entscheidungen. Dieser bewusste Anteil beträgt nur ca. 10 %
                    unserer gesamt möglichen Leistungen. Das bedeutet im
                    Umkehrschluss, wir Menschen besitzen viel mehr Potenzial,
                    welches ungenutzt bleibt und sich im Untergrund auf unser
                    Bewusstsein auswirkt, ohne, dass wir es bemerken.
                </p>
                <br />
                <p>
                    In der Hypnose arbeiten wir mit dem Unterbewusstsein,
                    während der kritische Faktor des Bewusstseins in den
                    Hintergrund gerät. Dadurch gelangen wir an Inhalte, die uns
                    im Wachzustand nicht zur Verfügung stehen, wir können sie
                    abrufen und mit ihnen arbeiten. Der Fokus wendet sich nach
                    innen, man erlangt Zugang zu seinen Gedanken und Gefühlen.
                    Das ermöglicht es tiefgreifende Veränderungsprozesse
                    auszulösen, welche intrinsische und nachhaltige Auswirkungen
                    auf uns haben. Es sollen innere Selbstheilungskräfte und
                    unbewusste Ressourcen gestärkt werden.
                </p>
                <br />
                <p>
                    Darüber hinaus ist uns Menschen der Hypnotische Zustand
                    nicht fremd, wir erleben ihn täglich, wenn wir
                    beispielsweise ein gutes Buch lesen oder einen Film schauen
                    und vollständig in diese Welten eintauchen und alles um uns
                    herum ausblenden. Ebenso befinden wir uns kurz vor dem
                    Einschlafen oder direkt nach dem Aufwachen in einem Zustand,
                    der der Hypnose ähnelt.
                </p>
            </div>
        </article>
    </div> -->
</section>

<section class="section section-three">
    <h1 class="decorator" id="home_section3">Section3</h1>
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

        --grid-columns: 20% 25% 10% 20% auto;
        --grid-rows-desktop: 10% 10% 10% auto;
        --grid-rows-mobile: 210px 190px 38%;
        --grid-template-desktop: "heading heading heading profile profile"
            "heading heading heading profile profile"
            "heading heading heading profile profile"
            "information information information profile profile"
            "information information information contact contact"
            "information information information contact contact"
            "information information information contact contact";

        --grid-template-mobile: "profile profile profile profile profile"
            "heading heading heading heading heading"
            "information information information information information"
            "contact contact contact contact contact";

        --grid-gap: 10px;
    }

    :global(.scroll-down) {
        bottom: 30px;
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
        height: 650px;
        background-color: var(--primary);
        position: absolute;
        transform: translatY(10%) !important;
        bottom: 10% !important;
        .svg-wrapper {
            position: absolute;
            top: 30px;
            left: 20px;
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
        // min-height: 1000px;
    }

    .grid {
        box-sizing: border-box;
        display: grid;
        gap: var(--grid-gap, 10px);
        background: var(--bg-grid, transparent);
        padding-top: 80px;
        // margin-top: 80px;
        width: 100%;
        height: 100%;
        min-height: 100vh;
    }

    .main-grid {
        grid-template-columns: var(--grid-columns);
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

    .heading {
        grid-area: heading;
        background-color: var(--bg-heading);
    }

    .profile {
        grid-area: profile;
        background-color: var(--bg-profile);
    }

    .information {
        grid-area: information;
        background-color: var(--bg-information);
    }

    .contact {
        grid-area: contact;
        background-color: var(--bg-contact);
    }

    .heading-card {
        display: flex;
        justify-content: start;
        align-items: center;
        // margin-left: 70px;
    }

    .profile-card {
        display: flex;
        align-items: center;
        justify-content: end;
        :global(.profile-card) {
            max-width: 400px;
        }
    }

    .information-card {
        display: flex;
        justify-content: left;
        align-items: start;
        margin-top: 3rem;
        // margin-left: 70px;
    }

    .contact-card {
        display: flex;
        justify-content: end;
        align-items: start;
        :global(.contact-card) {
            max-width: 400px;
        }
    }

    .section-two {
        background-color: var(--bg-section-two);
        height: 100vh;
        .content-wrapper {
            align-items: center;
            justify-content: center;
            height: 100vh;
            .hypnose {
                margin: 0;
                padding: 0;
                box-shadow: none;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: red;
                .hypnose__image {
                    max-width: 350px;
                    max-height: 350px;
                    margin-right: 30px;
                    margin-bottom: 10px;
                    float: left;
                    overflow: hidden;
                    border: double 1px var(--primary);
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
                    p {
                        text-align: justify;
                        font-size: 16px;
                        font-weight: 300;
                        font-family: "Segoe UI";
                        color: var(--text);
                    }
                    .text:hover {
                        background: var(--primary-hover);
                        padding: 15px;
                        transition: all 0.3s ease-in-out;
                        padding: 30px;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 375px) and (max-width: 1093px) {
        .background-svg-banner {
            overflow: hidden;
            width: 100%;
            height: 800px;
            background-color: var(--primary);
            position: absolute;
            transform: translatY(16.5%) !important;
            top: 16.5% !important;
            :global(.background-svg) {
                height: 1200px;
            }
        }
        :global(.scroll-down) {
            display: none !important;
        }
        .content-wrapper{
            height: 100%;
        }
        // .section::after {
        //     font-size: 13px;
        //     font-family: "Arial";
        //     content: "device: pixel 5 393 x 851";
        // }
        .section-one {
            min-height: 100vh;
            height: 100%;
        }
        .grid {
            height: 100%;
            margin-bottom: 80px;
        }
        .main-grid {
            grid-template-rows: var(--grid-rows-mobile, auto);
            grid-template-areas: var(--grid-template-mobile, auto);
        }
        .profile-card {
            :global(.profile-card) {
                max-width: 100%;
            }
        }

        .heading-card {
            justify-content: center;
            align-items: center;
            margin: 0px;
            padding: 0px;
        }

        .information-card {
            margin: 0;
            padding: 10px 0;
            // justify-self: center;
            justify-content: center;
            align-items: center;
            .catchphrases {
                align-items: center;
                .catchphrase {
                    text-align: center;
                }
            }
        }
        .contact-card {
            justify-self: center;
        }
    }

    @media screen and (min-width: 1094px) {
        // .section::after {
        //     font-size: 13px;
        //     font-family: "Arial";
        //     content: "device: i dont care...";
        // }
        .section-one {
            // height: 100vh;
        }
        .main-grid {
            grid-template-areas: var(--grid-template-desktop, auto);
            grid-template-rows: var(--grid-rows-desktop, auto);
        }
    }

    @media screen and (max-width: 374px) {
        //.section::after {
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
    }
</style>
