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
            Sie können Termine gerne telefonisch oder über E-Mail
            vereinbaren.
        </p>

        <div class="contact-buttons">
            <a class="cta" type="button" href="tel:+4369919048032">
                <img
                    alt="svg icon"
                    src={tel}
                    width="30"
                    height="30"
                />
                +43 69919048032
            </a>

            <a class="cta" type="button" href="/kontakt">
                <img
                    alt="svg icon"
                    src={mail}
                    width="30"
                    height="30"
                />
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
        /* identical to box height */
        text-align: center;
    }
    h5 {
        font-family: var(--font-family, "Segoe UI");
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;

        /* identical to box height */
        letter-spacing: 0.05rem;
        color: #ffffff;
    }
    .contact {
        // position: absolute;
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
            padding: 10px 15px 40px 15px;
        }
        .contact-buttons {
            .cta {
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
