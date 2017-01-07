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
	}
};