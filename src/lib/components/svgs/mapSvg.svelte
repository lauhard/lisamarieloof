<script lang="ts">
    export let width = "100%";
    export let height = "100%";
    export let viewBox = " 0 0 267 267";
    export let style = "";
    export let classNames = "";
</script>

<svg
    id="mapSvg"
    class="base {classNames}"
    {width}
    {height}
    {viewBox}
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
    <path
        d="M12.188,231.332l74.344,-28.05l-0,-167.948l-74.344,28.051l-0,167.947Zm158.485,0l-74.679,-28.05l-0,-167.948l74.679,28.051l0,167.947Zm9.462,0l74.344,-28.05l0,-167.948l-74.344,28.051l0,167.947Z"
    />
</svg>

<style lang="scss">
    .base {
        color: var(--fill);
        transition: all 0.5s ease-in-out;
    }
    #mapSvg svg path .base {
        transition: all 0.5s ease-in-out;
    }
</style>
