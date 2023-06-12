<script lang="ts">
    export let className="";
</script>

<header class="heading {className}">
    <h1 class="wrapper">
        <span class="line-1">Ihre Zeit</span>
        <span class="line-2">für <span class="hypnose">Hypnose</span> &</span>
        <span class="line-3">Weiterentwicklung</span>
        <span class="subheading">Entdecken Sie die Kraft von Hypnose</span>
        <div class="separator"></div>
    </h1>
</header>

<style lang="scss">
    span{
        font-family: var(--font-family, "Segoe UI");
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        font-size: 1.86rem;
        line-height:  1.86rem;
        width: 100%;
        letter-spacing: 2.9px;
        letter-spacing: .13rem;
        text-transform: uppercase;
        color: var(--text);
    }
    .heading{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background-color: #ffffff;
        box-sizing:border-box;
        white-space: nowrap;
        border:5px solid white;
        // box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        width: 22.5rem;
    }
    .wrapper{
        display: flex;
        box-sizing:border-box;
        flex-direction: column;
        border:2px solid var(--secondary);
        border:2px solid var(--primary);
        padding: .9rem;
        width: 100%;
        .line-1{
            font-size: 15px;
            font-size: .72rem;
            line-height: 18px;
            letter-spacing: 3.5px;
            letter-spacing: .206rem;
        }
        .line-2{
            .hypnose{
                color: var(--text);
                color: var(--secondary);
            }
        }
        .subheading{
            line-height: 30px;
            font-size: .72rem;
            letter-spacing: .206rem;
        }
    }
    .separator {
        background-color: var(--secondary);
        width:12.9rem;
        height: 3px;
        align-self: flex-start;
        border-radius: 5px;
    }
    @media screen and (min-width: 319px) and (max-width: 1093px) {
    //     span{
    //     font-family: var(--font-family, "Segoe UI");
    //     font-style: normal;
    //     font-weight: 300;
    //     font-size: 40px;
    //     font-size: 1.85rem;
    //     line-height:  1.85rem;
    //     width: 100%;
    //     letter-spacing: 2.9px;
    //     letter-spacing: .13rem;
    //     text-transform: uppercase;
    //     color: var(--text);
    // }
    // .heading{
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;
    //     background-color: #ffffff;
    //     box-sizing:border-box;
    //     white-space: nowrap;
    //     border:5px solid white;
    //     // box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);

    // }
    // .wrapper{
    //     width: 360px;
    //     display: flex;
    //     box-sizing:border-box;
    //     flex-direction: column;
    //     border:2px solid var(--secondary);
    //     border:2px solid var(--primary);
    //     // padding: 20px;
    //     .line-1{
    //         font-size: 15px;
    //         font-size: .70rem;
    //         line-height: 18px;
    //         letter-spacing: 3.5px;
    //         letter-spacing: .18rem;
    //     }
    //     .line-2{
    //         .hypnose{
    //             color: var(--text);
    //             color: var(--secondary);
    //         }
    //     }
    //     .subheading{
    //         line-height: 30px;
    //         font-size: .70rem;
    //         letter-spacing: .118rem;
    //     }
    // }
    // .separator {
    //     background-color: var(--secondary);
    //     width:12.9rem;
    //     height: 3px;
    //     // align-self: flex-start;
    //     // border-radius: 5px;
    // }
    }



</style>