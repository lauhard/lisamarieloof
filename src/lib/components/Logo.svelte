<script lang="ts">
	import LogoSvg from '$lib/components/LogoSvg.svelte';

</script>

<div class="logo logo-wrapper">
    <div class="circle">
        <LogoSvg
            height="50px"
            animation={true}
            --leaves-main=#fff
            --leaves-overlay=#fff
            --tree-color=#fff
            --tree-overlay=#fff
        ></LogoSvg>
    </div>
    <div class="brand-name">
        <h1>Lisa-Marie Loof</h1>
    </div>
</div>

<style lang="scss">
    :global(#logoSvg){
        width: auto;
        z-index: 100000;
        display: flex;
        vertical-align: center;
    }
    .logo-wrapper{
        min-width:220px;
        display: flex;
        flex-direction: row;
        vertical-align: center;
        align-items: center;
    }

    .circle{
        min-width: 70px;
        width: 70px;
        height: 70px;
        min-height: 70px;
        background: #77B6BA;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid white;
    }
    .brand-name{
        border: 1.5px solid #77B6BA;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 5px;
        background-color: white;
        h1{
            font-size: 16px;
            font-family: 'Segoe UI';
            font-weight: 400;
            color:#77B6BA;
            margin: 0;
            padding: 0;
            line-height: 1;
            letter-spacing: 1px;
        }   
        margin:0 0 10px 10px ;
    }
</style>