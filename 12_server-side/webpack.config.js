module.exports = {
	entry: "./src/index.js",
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