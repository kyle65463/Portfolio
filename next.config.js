const path = require("path");
module.exports = {
	images: {
		domains: [],
	},
	trailingSlash: false,
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};

		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/home",
				permanent: true,
			},
		];
	},
};
