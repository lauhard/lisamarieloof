<script lang="ts">
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import BurgerMenu from "./BurgerMenu.svelte";
    let open = false;
    let oldScroll:number|undefined = undefined;
    export const offset = 50;
    $: scrollY = 0;
    $: innerWidth = 0;
    $:hide=false;
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
    onMount(async () => {});
</script>

<svelte:window bind:scrollY bind:innerWidth />
<!-- content here -->
<nav class="navigation" class:scroll={scrollY > offset} class:hide={hide === true}>
    <!-- <ul class="burger"> -->
        <BurgerMenu bind:open className="burger" />
    <!-- </ul> -->
    <ul class="menu-entries" class:mobile={innerWidth < 680 && open == true}>
        <li class:active={$page.url.pathname === "/"}>
            <a href="/">Startseite</a>
        </li>
        <li class:active={$page.url.pathname === "/leistungen"}>
            <a href="/leistungen">Leistungen</a>
        </li>
        <li class:active={$page.url.pathname === "/ueber-mich"}>
            <a href="/ueber-mich">Über Mich</a>
        </li>
        <li class:active={$page.url.pathname === "/kontakt"}>
            <a href="/kontakt">Kontakt</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    ul {
        margin: 0;
        padding: 0;
    }
    nav {
        font-family: var(--font-family, "Segoe UI");
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;

        // background-color: blueviolet;
        // position: fixed;
        // top: 0;
        // z-index: 999;
        // .burger {
        //     display: none;
        // }
        :global(.burger) {
            border-width: 1px !important;
            display: none !important;
        }
        .menu-entries {
            // font-size: .55rem;
            font-size: 12px;
            // max-width: var(--content-width);
            width: 100%;
            display: flex;
            justify-content: end;
            li {
                position: relative;
                word-break: keep-all;
                text-transform: uppercase;
                a {
                    outline: none;
                    list-style: none;
                    color: var(--text, #fff);
                    background-color: none;
                }
                a::before {
                    content: " ";
                    width: 0px;
                    border: 2px solid transparent;
                    position: absolute;
                    bottom: 0.8rem;
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
                        bottom: 0.8rem;
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
                    bottom: 0.8rem;
                    border-radius: 5px;
                }
            }
            transition: all 1s ease-out;
        }
    }
    .scroll {
        // box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        //     rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        opacity: 1;
        transition: all 0.5s ease-in-out;
        transition: all .2s ease-in-out;
    }
    .hide {
        opacity: 0;
        transition: all .2s ease-in-out;
    }

    @media screen and (max-width: 680px) {
        nav {
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            margin-top: 5px;
            :global(.burger) {
                display: flex !important;
                margin-right: 20px !important;
            }
            .menu-entries {
                display: none;
                width: 100%;
                font-size: 12px;
            }
            .mobile {
                justify-content: center;
                align-items: center;
                width: 100% !important;
                position: absolute;
                top: 70px;
                display: flex;
                flex-direction: column;
                background-color: gray;
                transition: all 1s ease-out;
                li {
                    display: block;
                    width: 100%;
                    background-color: #fff;
                    height: 100%;
                    a {
                        display: block;
                        text-align: center;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
