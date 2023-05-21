import type { LayoutLoad } from "./$types"

export const load = (({url})=> {
    const currentRoute = url.pathname;
    console.log("ssr works")
    return {
        currentRoute
    }
}) satisfies LayoutLoad