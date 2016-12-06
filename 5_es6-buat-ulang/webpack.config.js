var webpack = require('webpack');

module.exports = {
	entry: './src',
	output: {
		path: 'build',
		filename: 'bundle.js',
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