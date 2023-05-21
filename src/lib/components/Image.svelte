<script>
	import { onMount } from 'svelte';

    export let figcaption=''
    export let src="";
    export let alt="image";
    export let width = "auto"
    export let height = "300px"
    // onMount(()=>{
    //     loaded=true;
    // })  
</script>
<svelte:head>
    <link rel="preload" as="image" href="{src}" />
</svelte:head>

    <figure>
        <img
            src="{src}" 
            alt="{alt}"
            srcset="" 
            width="{width}"
            height="{height}"
        >
        {#if figcaption.length > 0}
            <figcaption class="figure__figcation">
                {figcaption}
            </figcaption>
        {/if}
    </figure>

<style>
    figure {
        width:100%; 
        height:100%; 
        overflow:hidden; 
        position:relative;
    }
    img {
        max-height:inherit;
        height:inherit;
        width: auto;
        max-width:inherit;
        width:auto;
        object-fit: contain;
    }
    figcaption {
        background:#fff; 
        color:var(--text);
        position:absolute; 
        bottom:0px; 
        font-size:10px; 
        width:100%; 
        margin:0px; 
        padding:0px;
    }
</style>