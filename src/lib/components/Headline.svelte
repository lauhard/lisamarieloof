<script lang="ts">
    export let className = "";
</script>

<header class="heading {className}">
    <h1 class="wrapper">
        <span class="line-1">Ihre Zeit</span>
        <span class="line-2">für <span class="hypnose">Hypnose</span> &</span>
        <span class="line-3">Weiterentwicklung</span>
        <span class="subheading">Entdecken Sie die Kraft von Hypnose</span> 
        <div class="separator" />
    </h1>
</header>

<style lang="scss">
    span {
        font-family: var(--font-family, "Segoe UI");
        font-style: normal;
        font-weight: 300;
        font-size: 1.86rem;
        line-height: 2rem;
        width: 100%;
        letter-spacing: 0.13rem;
        text-transform: uppercase;
        color: var(--text);
        margin: 0;
        padding: 0;
    }
    .heading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background-color: #ffffff;
        box-sizing: border-box;
        white-space: nowrap;
        border: 5px solid white;
        // box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        // width: 22.5rem;
    }
    .wrapper {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        border: 2px solid var(--secondary);
        border: 2px solid var(--primary);
        padding: 0.9rem;
        width: 100%;
        .line-1 {
            font-size: 0.72rem;
            line-height: 18px;
            letter-spacing: 0.206rem;
        }
        .line-2 {
            .hypnose {
                color: var(--text);
                color: var(--secondary);
            }
        }
        .subheading {
            line-height: 1.2rem;
            font-size: 0.72rem;
            letter-spacing: 0.206rem;
        }
    }
    .separator {
        margin: 0;
        margin-top: 5px;
        padding: 0;
        background-color: var(--secondary);
        width: 12.9rem;
        height: 3px;
        align-self: flex-start;
        border-radius: 5px;
    }
    @media screen and (max-width: 420px) {
        .heading {
            width: auto;
            margin: 0;
            .wrapper {
                margin: 0;
                width: 100%;
                span {
                    font-size: 26px;
                    width: auto;
                }
                .line-2 {
                    .hypnose {
                        color: var(--text);
                        color: var(--secondary);
                    }
                }
                .subheading, .line-1 {
                    line-height: 1.2rem;
                    font-size: 0.68rem;
                    letter-spacing: 0.15rem;
                }
            }
        }
    }
</style>
