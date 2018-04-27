const path = require('path')

module.exports = {
	entry: ['./src/app.js' , './src/style.scss'],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'js')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
							outputPath: '../css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
}
