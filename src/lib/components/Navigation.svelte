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
    $:_loaded = false;
    onMount(() => {
        _loaded = true;
    });
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
{#if _loaded === true }
    <nav class:scroll={scrollY > offset} class:hide={hide === true} >
        <ul class="burger">
            <BurgerMenu bind:open />
        </ul>
        <ul class:navigation={innerWidth >= 680} class:mobile={innerWidth < 680 && open == true}>
            <li class:active={$page.url.pathname === "/"}>
                <a href="/">Startseite</a>
            </li>
            <li class:active={$page.url.pathname === "/ueber-mich"}>
                <a href="/ueber-mich">Über Mich</a>
            </li>
            <li class:active={$page.url.pathname === "/leistungen"}>
                <a href="/leistungen">Leistungen</a>
            </li>
            <button class="cta">
                <a href="/kontakt">Kontakt</a>
            </button>
        </ul>
        <li class="logo">
            <slot name="logo">
            </slot>
        </li>
    </nav>
{/if}

<style lang="scss">
    .cta{
        width:auto;
        height:38px;
        background: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0;
        padding: 0;
        a {
            display: block;
            margin:0;
            text-align: center;
            line-height: 1;
        }
    }
    .cta:hover{
        background-color: var(--secondary);
        border: 1px solid var(--secondary);
        transform: scale(1.01);
        a {
            color:var(--inverse);            
        }
    }
    // .mobile {
    //     top: 60px;
    //     position: absolute;
    //     display: flex;
    //     flex-direction: column;
    //     height: auto;
    //     width: 100%;
    //     background-color: rgba(243, 243, 243, 0.87);
       
    //     li {
    //         position: relative;
    //         padding: 0;
    //         width: 100%;
    //         box-sizing: border-box;
    //         height: 100%;
    //         height: 2.5rem;
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //         a {
    //             width: 100%;
    //             height: 100%;
    //             display: block !important;
    //             margin: 0;
    //             margin-left: 1rem;
    //             font-size: smaller;
    //             box-sizing: border-box;
    //         }
    //     }
    // }
    .burger {
        display: grid;
        min-height: 3.5rem;
        margin-left: 1rem;
    }
    nav {
        position: fixed;
        width: 100%;
        height: 70px;
        box-sizing: border-box;
        z-index: 9999;
        box-shadow: none;
        transition: all 0.5s ease-in-out;
        display: flex;
        justify-content: center;
        vertical-align: center;
        a {
            color: black;
            color: var(--text);
            font-size: .55rem;
            word-break: keep-all;
            text-transform: uppercase;
            font-family: "Segoe UI";
        }
        .burger{
            display: none;
        }
        .navigation {
            display: flex;
            width: 100%;
            margin: 0;
            gap:20px;
            box-sizing: border-box;
            display: flex;
            width: 80%;
            justify-content: end;
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
            transition: all 1s ease-in-out;
        }
        transition: all 1s ease-in-out;
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
        .scroll {
            background: rgba(243, 243, 243, 0.87);
        }
        nav {
            background: rgba(243, 243, 243, 0.87);
            justify-content: start;
            ul{
                display: none;
            }
            .mobile {
                top: 60px;
                position: absolute;
                display: flex;
                flex-direction: column;
                height: auto;
                width: 100%;
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
                        font-size: .55rem;
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
