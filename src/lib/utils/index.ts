interface AnchorOps {
    id:string,
    offset?:number
}

export const scrollToAnchor = (anchorOps: AnchorOps):void => {
    const anchor: HTMLAnchorElement = document.getElementById(
        anchorOps.id
    ) as HTMLAnchorElement;
    const offsety = anchorOps.offset || 0;
    const position = anchor.getBoundingClientRect().top + window.pageYOffset + offsety;
    // section2.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    window.scrollTo({ top: position, behavior: "smooth" });
};

export const openMaps = () => {
    const lat = 46.63675228284946;
    const long = 14.318131612773715;
    /* if we're on iOS, open in Apple Maps */
    if (
        (navigator.platform.indexOf("iPhone") != -1) || 
        (navigator.platform.indexOf("iPad") != -1) || 
        (navigator.platform.indexOf("iPod") != -1)
    )
        window.open(`maps://maps.google.com/maps?daddr=<${lat}>,<${long}>&amp;ll=`);
    else /* else use Google */
        window.open(`https://maps.google.com/maps?daddr=<${lat}>,<${long}>&amp;ll=`);
}