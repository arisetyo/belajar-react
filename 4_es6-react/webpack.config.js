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
	//Plugin untuk mengoptimasi kode di bundle.js. Tidak diperlukan (optional) untuk transpilasi ES6 komponen React.
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