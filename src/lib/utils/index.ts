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