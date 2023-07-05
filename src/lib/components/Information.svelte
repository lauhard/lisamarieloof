<script lang="ts">
    import AlertSvg from "./svgs/AlertSvg.svelte";
    import checkmark from "$lib/svg/checkmark.svg";

    export let className = "";
</script>

<header class="Information {className}">
    <div class="wrapper">
        <AlertSvg
            svgClass="alert-svg"
            pathClass="alert-path"
            width="50px"
            height="50px"
        />
        <div class="catchphrases">
            <p class="catchphrase">
                Sie wollen aufhören zu <span class="attention">rauchen</span>?
            </p>
            <p class="catchphrase">
                Sie kämpfen mit <span class="attention">Lampenfieber</span>
                oder
                <span class="attention">Prüfungssituationen</span>?
            </p>
            <p class="catchphrase">
                Sie verbringen zuviel Zeit am <span class="attention"
                    >Smartphone</span
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
        <a class="cta" type="button" href="/leistungen"
            >HIER ERFAHREN SIE MEHR</a
        >
    </div>
</header>

<style lang="scss">
    :global(.alert-svg) {
        position: absolute;
        top: -40px;
        box-sizing: border-box;
        padding: 5px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: var(--primary);
    }
    :global(.alert-path) {
        fill: #fff !important;
        stroke: #fff !important;
        stroke-width: 0px;
    }
    .cta{
        color: #fff !important;
        &:hover{
            color: var(--attention) !important;
        }
    }
    .Information {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;

        height: auto;
        width: auto;
        background-color: #ffffff;
        padding: 5px;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        .wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            margin: 10px;

            .catchphrases {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                font-family: var(--font-family, "Segoe UI");
                // background-color: #ffffff;
                padding:30px;
                // height: 150px;
                gap: 1.2rem;
                span {
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 700;
                    color: #378d93;
                   
                }
                .catchphrase {
                    font-weight: 300;
                    font-family: var(--font-family, "Segoe UI");
                    color: var(--text);
                    font-size: 1rem;
                    font-size: 18px;
                    // text-align: justify;
                    // letter-spacing: .06rem;
                }
               
            }
        }
    }
    @media screen and (max-width: 480px) {
        // span{
        //     font-family: 'Segoe UI';
        //     font-style: normal;
        //     font-weight: 300;
        //     font-size: 38px;
        //     line-height: 38px;
        //     // letter-spacing: .15rem;
        //     letter-spacing: 2.7px;
        //     // letter-spacing: 4px;
        // }
        // .heading{
        //     padding:10px;
        // }
        // .wrapper{
        //     .subheading{
        //         line-height: 30px;
        //         font-size: 15px;
        //         letter-spacing: 3px;
        //         width:100%;
        //     }
        // }
    }
</style>
