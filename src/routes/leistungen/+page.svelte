<script lang="ts">
    import PriceTable from "$lib/components/Pricelist/PriceTable.svelte";
    import rauchfrei from "$lib/images/rauchfrei-min.webp";
    import digitaldetox from "$lib/images/digitaldetox-min.webp";
    import pruefungsangst from "$lib/images/pruefungsangst-min.webp";
    import selbstwert from "$lib/images/selbstwert-min.webp";
    import tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
    import leistungen from "$lib/images/leistungen.jpg";
</script>

<svelte:head>
    <title>Startseite</title>
    <link rel="preload" as="image" href={rauchfrei} />
    <link rel="preload" as="image" href={digitaldetox} />
    <link rel="preload" as="image" href={pruefungsangst} />
    <link rel="preload" as="image" href={selbstwert} />
    <link rel="preload" as="image" href={tiefenentspannung} />
    <link rel="preload" as="image" href={leistungen} />
</svelte:head>

<section class="section section-one">
    <div class="content-wrapper">
        <br />
        <div class="hero-image-wrapper">
            <img   src="{leistungen}" alt="" srcset=""  width="100%"
            height="300px">
            <h2  class="">Meine Leistungen</h2>

        </div>
        <br />
        <p>
            Mein Hypnose-Angebot für Sie basiert auf Themengebiete, auf welche
            ich mich spezialisiert und jeweils ein passendes Konzept dazu
            entwickelt habe. Dabei ist es mir wichtig, durch entsprechende
            Vorarbeit (Seelenreinigung) und das anschließende Festigen (Anker
            setzten, Selbsthypnose verankern) das angestrebte Ziel bestmöglich
            zu erreichen. Das ist einer der Gründe, weshalb meine Hypnose-Pakete
            auf mindestens zwei Terminen aufgebaut sind. Ein weiterer Grund ist,
            dass es den meisten Menschen mit jedem weiteren Termin immer
            leichter fällt in Hypnose hineinzugehen und es von Vorteil ist, die
            jeweiligen Termine erst einmal wirken zu lassen. Darüber hinaus
            besteht die Möglichkeit beim nächsten Termin neu aufgekommene
            Gedanken und Gefühle anzusprechen. Wichtig ist es aber trotzdem,
            darauf zu achten, dass die folgenden Termine nicht zu weit
            auseinander liegen. Falls es terminlich nicht anders möglich sein
            sollte, besteht die Möglichkeit Ihre Hypnosesitzungen auch am Stück
            abzuhalten.
        </p>
        <br>
        <p>
            Meine Pakete sind folgendermaßen aufgebaut: Die erste Einheit
            beinhalten ein kostenloses und unverbindliches Vorgespräch. Hierbei
            möchte ich mir ein Bild von Ihren Erwartungen, Zielen, Wünschen oder
            bereits vorhandenen Hypnose Erfahrungen machen. Danach werden wir
            gemeinsam Ihr persönliches Hypnose-Konzept besprechen. Wenn Sie sich
            nach dem Vorgespräch dazu entscheiden, mir Ihr Vertrauen zu schenken
            und sich eine gemeinsame Zusammenarbeit vorstellen können, legen wir
            direkt los und stellen die Weichen, um gemeinsam an Ihrem Thema zu
            arbeiten. In der zweiten Einheit können Gedanken und Gefühle, welche
            nachtäglich aufgekommen sind besprochen werden und wir arbeiten
            lösungs- und ressourcenorientiert an Ihrem Thema.
        </p>
        <br>
        <p>
            In der dritten Einheit (optional) möchte ich Ihnen anbieten, die
            Selbsthypnose bei Ihnen zu verankern, sodass Sie die Chance haben
            auch selbst in Hypnose zu gehen und zu arbeiten. Wichtig ist mir in
            der dritten Einheit ganz individuell zu arbeiten. Dass bedeutet,
            wenn nochmal etwas aufgekommen ist, worüber Sie sprechen möchten
            oder Ihr Thema nochmal vertiefen und verankern wollen.
        </p>
        <br />
        <div class="wrapper-services">
            <div class="service rauchfrei">
                <h2>Raucherentwöhnung</h2>
                <div class="service-image">
                    <img
                        src={rauchfrei}
                        alt="rauchfrei"
                        srcset=""
                        width="100%"
                        height="300px"
                    />
                </div>
                <div class="service-text">
                    <p>
                        Zigaretten enthalten nicht wenige äußerst toxische
                        Substanzen, wie Stickstoffoxide, Schwefeloxide und
                        Ammoniak. Allein in Österreich sterben im Jahr ungefähr
                        14.000 Menschen an tabakinduzierten Krankheiten, wobei
                        das Rauchen zu dem größten vermeidbaren Risikofaktor für
                        viele verschiedene Krankheiten zählt. Das und vieles
                        mehr wissen Sie aber bereits, sonst würden Sie sich hier
                        nicht über die Möglichkeit der Rauchentwöhnung mittels
                        Hypnose informieren.
                        <br />
                        Ich würde mich freuen, Sie kennenzulernen und Sie bei Ihrem
                        Vorhaben, mit dem Rauchen aufzuhören, zu unterstützen.
                    </p>
                </div>
                <PriceTable />
            </div>
            <div class="service selbstwert">
                <h2>Selbstwertsteigerung</h2>
                <div class="service-image">
                    <img src={selbstwert} alt="selbstwert" srcset="" />
                </div>
                <div class="service-text">
                    <p>
                        Wir alle sind viel zu oft von negativen Einflüssen
                        umgeben, die sich nicht gut auf unser Selbst auswirken.
                        Dabei wird unser Selbstwertgefühl angekratzt und
                        beschädigt. Daher ist es wichtig, sich mit sich selbst
                        auseinanderzusetzten, seine Gefühle, Gedanken und
                        Handlungen einschätzen zu können, um die Möglichkeit zu
                        haben eigenverantwortlich und selbstbewusst durch das
                        Leben zu gehen. Des Weiteren wirkt der Selbstwert als
                        ein wichtiger Schutzfaktor gegen Stress und ist somit
                        ein positiver Faktor für unsere Widerstandskraft und
                        Gesundheit.
                        <br />
                        Ich würde mich freuen, Sie kennenzulernen und Sie darin zu
                        unterstützen, Ihren Selbstwert zu steigern und sich einfach
                        wohlzufühlen.
                    </p>
                </div>
            </div>
            <div class="service digital-detox">
                <h2>Digital Detox</h2>

                <div class="service-image">
                    <img src={digitaldetox} alt="digital-detox" srcset="" />
                </div>
                <div class="service-text">
                    <p>
                        Instagram, Snapchat, WhatsApp, TikTok, YouTube und
                        vieles mehr sind unsere täglichen Begleiter, die jeden
                        Menschen unterschiedlich beeinflussen. Wir meinen, dass
                        dieses Thema nur Jugendliche betrifft, das ist aber
                        falsch. Auch die Erwachsenen bleiben von der
                        Informationsflut nicht verschont. Aber warum nutzen
                        viele die Sozialen Medien in einem Übermaß oder bekommen
                        ein ungutes Gefühl, wenn das Handy mal nicht in
                        Reichweite ist? Eine mögliche Ursache könnte ein
                        bestimmtes Hormon sein, welches bei der Handy-Nutzung
                        aktiv wird. Dopamin ist ein Glückshormon, das im Körper
                        ausgeschüttet wird, was dazu führt, dass wir uns gut
                        fühlen und diesen Zustand gerne aufrechterhalten wollen.
                        Wir haben das Bedürfnis nach mehr. Mit jedem Klingeln
                        oder Vibrieren des Handys findet eine Art
                        Konditionierung statt. Der Griff nach dem Handy und das
                        Anklicken der jeweiligen Benachrichtigung führt zur
                        Ausschüttung von Dopamin. Wir fühlen uns gut. Gerade in
                        der heutigen Zeit ist es daher wichtig, sich die Frage
                        zu stellen, warum wir die Sozialen Medien nutzen und wie
                        viel wir davon brauchen? Es geht hierbei keinesfalls um
                        die Verteufelung von Sozialen Medien, sondern vielmehr
                        darum, sich selbst zu überlegen, wie möchte ich damit
                        umgehen und eine annehmbare Einstellung dahingehend zu
                        entwickeln.
                    </p>
                </div>
            </div>
            <div class="service tiefenentspannugn">
                <h2>Tiefenentspannung</h2>
                <div class="service-image">
                    <img
                        src={tiefenentspannung}
                        alt="tiefenentspannung"
                        srcset=""
                    />
                </div>

                <div class="service-text">
                    <p>
                        Wir befinden uns in einem Zeitalter, welches durch
                        Schnelllebigkeit und Hektik geprägt ist. Wir nehmen uns
                        viel zu selten den Raum und die Zeit für uns selbst.
                        Einfach mal entspannen und uns eine Auszeit vom Alltag
                        nehmen, um unseren Körper und Geist in Einklang zu
                        bringen. Hierfür bietet die Tiefenentspannung mittels
                        Hypnose die perfekten Rahmenbedingungen. Ich würde mich
                        freuen, Sie kennenzulernen und Sie auf dem Weg der
                        Tiefenentspannung zu begleiten.
                    </p>
                </div>
            </div>
            <div class="service pruefungsangst">
                <h2>Entspannt Vortragen / Enspannt in die Prüfung</h2>

                <div class="service-image">
                    <img src={pruefungsangst} alt="pruefungsangst" srcset="" />
                </div>
                <div class="service-text">
                    <p>
                        Wer kennt es nicht? Es steht eine Prüfung oder ein
                        wichtiger Vortrag an und die Aufregung steigt in einem
                        hoch, man bekommt schwitzige Hände oder der Herzschlag
                        erhöht sich. Bei vielen Menschen führen solche
                        Situationen zu einem kompletten Blackout, was Sie
                        nachhaltig beschäftigt oder sogar belastet. Mittels
                        Hypnose ist es möglich, sich diese Situationen genauer
                        anzuschauen und aus einem anderen Blickwinkel zu
                        betrachten und anzunehmen Ich möchte Sie darin zu
                        unterstützen, entspanntere Vorträge zu halten oder
                        Prüfungen zu meistern und zusätzlich Ihr
                        Selbstbewusstsein zu stärken. Ich freue mich darauf Sie
                        kennenzulernen.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .hero-image-wrapper{
        height: 420px;
        width: 100%;
        overflow: hidden;
        position: relative;
        h2{
            position: absolute;
            font-weight: 600;
            font-size: 1.6rem;
            color:#fff;
            bottom: 0;
            z-index: 10;
            text-align: center;
            padding: 10px 40px;
            background-color: var(--primary-hover);
            width: auto !important;
            left:50%;
            transform: translateX(-50%);
        }
        img{
            width: 100%;
            height: 100%;
            object-fit:cover; 
            object-position:0px -100px;
            object-position:center;
            overflow: hidden;
        }
    }
    p {
        // flex: 1 1 auto;
        width: 100%;
        // font-family: var(--font-family, "Segoe UI");
        // font-size: var(--font-size-standard, 16px);
        // font-weight: var(--font-weight-standard, 300);
    }
    .section {
        position: relative;
        min-height: 100vh;
        height: 100%;
        width: 100%;
        min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        h2 {
            // background-color: red;
            width: 100%;
        }
    }

    .content-wrapper {
        box-sizing: border-box;
        display: flex;
        position: relative;
        flex-direction: column;
        background: var(--bg-content-wrapper, transparent);
        min-height: 100vh;
        height: 100%;
        width: 100%;
        max-width: var(--content-width, 1240px);
        // overflow: hidden;
        // background-color: green;

        padding: 100px 20px 0 20px;
    }
    .service-image {
        width: 50%;
        max-width: 400px;
        min-width: 400px;
        height: 100%;
        max-height: 350px;
        flex: 0 0 auto;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        // display: flex;
        float: right;
        margin-right: 30px;
        // margin-left: 30px;

        img {
            // object-position: 0% -20px;
            overflow: hidden;
        }
        box-sizing: border-box;

        // margin-bottom: 0.5rem;
    }

    .service-text {
        // p {
        //     // flex: 1 1 auto;
        //     width: 100%;
        //     font-family: var(--font-family, "Segoe UI");
        //     font-size: var(--font-size-standard, 16px);
        //     font-weight: var(--font-weight-standard, 300);
        // }
    }

    .service {
        height: auto;
        // background-color: red;
        min-height: 350px;
        // display: flex;
        // flex-direction: row;
        width: 100%;
        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        overflow: hidden;

        &:nth-child(odd) {
            .service-image {
                float: left;
                overflow: hidden;
            }
        }
        &:nth-child(even) {
            .service-image {
                float: right;
                overflow: hidden;
                margin-left: 30px;
            }
        }
        border-bottom: 0.5px solid var(--border-color, #b1b1b157);
    }
    .section-one {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-section-one);
        // overflow: hidden;
        // min-height: 1000px;
    }
    @media screen and (max-width: 640px) {
        .service {
            flex-direction: column;
            height: 100%;
            min-height: 0;

            // border-bottom: none;
            .service-image {
                float: none;
                width: 100%;
                min-width: 100%;
                height: auto;
                max-height: 350px;
                margin-right: 0;
                margin-left: 0;
                margin-bottom: 1.5rem;
                overflow: hidden;
                img {
                    overflow: hidden;
                }
            }
        }
    }
</style>
