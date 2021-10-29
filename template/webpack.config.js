const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	entry: {
		"sample/sample-kintone": "./src/sample/sample-kintone.ts"
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist-web'),
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
		fallback: {
			// "stream": require.resolve("path-browserify") // polyfillが不要であれば、ここの値をfalseにすれば良い。
			"stream": false,
			"crypto": false
		}
	},

	module: {
		rules: [
			{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.json$/, loader: 'json-loader', type: "javascript/auto" },
			{ test: /\.css$/i, use: ['style-loader', 'css-loader'] },
			{
				test: /\.scss/, // 対象となるファイルの拡張子
				use: [
					// linkタグに出力する機能
					"style-loader",
					// CSSをバンドルするための機能
					{
						loader: "css-loader",
						options: {
							// オプションでCSS内のurl()メソッドの取り込みを禁止する
							url: false,
							// ソースマップの利用有無
							sourceMap: true,

							// 0 => no loaders (default);
							// 1 => postcss-loader;
							// 2 => postcss-loader, sass-loader
							importLoaders: 2
						}
					},
					{
						loader: "sass-loader",
						options: {
							// ソースマップの利用有無
							sourceMap: true
						},
					},
				],
			},
		],
	},

	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	]
};
