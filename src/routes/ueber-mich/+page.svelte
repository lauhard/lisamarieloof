<script>
    import leistungen from "$lib/images/leistungen.jpg";
    import cert from "$lib/images/cert.png";
</script>

<div class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                src={leistungen}
                alt=""
                srcset=""
                width="100%"
                height="300px"
            />
            <h2>Über Mich</h2>
        </div>
        <div class="cell about-me">
            <h2>Herzlich Willkommen</h2>
            <p>
                Ich freue mich sehr über Ihr Interesse und begrüße Sie auf
                meiner Homepage. Mein Name ist Lisa-Marie Loof, ich bin
                diplomierte Hypnose-Trainerin und studiere an der Alpen-Adria
                Universität in Klagenfurt. Ich habe dort 2020 meinen Bachelor of
                Science in Psychologie erlangt und bin gerade dabei, meinen
                Master of Science in Psychologie abzuschießen.Ich
            </p>
            <p>Während meines Studiums haben Themen wie</p>
            <ul>
                <li class="text">das Unterbewusstsein</li>
                <li class="text">Persönlichkeitsentwicklung</li>
                <li class="text">
                    Ressourcenaktivierung & Lösungsorientierung
                </li>
                <li class="text">
                    Ausschöpfung des eigenen ungenutzten Potenzials
                </li>
            </ul>
            <p>
                mein Interesse geweckt und ich habe erkannt, dass sich all diese
                wichtigen Konstrukte unter anderem in der Arbeit mit Hypnose
                wiederfinden. Mein Interesse für Hypnose entstand schon in
                meiner Jugend und hat mich seitdem nicht mehr wirklich
                losgelassen. Die Kombination meines Studiums der Psychologie und
                der Entscheidung die Ausbildung zur diplomierten
                Hypnose-Trainerin zu machen waren somit ein „Perfect Match“. Ich
                sehe mein Arbeiten als einen Kooperationsprozess zwischen meinen
                Klienten*innen und mir, der es Ihnen ermöglicht, in einen
                Zustand der Lern- und Aufmerksamkeitsfähigkeit zu gelangen, um
                ressourcen- und lösungsorientiert zu arbeiten.
            </p>
        </div>
        <div class="cell certificates">
            
            <img src={cert} alt="" srcset="" width="100%" height="300px" />
        </div>
    </div>
</div>

<style lang="scss">
    .section {
        --section-min-height: 100vh;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        // --bg-section: rgb(0, 26, 255);
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
    }
    .grid {
        // --bg-grid: #cf2ccce2;
        // --bg-grid-cell: #00ffc8;
        // --bg-current-cell: red;

        --grid-columns-desktop: repeat(2, 50vw, 50vw);
        // --grid-columns-desktop:repeat(auto-fill, minmax(400px, 1fr));
        --grid-rows-desktop: auto;
        --grid-rows-mobile: 210px 240px 380px auto;
        --grid-template-desktop: "heading heading image image"
            "heading heading image image";

        --grid-template-mobile: "";

        // --grid-gap: 10px;
        --grid-row-gap: 2rem;
        --grid-height: auto;
        --grid-min-height: 100%;
        // --grid-padding: 10px 0 0 0;
        --grid-width: 100%;

        padding: var(--grid-padding);
        background-color: var(--bg-grid);
        min-height: var(--grid-min-height);
        height: var(--grid-height);
        width: var(--grid-width);

        grid-gap: var(--grid-gap, 0px);
        grid-row-gap: var(--grid-row-gap, 0px);
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);

        box-sizing: border-box;
        overflow: hidden;
    }
    .cell {
        background-color: var(--bg-grid-cell, transparent);
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        min-height: auto;
    }
    .hero {
        margin-top: 3rem;
        height: 420px;
        overflow: hidden;
        justify-self: center;
        max-width: var(--content-width);
        h2 {
            position: absolute;
            font-weight: 600;
            font-size: 1.6rem;
            color: #fff;
            bottom: 0;
            z-index: 10;
            text-align: center;
            padding: 10px 40px;
            background-color: var(--primary-hover);
            width: auto !important;
            left: 50%;
            transform: translateX(-50%);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0px -80px;
            object-position: center;
            overflow: hidden;
        }
    }
    .about-me {
        padding: 0 1rem;

        h2 {
            text-align: center;
        }
        max-width: var(--content-width);
        justify-self: center;
        // background-color: red;
        ul {
            margin-top: 1rem;
            padding-left: 1rem;
            li {
               
                list-style-type: circle;
                font-weight: 400;
            }
        }
    }
    .certificates {
        max-width: var(--content-width);
        justify-self: center;
        height: 300px;
        display: grid;
        img{
            width:30%;
            min-width: 320px;
            height: auto;
            object-fit: cover;
            object-position: 0px -80px;
            object-position: center;
            overflow: hidden;
            justify-self: center;
        }
    }
</style>
