<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let classNames = "";
    export let title = "scroll down";

    const dispatch = createEventDispatcher();
</script>

<button on:click={(e)=>dispatch("action",e)}
    type="button"
    title="{title}"
    aria-label="auto"
    aria-live="polite"
    class="base {classNames}"
>
    <slot></slot>
</button>
<style lang="scss">
    .base {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        // min-width: 45px;
        // width: 45px;
        // min-height: 45px;
        // height: 45px;
        // border-radius: 50%;
        color: var(--text);
        // background-color: var(--primary);
        // background-color: blue;
        &:hover {
            // background-color: var(--primary-hover);
            color: var(--text);
            transition: all 0.3s ease-in-out;
            // animation: hover 4s ease-in-out infinite;
        }
    }
</style>