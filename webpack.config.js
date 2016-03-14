var path = require('path');

module.exports = {
	entry: path.join(__dirname + '/js/bootstrap.js'),
	output: {
		path: path.join(__dirname, '/js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			include: path.join(__dirname, '/js'),
			loader: 'babel-loader'
		}]
	}
}