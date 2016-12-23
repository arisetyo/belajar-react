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
				test: /\.js/,
				loader: 'babel',
				include: __dirname + '/src'
			}
		]
	}
};