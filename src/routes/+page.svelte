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
    // import { ObserveProps, observer } from "$lib/actions/observer";
    import profileImage from "$lib/images/profile2.png";
  
    import Profile from "$lib/components/Profile.svelte";
    import Information from "$lib/components/Information.svelte";
    import Contact from "$lib/components/Contact.svelte";
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
    <link rel="preload" as="image" href={profileImage} />
</svelte:head>

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
        <span style="visibility:hidden;" id="section_one" />

        <div class="content grid main-grid">
            <div class="grid-cell heading">
                <div class="heading-card">
                    <Heading className="heading-desktop" />
                </div>
            </div>
            <div class="grid-cell profile">
                <div class="profile-card">
                    <Profile {profileImage} />
                </div>
            </div>
            <div class="grid-cell information">
                <div class="information-card">
                    <Information></Information>
                </div>
            </div>
            <div class="grid-cell contact">
                <div class="contact-card">
                   <Contact></Contact> 
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
    :root {
        --bg-grid: #37cf2ce2;
        --bg-content-wrapper: #c3ff80;
        --bg-heading: red;
        --bg-profile: green;
        --bg-information: blue;
        --bg-contact: orange;

        --grid-columns: 20% 24% 10% 20% auto;
        --grid-rows-desktop: 10% 10% 10% auto;
        --grid-rows-mobile: 23% 15% 37%;
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
        bottom: 50px;
        position: absolute;
        border: 1px solid white;
        left: calc(50% - 22.5px) !important;
    }

    .background-svg-banner {
        overflow: hidden;
        width: 100%;
        height: 600px;
        background-color: var(--primary);
        position: absolute;
        transform: translatY(25%) !important;
        top: 25% !important;

        .svg-wrapper {
            position: absolute;
            top: 250px;
            left: -250px;
            width: auto;
        }
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

    .section-one {
        display: flex;
        align-items: center;
        justify-content: center;
        // min-height: 100vh;
        // height: 100%;
        // background-color: #5fd5de2d;
        .content-wrapper {
            box-sizing: border-box;
            display: flex;
            position: relative;
            flex-direction: column;
            background: var(--bg-content-wrapper, transparent);
            min-height: 100vh;

            height: 100%;
            // height: 100vh; !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            width: 100%;
            max-width: var(--content-width, 1240px);
        }
    }

    .grid {
        box-sizing: border-box;
        display: grid;
        gap: var(--grid-gap, 10px);
        background: var(--bg-grid, transparent);
        margin-top: 80px;
        width: 100%;
        min-height: 100vh; /**"""""!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"*/
        height: 100%;
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
        justify-content: center;
        align-items: center;
        // top:25%;
        :global(.heading-desktop) {
            // align-self: center;
            // position: relative !important;
            // // background-color: #2a9ebb;
            // // background-color: white;
            // width: 400px;
            // height:180px;
            // text-transform: uppercase;
            // border: 2px solid var(--primary);
        }
    }

    .profile-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .information-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-card {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 375px) and (max-width: 1093px) {
        .section::after {
            font-size: 13px;
            font-family: "Arial";
            content: "device: pixel 5 393 x 851";
        }
        .section-one {
            height: 1000px;
        }
        .main-grid {
            grid-template-rows: var(--grid-rows-mobile, auto);
            grid-template-areas: var(--grid-template-mobile, auto);
            background: var(--primary);
        }
        .profile-card {
            box-shadow: none;
            // top:50px;
            background: transparent;
            justify-self: center;
            .profile-img {
                border-radius: 50%;
                height: 200px;
                width: 200px;
                background-color: var(--primary);
                border: 8px solid #fff;
                img {
                    height: 350px;
                    object-fit: cover;
                    object-position: -50px -15px;
                }
            }
            .profile-description {
                display: none;
            }
        }

        .heading-card {
            top: -40px;
            margin-left: 0;
            justify-self: center;
        }

        .information-card {
            margin-left: 0;
            padding: 10px 0;
            height: 320px;
            justify-self: center;
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
        .section::after {
            font-size: 13px;
            font-family: "Arial";
            content: "device: i dont care...";
        }
        .section-one {
            height: 100vh;
        }
        .main-grid {
            grid-template-areas: var(--grid-template-desktop, auto);
            grid-template-rows: var(--grid-rows-desktop, auto);
        }
    }




























    @media screen and (max-width:374px) {

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
