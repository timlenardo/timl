'use strict';

exports.modifyWebpackConfig = function(_ref, options) {
	var config = _ref.config,
		stage = _ref.stage;

	var svgFiles = /\.icon$/;
	var svgLoader = `svg-sprite-loader`;

	switch (stage) {
		case `develop`: {
			config.loader(`svg-sprite`, {
				test: svgFiles,
				loaders: [ `svg-sprite-loader?${JSON.stringify({symbolId: '[name]-ico'})}` ]
			});

			return config;
		}
		case `build-css`: {
			config.loader(`svg-sprite`, {
				test: svgFiles,
				loaders: [ `svg-sprite-loader?${JSON.stringify({symbolId: '[name]-ico'})}` ]
			});

			return config;
		}
		case `develop-html`:
		case `build-html`: {
			config.loader(`svg-sprite`, {
				test: svgFiles,
				loaders: [ `svg-sprite-loader?${JSON.stringify({symbolId: '[name]-ico'})}` ]
			});
			return config;
		}
		case `build-javascript`: {
			config.loader(`svg-sprite`, {
				test: svgFiles,
				loaders: [ `svg-sprite-loader?${JSON.stringify({symbolId: '[name]-ico'})}` ]
			});
			return config;
		}
		default: {
			return config;
		}
	}
};
