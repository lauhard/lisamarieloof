<script lang="ts">
    import LogoSvg from "./svgs/LogoSvg.svelte";
</script>

<footer>
    <div class="flex flex-row footer-wrapper">
        <div class="logo large">
            <div class="svg-wrapper">
                <LogoSvg
                    className="footer-background-svg"
                   
                    animation={true}
                    --leaves-main="#f0f0f01a"
                    --leaves-overlay="#f0f0f01a"
                    --tree-color="#f0f0f01a"
                    --tree-overlay="#f0f0f01a"
                    --svg-stroke-width="0px"
                />
            </div>
        </div>
        <div class="flex-wrapper flex flex-row flex-wrap space-between ">
            <div class="box contactd ">
                <h4>Kontakt</h4>
                <div class="adress-wrapper fex justify-center align-center">
                    <p>Lisa-Marie Loof</p>
                    <p>Praxisstraße 33</p>
                    <p>9020 Klagenfurt</p>
                    <p>Austria</p>
                </div>
                <div class="contact-wrapper fex justify-center align-center">
                    <ul>
                        <li>
                           <a href="tel:+4369919048032">Tel: 069919048032</a>
                        </li>
                        <li>
                            <a href="mailto:praxis@lisaloof.at">Mail: praxis@lisaloof.at</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box sitemap ">
                <h4>Links</h4>
                <div class="sitemap-wrapper fex justify-center align-center">
                    <ul>
                        <li>
                            <a href="/">Startseite</a>
                        </li>
                        <li>
                            <a href="#">Über mich</a>
                        </li>
                        <li>
                            <a href="#">Leistungen</a>
                        </li>
                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box legal-notes">
                <h4>Rechtliches</h4>
                <div class="legal-notes-wrapper">
                    <ul>
                        <li>
                            <a href="#">Impressum</a>
                        </li>
                        <li>
                            <a href="#">Datenschutz</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</footer>

<style lang="scss">
    :global(.footer-background-svg) {

        position: absolute;
        min-height: 250px;
        height: 100%;
        max-width: 300px;
        width: auto;
        left:0;
        z-index: 0;
    }
    a, p, small{
        color:var(--text);
        font-family: var(--font-family, "Segoe UI");
        font-weight: 300;
        font-size: .93rem !important;
        line-height: 1.6rem;
        color:white;
    }
    a, ul, li{
        margin: 0;
        padding: 0;
    }
    .flex{
        display: flex;
    }
    .flex-wrap {
        flex-wrap:wrap;
        gap:20px;
    }
    
    .flex-row{
        flex-direction: row;
    }
    .space-between {
        justify-content: space-between;
    }
    .space-around {
        justify-content: space-around;
    }
    .footer-wrapper{
        position: relative;
    }
    .justify-center{
        justify-content: center;

    }
    .align-center{
        justify-content: center;
    }
    .box {
        width:30%;
        min-width: 200px;
        height: auto;
        width:auto;
        z-index: 999;
       
    }
    .large{
        height: 100%;
        min-height: 100%;
        align-self: start;
        align-items: start;
        justify-content: start;
        width: 300px;
    }
    
    footer {
        padding:20px 30px;
        min-height: 300px;
        height: auto;
        width: 100%;
        background-color: var(--primary);
            .logo {
                
            }
            .flex-wrapper{
                width: 100%;
                .contact-wrapper{

                }
                .legal-notes{

                }
            }
          
        }
    
</style>
