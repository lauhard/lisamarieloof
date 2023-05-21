<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { createEventDispatcher, getContext } from 'svelte';
  
    let prevRatio = 0.0;
    let container:HTMLElement;
    let observer:IntersectionObserver;

    let { noIntersecting, isIntersecting }:any  = getContext('intersectionObserver');
  
    onMount(() => {
        if (browser) {
            const handleIntersect: any = (entries:Array<HTMLElement>, observer:IntersectionObserver) => {
                // console.log("handleIntersect")
                entries.forEach((entry:any) => {
                    if (entry["isIntersecting"]) {
                        // observer.unobserve(entry.target);
                        // console.log(entry.target)
                        isIntersecting(entry.target);
                    } else {
                        noIntersecting(entry.target);
                    }

                    if (entry.intersectionRatio > prevRatio) {
                        // entry.target.style.backgroundColor = "red"
                    } else {
                        // entry.target.style.backgroundColor = "white"
                    }

                    prevRatio = entry.intersectionRatio;
                    // console.log("prevRatio: ",prevRatio)
                });
            };
            const options = { threshold: .5, rootMargin: "0px" };
            
            observer = new IntersectionObserver(handleIntersect, options);
            observer.observe(container);
        }
    });
  
    onDestroy(() => {
        console.log("onDestroy")
        if (observer) {
            observer.disconnect();
            console.log("observer destroyed")
        }
    });
  </script>
  
 <div bind:this={container}>
    <slot />
  </div>