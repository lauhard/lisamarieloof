<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import BurgerMenu from "./BurgerMenu.svelte";
    import { beforeNavigate } from "$app/navigation";

    export const offset = 50;

    $: scrollY = 0;
    let oldScroll:number|undefined = undefined;

    $: innerWidth = 0;

    let open: boolean = false;
    $: console.log("open state: ", open);

    $:hide=false;
    onMount(() => {});
    beforeNavigate(() => {
        open = false;
    });

    $: if(scrollY) {
       if(oldScroll=== undefined) {
            oldScroll=scrollY;
       }
       if(oldScroll < scrollY) {
            hide=true;
       } else{
            hide=false;
       }
       oldScroll=scrollY;
    }
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={innerWidth} />
<nav class:scroll={scrollY > offset} class:hide={hide === true}>
    <ul class="burger">
        <BurgerMenu bind:open />
    </ul>
    <ul class:navigation={innerWidth >= 680} class:mobile={innerWidth < 680 && open == true}>
        <li class:active={$page.url.pathname === "/"}>
            <a href="/">Startseite</a>
        </li>
        <li class:active={$page.url.pathname === "/about"}>
            <a href="/about">Über Mich</a>
        </li>
        <li class:active={$page.url.pathname === "/service"}>
            <a href="/service">Leistungen</a>
        </li>
        <li class:active={$page.url.pathname === "/contact"}>
            <a href="/contact">Kontakt</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    .mobile {
        top: 60px;
        position: absolute;
        display: flex;
        flex-direction: column;
        height: auto;
        width: 100%;
        border-bottom: 1px solid var(--primary);
        background-color: inherit;
        background-color: rgba(243, 243, 243, 0.87);
        li {
            position: relative;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
            height: 100%;
            height: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
                width: 100%;
                height: 100%;
                display: block !important;
                margin: 0;
                margin-left: 1rem;
                font-size: smaller;
                box-sizing: border-box;
            }
        }
    }
    .burger {
        display: grid;
        min-height: 3.5rem;
        margin-left: 1rem;
    }
    nav {
        position: fixed;
        width: 100%;
        margin: 0px;
        box-sizing: border-box;
        z-index: 999;
        z-index: 999;
        box-shadow: none;
        transition: all 0.5s ease-in-out;
        ul {
            display: none;
        }
        a {
            color: black;
            color: var(--text);
            font-size: .6rem;
            word-break: keep-all;
            text-transform: uppercase;
            font-family: "Segoe UI";
            // font-weight: 500;
        }
        .burger{
            display: none;
        }
        .navigation {
            display: flex;
            // border-bottom: 0.5px solid var(--primary);
            width: 100%;
            margin: 0;
            box-sizing: border-box;
            li {
                position: relative;
                &:first-child {
                    margin-left: 60px;
                }
                a::before {
                    content: " ";
                    width: 0px;
                    border: 2px solid transparent;
                    position: absolute;
                    bottom: 1rem;
                    border-radius: 5px;
                    transition: all 0.2s ease-in-out;
                }
                &:hover {
                    a::before {
                        content: " ";
                        width: 45px;
                        border: 2px solid var(--primary);
                        position: absolute;
                        border-radius: 5px;
                        bottom: 1rem;
                        transition: all 0.2s ease-in-out;
                    }
                    transition: all 0.2s ease-in-out;
                }
            }
            .active {
                a::before {
                    content: " ";
                    width: 45px;
                    height: 0.15rem;
                    background-color: var(--primary);
                    position: absolute;
                    bottom: 1rem;
                    border-radius: 5px;
                }
            }
        }
    }
    .scroll {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        background-color: var(--white);
        transition: all 0.5s ease-in-out;
        // a {
        //     // color: var(--text);
        // }
        // border-bottom: 0.5px solid var(--primary);
    }
    .hide {
        display: none;
        transition: position 1s ease-in-out;
    }
    @media screen and (max-width: 680px) {
        nav {
            .mobile {
                top: 60px;
                position: absolute;
                display: flex;
                flex-direction: column;
                height: auto;
                width: 100%;
                border-bottom: 1px solid var(--primary);
                background-color: inherit;
                background-color: rgba(243, 243, 243, 0.87);
                .burger{
                    display: block;
                }
                li {
                    position: relative;
                    padding: 0;
                    width: 100%;
                    box-sizing: border-box;
                    height: 100%;
                    height: 2.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    a {
                        width: 100%;
                        height: 100%;
                        display: block !important;
                        margin: 0;
                        margin-left: 1rem;
                        font-size: .6rem;
                        box-sizing: border-box;
                    }
                }
                .active {
                    a::before {
                        content: " ";
                        width: 45px;
                        height: 0.15rem;
                        background-color: var(--primary);
                        position: absolute;
                        bottom: 1rem;
                        border-radius: 5px;
                    }
                }
            }
            .burger {
                display: grid;
                min-height: 3.5rem;
                margin-left: 1rem;
            }
        }
    }
</style>
