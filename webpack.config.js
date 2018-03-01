const webpack = require("webpack");
const path = require("path");

const config = {
	//页面入口文件配置
	entry:path.join(__dirname,'app.js'),

	//入口文件输出配置
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'dist')
	},

	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test:/\.(png|jpg)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							limit:8192
						}
					}
				]
			}
		]
	}
}

module.exports = config;