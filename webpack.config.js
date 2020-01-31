const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.NODE_ENV;
const IS_PROD = MODE === "production";

module.exports = {
	entry: "./src/entry.js",
	output: {
		filename: "emails-editor.js",
		path: path.resolve(__dirname, "dist"),
		library: "EmailsEditor"
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.scss$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].min.css",
			chunkFilename: "[id].min.css"
		})
	],
	devtool: "inline-source-map"
};