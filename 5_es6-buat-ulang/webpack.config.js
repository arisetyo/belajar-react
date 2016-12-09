var webpack = require('webpack');

module.exports = {
	entry: [
		"./src/index.js",
		'webpack-dev-server/client?http://0.0.0.0:3300',
		'webpack/hot/only-dev-server'
	],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/build'
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '/src',
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			mangle: true,
			sourcemap: false,
			beautify: false,
			dead_code: true
		})
	]
};