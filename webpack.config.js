const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const ENTRY_DIR = path.resolve(__dirname, 'src/app.js');

module.exports = {
	entry: ENTRY_DIR,
	output: {
		path: BUILD_DIR,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.jsx?$/, 
				exclude: /node_modules|bower_components/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}
};

