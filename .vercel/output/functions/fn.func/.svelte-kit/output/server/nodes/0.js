import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.19074852.js","_app/immutable/chunks/index.dc0e088a.js","_app/immutable/chunks/stores.53a9c27d.js","_app/immutable/chunks/singletons.816954cd.js","_app/immutable/chunks/LogoSvg.de8aeac5.js"];
export const stylesheets = ["_app/immutable/assets/0.739eb99c.css","_app/immutable/assets/LogoSvg.c40219ec.css"];
export const fonts = [];
