<script lang="ts">
    import tel from "$lib/svg/telephone.svg";
    import mail from "$lib/svg/mail-solid.svg";
    export let className = "";
</script>

<header class="contact {className}">
    <div class="wrapper">
        <header class="card-header">
            <h5>Terminvereinbarung</h5>
        </header>
        <p>
            Sie können Termine gerne telefonisch oder über E-Mail vereinbaren.
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
</header>

<style lang="scss">
    .cta {
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
        text-align: center;
    }
    h5 {
        font-family: var(--font-family, "Segoe UI");
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        letter-spacing: 0.05rem;
        color: #ffffff;
    }
    .contact {
        height: auto;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        .wrapper {
            .card-header {
                height: 40px;
                width: 100%;
                background: #5d5d5d;
                display: flex;
                align-items: center;
                padding-left: 15px;
                h5 {
                    color: white;
                }
            }
            p {
                font-weight: 300;
                font-size: 14px;
                font-family: var(--font-family, "Segoe UI");
                padding: 15px 20px 0 20px;
            }
            .contact-buttons {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .cta {
                    font-size: 13px;
                    padding: 10px 15px;
                    margin-top: 4px;
                    max-width: 200px;
                   
                }
                justify-content: space-between;
                padding: 15px;
            }
        }
    }

    @media screen and (min-width: 365px) and (max-width: 1093px) {
        // .contact {
        //     .wrapper {
        //     //    width: 100%;

        //         .contact-buttons {
        //             background: #fff;
        //             display: flex;
        //             flex-direction: column;
        //             justify-content: space-between;
        //             align-items: center;
        //             // width: 100%;
        //             .cta {
        //                 width: 250px;
        //             }
        //         }
        //     }
        // }
    }
</style>
