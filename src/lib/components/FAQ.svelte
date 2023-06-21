<script lang="ts">


    export let classNames = "";
    export let faqs = [
        {
            id: 1,
            question: "Wie fühlt sich Hypnose an?",
            answer: "Hypnose fühlt sich für jeden Menschen unterschiedlich an. Die meisten beschreiben ihn als einen sehr angenehmen und befreienden Entspannungszustand, der durch Leichtigkeit getragen wird. Sie können in diesem Zustand auftanken, neue Energien und Kraft sammeln. Hypnose kann aber auch als sehr aktiver Zustand empfunden werden, in dem der Prozess des Arbeitens wahrgenommen wird. So macht jeder Mensch seine eigenen Erfahrungen in der Hypnose. Während der Hypnose könne Sie normal kommunizieren und diese immer unterbrechen. ",
        },
        {
            id: 2,
            question: "Kann jeder hypnotisiert werden?",
            answer: "Hypnose als Bewusstseinszustand ist eine biologische Fähigkeit, die jeder Mensch besitzt."+
            " Daher ist grundlegend jeder Mensch hypnotisierbar. "+
            "Ausgeschlossen sind hierbei Menschen mit Erkrankungen des Gehirns oder neurologischen Störungen."+
            " Der Schlüssel zu einer erfolgreichen Hypnose liegt in der Motivation und dem Willen jedes einzelnen Menschen."+
            "Kontraindikationen für eine Hypnose"
        },
        {
            id: 3,
            question: "Ist Hypnose wie Schlaf?",
            answer: "Nein! Hypnose ist kein Schlaf. Der Mensch befindet sich in einem Bewusstseinszustand zwischen Wachbewusstsein und Schlaf. In diesem ist er in der Regel klar, wach, kann sich an alles erinnern und hat die Möglichkeit, die Hypnose zu unterbrechen.",
        },
        {
            id: 4,
            question: "Macht Hypnose willenlos?",
            answer: "Nein, ganz in Gegenteil! Der Wille des Hypnotiserten ist die Grundlage für den Erfolg der Hypnose, da wir immer mit den Wünschen und Willen des Hypnotiserten arbeiten. Hypnose macht nicht willenlos und es werden keine Geheimnisse aufgedeckt, wenn der Hypnotiesierte es nicht möchte.",
        },
        {
            id: 5,
            question: "Kann ich in Hypnose stecken bleiben?",
            answer: "Nein! Hypnose ist ein natürlicher, biologischer Bewusstseinszustand unseres Gehirns. Selbst wenn es Menschen gibt, die sich in diesem angenehmen Zustand der Entspannung so wohl fühlen, dass sie ihn aktuell nicht verlassen möchten, führen äußere Reize oder die natürlichen menschlichen Bedürfnisse dazu, wieder ins Hier und Jetzt zu gelangen.",
        },
        {
            id: 6,
            question: "Zahlt die Krankenkasse eine Hypnosesitzung?",
            answer: "Die gesetzlichen Krankenkassen übernehmen die Kosten nicht.  Ob die privaten Krankenkassen die Kosten übernehmen, sollten Sie vorab mit Ihrer Krankenkasse abklären. ",
        },
    ];
</script>

<div class="faqs {classNames}" />
{#each faqs as faq}
    <details>
        <summary>{faq.question}</summary>
        <p class="answer">{faq.answer}</p>
    </details>
{/each}

<style>
    :root {
        --font-size-question: 17px;
        --font-size-answer: 16px;
    }
    .faqs {
        width: 100%;
        height: auto;
    }
    summary {
        font-size: var(--font-size-question, 18px);
        font-weight: 600;
        margin-left: 10px;
        font-family: var(--font-family, "Segoe UI");
        text-transform: uppercase;
        color: var(--attention) !important;
    }
    .answer {
        font-family: var(--font-family, "Segoe UI");
        font-size: var(--font-size-answer, 16px);
        font-weight: 300;
        margin-left: 30px;
    }
</style>
