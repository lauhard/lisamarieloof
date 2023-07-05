<script>
    import checkmark from "$lib/svg/checkmark.svg";
    import mail from "$lib/svg/mail-solid.svg";
    import tel from "$lib/svg/telephone.svg";
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
    import PhoneSvg from "$lib/components/svgs/phoneSvg.svelte";
    import EmailSvg from "$lib/components/svgs/emailSvg.svelte";
    import MapSvg from "$lib/components/svgs/mapSvg.svelte";
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
<!--  -->
<!-- f0f0f01a -->
<div class="background-svg-banner">
    <div class="svg-wrapper">
        <LogoSvg
            className="background-svg"
            height="80vh"
            animation={false}
            --leaves-main="#f0f0f035"
            --leaves-overlay="#f0f0f035"
            --tree-color="#f0f0f035" 
            --tree-overlay="#f0f0f035"
            --svg-stroke-width="0px"
        />
    </div>
</div>
<div class="section">
    <RoundButton
        classNames="hover scroll-down"
        title="scroll to the next headline"
    >
        <a
            href="/#willkommen"
            aria-label="links to section 2"
            style="padding:0 10px;"
        >
            <ArrowDownSvg width="20px" height="30px" />
        </a>
    </RoundButton>

    <div class="grid">
        <div class="cell cell-headline">
            <div class="headline-wrapper">
                <Headline className="heading" />
            </div>
            <div class="information-wrapper">
                <Information className="information" />
            </div>
        </div>
        <div class="cell cell-profile">
            <div class="profile-image-wrapper">
                <img
                    class="profile-image"
                    src={profileImage}
                    alt=""
                    srcset=""
                />
            </div>
        </div>
        <div class="cell cell-greeter">
            
            <div class="greeter-wrapper">
                <span style="visibility:hidden;" id="willkommen" />
                <h1 class="welcome">Herzlich Willkommen</h1>
                <div class="welcome-text">
                    <p class="intro">
                        Während Ihrer Zeit für Hypnose und Weiterentwicklung
                        soll Ihnen in gemeinsamer Zusammenarbeit Folgendes
                        ermöglicht werden
                    </p>
                    <br />
                    <div class="line">
                        <img
                            alt="self-Logo"
                            src={checkmark}
                            width="30px"
                            height="auto"
                        />
                        <p>
                            Ihre ganz eigenen Erfahrungen mit Hypnose zu machen
                            und diese zu erleben.
                        </p>
                    </div>
                    <div class="line">
                        <img
                            alt="self-Logo"
                            src={checkmark}
                            width="30px"
                            height="auto"
                        />
                        <p>
                            Ihren Themen, den entstehenden Gefühlen und Gedanken
                            wird der Raum und die Zeit gegeben zu wirken.
                        </p>
                    </div>
                    <div class="line">
                        <img
                            alt="self-Logo"
                            src={checkmark}
                            width="30px"
                            height="auto"
                        />
                        <p>
                            Ihre eigenen Ressourcen und Selbstheilungskräfte zu
                            mobilisieren, um an Ihren Themen zu arbeiten.
                        </p>
                    </div>
                    <div class="line">
                        <img
                            alt="self-Logo"
                            src={checkmark}
                            width="30px"
                            height="auto"
                        />
                        <p>
                            Unser gemeinsamer Fokus wird auf dem lösungs- und
                            ressourcenorientierten Arbeiten liegen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="cell cell-praxis">
            <div class="subgrid-praxis praxis-wrapper">
                <div class="subgrid-cell contact">
                    <p>
                        Sie können Termine gerne telefonisch oder über E-Mail
                        vereinbaren.
                    </p>

                    <div class="contact-buttons">
                        <a class="cta" type="button" href="tel:+4369919048032">
                            <PhoneSvg width="30px" height="22px" classNames="onHover" --fill="var(--white)" ></PhoneSvg>
                            +43 69919048032
                        </a>

                        <a class="cta" type="button" href="/kontakt">
                            <EmailSvg width="30px" height="22px" classNames="onHover" --fill="var(--white)" ></EmailSvg>
                            Kontakformular
                        </a>
                    </div>
                </div>
                <div class="subgrid-cell image">
                    <img src={praxis1} alt="" srcset="" />
                </div>
                <div class="subgrid-cell image">
                    <img src={praxis2} alt="" srcset="" />
                </div>
                <div class="subgrid-cell map">
                    <p>
                        Meine Praxis befindet sich in der Feldgasse 34A 9020 im
                        Zentrum von Klagenfurt.
                    </p>
                    <a
                        class="cta"
                        href="https://goo.gl/maps/JhctkWRnJmyWfm3Y8"
                        target="_blank"
                        rel="noopener noreferrer">
                        <MapSvg width="35px" height="25px" classNames="onHover"  --fill="var(--white)"></MapSvg>Karte öffnen</a
                    >
                </div>
            </div>

        </div>
        <div class="cell cell-hypnose">
            <div class="hypnose-wrapper">
                <h2 class="decorator">Was ist Hypnose</h2>
                <article class="hypnose">
                    <div class="hypnose__image">
                        <img src={hypose} alt="" srcset="" />
                    </div>
                    <div class="hypnose__text">
                        <p>
                            Zur einfacheren Einordnung lässt sich das
                            menschliche Bewusstsein grundsätzlich in zwei
                            Bewusstseinsstadien unterteilen. Das Bewusstsein und
                            das Unterbewusstsein. Das Bewusstsein ist
                            beispielsweise für das rationale Lösen von Aufgaben
                            zuständig oder das Treffen bewusster Entscheidungen.
                            Dieser bewusste Anteil beträgt nur ca. 10 % unserer
                            gesamt möglichen Leistungen. Das bedeutet im
                            Umkehrschluss, wir Menschen besitzen viel mehr
                            Potenzial, welches ungenutzt bleibt und sich im
                            Untergrund auf unser Bewusstsein auswirkt, ohne,
                            dass wir es bemerken.
                        </p>
                        <br />
                        <p>
                            In der Hypnose arbeiten wir mit dem
                            Unterbewusstsein, während der kritische Faktor des
                            Bewusstseins in den Hintergrund gerät. Dadurch
                            gelangen wir an Inhalte, die uns im Wachzustand
                            nicht zur Verfügung stehen, wir können sie abrufen
                            und mit ihnen arbeiten. Der Fokus wendet sich nach
                            innen, man erlangt Zugang zu seinen Gedanken und
                            Gefühlen. Das ermöglicht es tiefgreifende
                            Veränderungsprozesse auszulösen, welche intrinsische
                            und nachhaltige Auswirkungen auf uns haben. Es
                            sollen innere Selbstheilungskräfte und unbewusste
                            Ressourcen gestärkt werden.
                        </p>
                        <br />
                        <p>
                            Darüber hinaus ist uns Menschen der Hypnotische
                            Zustand nicht fremd, wir erleben ihn täglich, wenn
                            wir beispielsweise ein gutes Buch lesen oder einen
                            Film schauen und vollständig in diese Welten
                            eintauchen und alles um uns herum ausblenden. Ebenso
                            befinden wir uns kurz vor dem Einschlafen oder
                            direkt nach dem Aufwachen in einem Zustand, der der
                            Hypnose ähnelt.
                        </p>
                    </div>
                </article>
            </div>
        </div>
        <div class="cell cell-faq">
            <div class="faq-wrapper">
                <h2 class="decorator" id="haeufig-gestellte-fragen">
                    Häufig gestellte Fragen
                </h2>
                <Faq classNames="faq" />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  
    .section {
        --section-min-height: 100vh;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        // --bg-section: red;
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
        :global(.scroll-down) {
            top: 80vh;
            min-width: 50px;
            width: 50px;
            min-height: 50px;
            height: 50px;
            border-radius: 50%;
            position: absolute;
            border: 1px solid white;
            left: calc(50% - 22.5px);
            background: var(--secondary);
            z-index: 9999;
            &:hover {
                background: var(--secondary-hover) !important;
            }
        }
    }
    .background-svg-banner {
        overflow: hidden;
        width: 100%;
        // height: 660px;
        // max-height: 64.5vh;
        background-color: var(--primary);
        position: absolute;
        bottom: 10%;
        bottom: 10vh;
        height: 100vh;
        max-height: 64vh;
        min-height: 300px;
        // height: 800px;
        .svg-wrapper {
            position: absolute;
            left: -15vw;
            bottom: -50vh;
        }
    }
    .grid {
        // --bg-grid: #cf2ccce2;
        // --bg-grid-cell: #00ffc8;
        // --bg-current-cell: red;

        --grid-columns-desktop: repeat(2, 50vw, 50vw);
        // --grid-columns-desktop:repeat(auto-fill, minmax(400px, 1fr));
        --grid-rows-desktop: auto;
        --grid-rows-mobile: 210px 240px 380px auto;
        --grid-template-desktop: "heading heading image image"
            "heading heading image image";

        --grid-template-mobile: "";

        // --grid-gap: 10px;
        --grid-row-gap: 4rem;
        --grid-height: auto;
        --grid-min-height: 100dvh;
        // --grid-padding: 10px 0 0 0;
        --grid-width: 100%;

        padding: var(--grid-padding);
        background-color: var(--bg-grid);
        min-height: var(--grid-min-height);
        height: var(--grid-height);
        width: var(--grid-width);

        grid-gap: var(--grid-gap, 0px);
        grid-row-gap: var(--grid-row-gap, 0px);
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);

        box-sizing: border-box;
        overflow: hidden;
    }
    .cell {
        background-color: var(--bg-grid-cell, transparent);
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        min-height: auto;
    }
    .cell:nth-of-type(1),
    .cell:nth-of-type(2) {
        grid-column: span 2;
        max-height: 100vh;
        height: calc(100vh - 150px);
    }
    .cell:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60dvw;
        width: 60vw;
        order: 1;
        min-height: 700px;
    }
    .cell:nth-of-type(2) {
        display: flex;
        height: calc(100vh - 100px);
        // height: calc(100vh - 105px);
        width: 40dvw;
        width: 40vw;
        order: 2;
        min-height: 300px;
        overflow: hidden;

        // background-color: green;
    }
    .cell:nth-of-type(3) {
        grid-column: auto / span 4;
        height: auto;
        min-height: 100%;
        order: 3;
    }
    .cell:nth-of-type(4) {
        grid-column: auto / span 4;
        height: 100%;
        background-color: var(--bg-current-cell, transparent);
        width: 100%;
        max-width: 100dvw;
        max-width: 100vw;
        min-height: 100%;
        order: 4;
    }
    .cell:nth-of-type(5),
    .cell:nth-of-type(6) {
        display: flex;
        grid-column: auto / span 4;
        height: auto;
        width: 100vw;
    }
    .cell:nth-of-type(5) {
        order: 5;
    }
    .cell:nth-of-type(6) {
        order: 6;
    }
    .headline-wrapper,
    .information-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 50%;
        width: 100%;
    }
    .headline-wrapper {
        min-height: 200px;
        height: 33vh;
        height: 35vh;
        justify-content: end;
        // background-color: green;
        :global(.heading) {
            // position: absolute;
            // top: 35%;
            // transform: translateY(-55%);
        }
    }
    .information-wrapper {
        // background-color: red;
        height: 100%;
        justify-content: center;
        // padding-top: 7%;
        :global(.information) {
            // position: absolute;
            // bottom: 45%;
        }
    }
    .profile-image-wrapper {
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: end;
        height: 88%;
        bottom: 10%;
        // bottom: 5%;
        overflow: hidden;
        max-width: 100%;
        max-height: 800px;
        width: 100%;
        // min-height: 100px;
        // background: red;
        img {
            position: relative;
            height: 100%;
            width: auto;
            // max-height: 830px;
            // max-height: 800px;
            min-height: 60%;
            min-height: 100%;
            object-fit: cover;
            object-position: 0px center;
            overflow: hidden;
        }
    }
    .greeter-wrapper {
        margin: 0 auto;
        max-width: var(--content-width);
        width: 100%;
        height: auto;
        margin-top: -4rem;
        padding: 0 1rem;
        .welcome {
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
            color: var(--text);
        }
        .line {
            display: flex;
            flex-direction: row;
            max-width: 1000px;
            margin: 0 auto;
            p {
                line-height: 1.9rem;
                font-weight: 300;
                font-family: var(--font-family, "Segoe UI");
                color: var(--text);
                font-size: 1rem;
                font-size: 18px;
            }
            img {
                padding: .5rem 10px 0px 10px;
                height: 100%;
                max-width: 40px;
                width: 100%;
            }
        }
        .intro {
            line-height: 1.9rem;
            font-weight: 400;
            font-family: var(--font-family, "Segoe UI");
            color: var(--text);
            font-size: 1.1rem;
            font-size: 24px;
            text-align: center;
        }
    }
    .subgrid-praxis {
        display: grid;
        position: relative;
        max-width: var(--content-width);
        height: auto;
        min-height: 100%;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        grid-auto-rows: minmax(100px, auto);
        grid-row-gap: 40px;
        width: var(--content-width);
        margin: 0 auto;
        box-sizing: border-box;
        justify-content: end;
        position: relative;
        .image {
            height: 100%;
            width: 100%;
            min-height: 300px;
            overflow: hidden;
            padding: 0 20px;
            img {
                width: 100%;
                object-fit: cover;
            }
        }
        .contact,
        .map {
            grid-column-start: 1;
            grid-column-end: 4;
            width: 600px;
            height: 300px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            justify-content: center;
            box-sizing: border-box;
            align-items: center;
            justify-self: center;
            background-color: var(--primary);
            p {
                margin-bottom: 30px;
                font-size: 1rem;
                font-size: 18px;

                font-weight: 500;
                font-weight: 300;
                text-align: center;
                padding: 20px;
                font-family: var(--font-family, "Segoe UI");
                color: #fff;
            }
            
            a {
                text-transform: uppercase;
                justify-self: center;
                color:#fff;

                &:hover {
                color: var(--attention);

                    :global(.onHover){
                        color: var(--attention);
                    }
                }
                transition: all .5s ease-in-out !important;

            }
        }
    }
    .hypnose-wrapper {
        padding: 0;
        max-width: 100%;
        width: 100%;
        background-color: var(--primary-hover);
        display: flex;
        flex-direction: column;
        align-items: center;
        .decorator {
            margin-top: 1.5rem;
        }
        .decorator::before {
        }
        .hypnose {
            max-width: var(--content-width);
            width: 100%;
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
                box-sizing: border-box;
                img {
                    overflow: hidden;
                    transition: all 0.3s ease-in-out;
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
            .hypnose__text {
                width: 100%;
                p {
                    text-align: justify;
                    font-size: 0.9rem;
                    font-size: 1rem;
                    font-size: 18px;
                    font-weight: 300;
                    font-family: var(--font-family, "Segoe UI");
                    color: var(--text);
                }
            }
        }
    }
    .faq-wrapper {
        position: relative;
        .decorator {
            text-align: center;
            margin-bottom: 3rem;
        }
        .decorator::before {
        }

        max-width: var(--content-width);
        width: 100%;
        margin: 0 auto;
        height: auto;
        min-height: 440px;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 1460px) {
        .grid {
            .cell:nth-of-type(2) {
                .profile-image-wrapper {
                    width: 100%;
                }
            }
            .greeter-wrapper{
                margin-top: 0rem;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            height: 100%;
            height: 100vh;
            max-height: 100dvh;
            max-height: 100%;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    height: 960px !important;
                }
            }
        }
      
        .grid {
            grid-row-gap: 40px;
            .cell:nth-of-type(1),
            .cell:nth-of-type(2) {
                grid-column: auto / span 4;
                width: 100vw;
            }
            .cell:nth-of-type(1) {
                height: auto;
                min-height: 500px;
                justify-content: start;
                order: 2;
                .information-wrapper {
                    padding-top: 0%;
                    height: auto;
                }
                .headline-wrapper {
                    background-color: var(--primary);
                    height: 250px;
                    min-height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    align-self: center;
                }
            }
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 500px;
                margin-top: 90px;
                min-height: 200px;
                order: 1;
                width: 100vw;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 450px;
                    max-height: 450px;
                    width: 450px;
                    max-width: 450px;
                    background-color: rgb(255, 255, 255);
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    img {
                        justify-self: center;
                        position: relative;
                        width: 100%;
                        max-width: 600px;
                        object-position: 0px 5px;
                    }
                }
            }
            .cell-greeter {
                min-height: 100%;
                height: auto;
                .greeter-wrapper {
                    margin: 30px 0 30px 0;
                    min-height: 100%;
                }
            }
            .subgrid-praxis {
                display: grid;
                position: relative;
                max-width: 100vw;
                height: auto;
                min-height: 100%;
                grid-template-columns: repeat(2, minmax(100px, 1fr));
                .image {
                    justify-self: center;
                    grid-column-start: 1;
                    grid-column-end: 4;
                    height: 100%;
                    max-width: 800px;
                    max-height: 400px;
                    width: 100%;
                    min-height: auto;
                    overflow: hidden;
                    img {
                        width: 100%;
                        justify-self: center;
                        object-fit: contain;
                        min-height: 100%;
                    }
                }
                .contact,
                .map {
                    max-width: 760px;
                    height: auto;
                    min-height: auto;
                    width: 100%;
                }
            }
            .faq-wrapper {
                margin-top: 50px;
                padding: 0 20px;
            }
            .hypnose-wrapper {
                margin-top: 50px;
                padding: 0 20px;
                box-sizing: border-box;
                h2::before{
                    background-color: var(--secondary);
                    position: absolute;
                    border-color: var(--secondary);
                    border-style: solid;
                }
            }
        }
        @media (orientation: landscape) {
            .background-svg-banner {
                background-color: var(--primary);
                max-height: none;
                min-height: auto;
                height: 800px;
                position: absolute;
                top: 0%;
            }
            .section {
                position: relative;
                min-height: 1000px;
                height: 100%;
                bottom: 0;
                .grid {
                    min-height: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 992px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            height: 100%;
            height: 100vh;
            max-height: 100dvh;
            max-height: 100%;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    height: 700px !important;
                }
            }
        }
        .grid {
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 350px;
                margin-top: 12%;
                margin-top: 5rem;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 350px;
                    max-height: 350px;
                    width: 350px;
                    max-width: 350px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
        }
        @media (orientation: landscape) {
            .background-svg-banner {
                background-color: var(--primary);
                max-height: none;
                min-height: auto;
                height: 800px;
                position: absolute;
                top: 0%;
            }
            .section {
                position: relative;
                min-height: 1000px;
                height: 100%;
                bottom: 0;
                .grid {
                    min-height: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 576px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            height: 100%;
            height: 100vh;
            max-height: 100dvh;
            max-height: 100%;
            .svg-wrapper {
                height: 100px !important;
                max-height: 100vh;

                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 700px !important;
                }
            }
        }

        .grid {
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 350px;
                margin-top: 12%;
                margin-top: 5rem;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 350px;
                    max-height: 350px;
                    width: 350px;
                    max-width: 350px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
            .subgrid-praxis {
                .contact {
                    .contact-buttons {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
    // fix image for mobile
    @media screen and (max-width: 510px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            height: 100%;
            height: 100vh;
            max-height: 100dvh;
            max-height: 100%;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            height: 100%;
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 250px;
                    max-height: 250px;
                    width: 250px;
                    max-width: 250px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
        }
    }
    @media screen and (max-width: 450px) {
        .grid {
            .headline-wrapper {
                background-color: var(--primary);
            }
            .hypnose-wrapper {
                padding: 0 20px;
                box-sizing: border-box;
                .hypnose__image {
                    max-width: 100%;
                    width: 100%;
                    max-height: 350px;
                    margin-right: 30px;
                }
            }
        }
    }
    @media screen and (max-width: 380px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            height: 100%;
            height: 100vh;
            max-height: 100dvh;
            max-height: 100%;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            height: 100%;
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 250px;
                    max-height: 250px;
                    width: 250px;
                    max-width: 250px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
            .subgrid-praxis {
                grid-auto-rows: minmax(100px, 300px);
                grid-row-gap: 20px;
            }
        }
    }
    @media screen and (max-width: 360px) and (min-width: 300px) {
        .background-svg-banner {
            bottom: 0px;
            height: 100dvh;
            max-height: 100dvh;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 250px;
                    max-height: 250px;
                    width: 250px;
                    max-width: 250px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
        }
    }
</style>
