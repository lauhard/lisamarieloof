<script lang="ts">
    export let open:boolean = false;
</script>

<div class="burger" on:mousedown={()=>{open=!open;}} class:open={open === true}>
    <div class="bar first"></div>
    <div class="bar second"></div>
    <div class="bar third"></div>
</div>

<style lang="scss">
    .burger {
        width: 2.5rem;
        height: 1.9rem;
        border: 0.5px solid var(--primary);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: .25rem;
        position: relative;
        margin-right:30px;
        box-sizing: border-box;
        &:hover{
            .bar{
                border:1px solid var(--primary);
            }
        }
    }
    .bar {
        width: 2rem;
        padding: 0;
        border-radius: 2px;
        height: 1px;
        border:1px solid var(--text);
        transition: all 0.1s ease-in-out;
        box-sizing: border-box;
        overflow: hidden;
        
    }
    .first {
        transition: all 0.1s ease-in-out;
        width: 1.6rem;
       
    }
    .second {
        transition: all 0.2s ease-in-out;
        width: 2rem;
    }
    .third {
        transition: all 0.3s ease-in-out;
        width: 1.3rem;
    }
    .open {
        align-items: center;
        background: var(--white);
        .second {
            background: transparent;
            width: 0;
            height: 0;
            border: 1px solid transparent;
            transition: all 0.1s ease-in-out;
        }
        .first {
            background: var(--primary);
            position: absolute;
            transform: rotate(45deg);
            width: 1.4rem;
            height: 1px;
            border:1px solid var(--primary);
            transition: all 0.1s ease-in-out;

        }
        .third {
            background: var(--primary);
            position: absolute;
            transform: rotate(-45deg);
            width: 1.4rem;
            height: 1px;
            border:1px solid var(--primary);
            transition: all 0.3s ease-in-out;
        }
    }
</style>
