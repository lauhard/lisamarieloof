//check if observer is instantiated

//create an observer if not exists

//write action

export enum ObserveProps {
    scrollDirection = "scrollDirection",
    boundingClientRect = "boundingClientRect",
    intersectionRatio = "intersectionRatio",
    intersectionRect = "intersectionRect",
    isIntersecting = "isIntersecting",
    rootBounds = "rootBounds",
    target = "target",
    time = "time",
}

let intersectionObserver:IntersectionObserver;

export const observer = (node:HTMLElement, params:any) => {
   const {options, observerProp} = params;
    if(intersectionObserver) return;
    intersectionObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry:IntersectionObserverEntry)=>{
            switch (observerProp) {
                case "isIntersecting":
                    {
                        const eventName = entry.isIntersecting ? 'enter':'exit';
                        entry.target.dispatchEvent(new CustomEvent(eventName));
                    }
                    break;
                default:
                    break;
            // Each entry describes an intersection change for one observed
            // target element:
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
            }
        })
    }, options)
    intersectionObserver.observe(node);
    return {
        destroy() {
            console.log("destroy observer");
            intersectionObserver.unobserve(node);
        }
    }
}

