import * as server from '../entries/pages/kontakt/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/kontakt/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/kontakt/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.649b4ca7.js","_app/immutable/chunks/index.44db831b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.a402edd0.js"];
export const stylesheets = ["_app/immutable/assets/3.7eec9294.css"];
export const fonts = [];
