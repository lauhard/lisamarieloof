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
        font-family: 'Segoe UI';
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 40px;
        width: 100%;
        // letter-spacing: .15rem;
        letter-spacing: 2.9px;
        // letter-spacing: 4px;
    }
    .heading{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // top:120px;
        // left:150px;
        width: 385px;
        // padding:15px;
        // background-color: rgb(172, 44, 44);
        height: 160px;
        box-sizing: border-box;
        // height: auto;
    }
    .wrapper{
        color:var(--text);
        display: flex;
        flex-direction: column;
        .line-1{
            font-size: 15px;
            line-height: 18px;
            // letter-spacing: 0.22em;
            // letter-spacing: 3.3px;
            letter-spacing: 3.5px;

        }
        .line-2{
            // letter-spacing: .15rem;
            // letter-spacing: 4px;
            .hypnose{
                color: var(--secondary);
            }
        }
        .subheading{
            line-height: 30px;
            font-size: 15px;
            // letter-spacing: .17rem;
            letter-spacing: 3.5px;
            width:100%;
        }
    }
    .separator {
        background-color: var(--secondary);
        width:233px;
        height: 3px;
        // top:246px;
        align-self: flex-start;
        border-radius: 5px;
    }
    @media screen and (max-width: 480px) {
        span{
            font-family: 'Segoe UI';
            font-style: normal;
            font-weight: 300;
            font-size: 38px;
            line-height: 38px;
            // letter-spacing: .15rem;
            letter-spacing: 2.7px;
            // letter-spacing: 4px;
        }
        .heading{
            padding:10px;
        }
        .wrapper{
            .subheading{
                line-height: 30px;
                font-size: 15px;
                letter-spacing: 3px;
                width:100%;
            }
        }
    }


</style>