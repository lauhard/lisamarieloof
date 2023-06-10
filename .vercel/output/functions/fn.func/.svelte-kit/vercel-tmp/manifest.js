export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4cc7884e.js","app":"_app/immutable/entry/app.9ba8f4ad.js","imports":["_app/immutable/entry/start.4cc7884e.js","_app/immutable/chunks/index.dc0e088a.js","_app/immutable/chunks/singletons.816954cd.js","_app/immutable/entry/app.9ba8f4ad.js","_app/immutable/chunks/index.dc0e088a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			{
				id: "/kontakt",
				pattern: /^\/kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/leistungen",
				pattern: /^\/leistungen\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/ueber-mich",
				pattern: /^\/ueber-mich\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
