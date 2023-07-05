<script lang="ts">
    import LogoSvg from "./svgs/LogoSvg.svelte";
</script>

<footer>
    <div class="grid">
        <div class="cell logo">
            <div class="svg-wrapper">
                <LogoSvg
                    className="footer-background-svg"
                    animation={true}
                    --svg-stroke-width="0px"
                />
            </div>
        </div>
        <div class="cell contact">
            <div class="address-wrapper">
                <h5>Kontakt</h5>
                <p>Lisa-Marie Loof</p>
                <p>Praxisstraße 33</p>
                <p>9020 Klagenfurt</p>
                <p>Austria</p>
            </div>
            <div class="contact-wrapper ">
                <ul>
                    <li>
                       <a class="text" href="tel:+4367761750953">Tel: +43 (0) 67761750953</a>
                    </li>
                    <li>
                        <a class="text" href="mailto:praxis@lisaloof.at">Mail: praxis@lisaloof.at</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cell sitemap">
            <div class="sitemap-wrapper  ">
                <h5>Links</h5>
                <ul>
                    <li>
                        <a class="text" href="/">Startseite</a>
                    </li>
                    <li>
                        <a class="text" href="/leistungen">Leistungen</a>
                    </li>
                    <li>
                        <a class="text" href="/ueber-mich">Über mich</a>
                    </li>
                    <li>
                        <a class="text" href="/kontakt">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cell legal-notice">
            <div class="legal-notice-wrapper ">
                <h5>Rechtliches</h5>
                <ul>
                    <li>
                        <a class="text" href="#">Impressum</a>
                    </li>
                    <li>
                        <a class="text" href="#">Datenschutz</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        position: relative;
        width: 100%;
        min-height: 300px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: var(--primary);
        background-color: rgb(96, 137, 124);
        background-color: rgb(82, 91, 88);
        // background-color: rgb(65, 71, 69);
        .grid {
            position: relative;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
            grid-template-rows: auto;
            width: 100%;
            height: 100%;
            min-height: 350px;
            padding-top:20px;
            box-sizing: border-box;
            z-index: 0;
        }
    }

    .cell {
        display: grid;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 20px;
        justify-content: end;
        justify-content: left;
        z-index: 10;
        li {
            margin: 0;
            padding: 0;
        }
        a,
        p {
            color: #fff;
            font-weight: 100;
        }
        a:hover{
            color:var(--primary);
        }
        h5 {
            color: #378d93;
            color: var(--secondary);
            font-weight: 500;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 0px;
            line-height: 1;
            &:after {
                content: "";
                display: block;
                width: 4rem;
                height: 1px;
                background-color: #378d93;
                background-color: var(--secondary);
                margin-top: 5px;
            }
        }
    }
    .logo {
        display: grid;
        grid-row: span 3;
        height: 100%;
        order: 1;
        bottom: 0px;
        .svg-wrapper {
            position: absolute;
            height: 100%;
            left: 10px;
            bottom: 10px;
            padding:15px;
            :global(.footer-background-svg) {
                position: relative;
                height: 100%;
                max-width:300px;
                z-index: 0 !important;
            }
        }
    }
    .contact {
        order: 2;
        justify-content: left;

        .address-wrapper {
            width: 250px;
        }
    }
    .sitemap {
        order: 3;
        h5 {
            &:after {
                content: "";
                width: 2.7rem;
            }
        }
        .sitemap-wrapper {
            width: 250px;
        }
    }
    .legal-notice {
        order: 4;
        h5 {
            &:after {
                content: "";
                width: 6rem;
            }
        }
    }
    @media screen and (max-width: 705px) {
        footer {
            .grid {
                .cell {
                    padding-left: 20px;
                }
                .logo{
                    position: absolute;
                    order: 5;
                    grid-column: span auto;
                    grid-row: span auto;
                    right:-70%;
                    height: 100%;
                    bottom: 10px;

                    .svg-wrapper {
                        position: absolute;
                        height: 90%;
                        bottom: 10px;
                        width: 100%;
                        max-width: 100%;
                        :global(.footer-background-svg) {
                            position: relative;
                            height: 100%;
                            width: 100%;
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        footer {
            .grid {
                grid-template-columns: repeat(2, min-max(80px, 1fr));
                grid-template-rows: repeat(3, min-max(180px, 1fr));
                .cell {
                    margin-left: 20px;
                }
                .logo{
                    order: 5;
                    grid-column: span auto;
                    grid-row: span auto;
                    height: 100%;
                    .svg-wrapper {
                        position: absolute;
                        bottom: 0px;
                        right:2%;
                        height: 100%;
                        width: 100%;
                        max-width: 100%;
                        :global(.footer-background-svg) {
                            position: relative;
                            height: 100%;
                            width: 100%;
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
