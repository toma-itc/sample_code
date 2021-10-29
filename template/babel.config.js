module.exports = function (api) {
	api.cache(true);
	const presets = [
		[
			"@babel/preset-env",
			{
				"useBuiltIns": "usage",
				"corejs": 3,
			}
		],
		"@babel/typescript",
		[
			'@babel/preset-react',
			{
				development: process.env.NODE_ENV === 'development',
			},
		]
	];
	const plugins = [
		[
			"@babel/proposal-class-properties"
		],
		["module-resolver", {
			"root": ["."],
			"alias": {
				"@config": "./config",
				"@src": "./src",
			},
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}]
	];
	return {
		presets,
		plugins,
	}
}
