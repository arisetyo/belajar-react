var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		"./src/index.js",
		'webpack-dev-server/client?http://0.0.0.0:3310',
		'webpack/hot/only-dev-server'
	],
	output: {
		path: 'build',
		filename: 'bundle.js',
		publicPath: '/build'
	},
	module: {
		loaders: [
			{
				// CSS imports
				test: /\.css$/,
				exclude: /node_modules/,
				loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				]
			},
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '/src'
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
};