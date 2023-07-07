<script lang="ts">
    export let width = "100%";
    export let height = "100%";
    export let viewBox = "0 0 267 267";
    export let style = "";
    export let classNames = "";
</script>

<svg
    id="emailSvg"
    class="base {classNames}"
    {width}
    {height}
    {viewBox}
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
    <path
        d="M262.5,91.488l0,111.374c0,7.964 -6.466,14.43 -14.43,14.43l-229.473,-0c-7.964,-0 -14.43,-6.466 -14.43,-14.43l-0,-139.057c-0,-7.964 6.466,-14.43 14.43,-14.43l229.473,0c7.964,0 14.43,6.466 14.43,14.43l0,14.767l-129.167,61.446l-129.166,-61.446l-0,12.916l129.166,61.447l129.167,-61.447Z"
    />
</svg>

<style lang="scss">
    .base {
        color: var(--fill);
        transition: all 0.2s ease-in-out;
    }
    #emailSvg svg path .base {
        transition: all 0.2s ease-in-out;
    }
</style>
