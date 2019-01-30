const path = require('path');
const webpack = require('webpack');
const { AureliaPlugin, ModuleDependenciesPlugin } = require('aurelia-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environmentSettings = require("./envsettings.json").ASPNETCORE_ENVIRONMENT;

module.exports = (env, argv) => {
	console.log("mode=", environmentSettings);
	const isDevBuild = environmentSettings !== "Production";
	const cssLoader = { loader: isDevBuild ? "css-loader" : "css-loader?minimize" };
	
	function resolve(dir) {
		return path.join(__dirname, 'wwwroot', dir);
	}

	return [{
		node: {
			fs: 'empty'
		},
		target: "web",
		mode: isDevBuild ? "development" : "production",
		entry: { app: ['aurelia-bootstrapper', 'bluebird'] },
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			modules: ['src', 'node_modules'].map(x => path.resolve(x)),
			alias: {}
		},
		output: {
			path: path.join(__dirname, "wwwroot", "dist"),
			publicPath: "/dist/",
			filename: "[name].js",
			chunkFilename: "[name].js"
		},
		module: {
			rules: [
				{ test: /\.(woff|woff2)(\?|$)/, loader: "url-loader?limit=1" },
				{ test: /\.(png|jpg|jpeg|gif|svg|eot|ttf)(\?|$)/, loader: "url-loader?limit=100000" },
				{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
				{ test: /\.html$/i, use: "html-loader" },
				// use Bluebird as the global Promise implementation:
				{ test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
				{ test: /\.css(\?|$)/, include: [/node_modules/], use: [{ loader: MiniCssExtractPlugin.loader }, cssLoader] },
				{ test: /\.css$/i, exclude: [/node_modules/], issuer: /\.html$/i, use: cssLoader },
				{ test: /\.css$/i, exclude: [/node_modules/], issuer: [{ not: [{ test: /\.html$/i }] }], use: ["style-loader", cssLoader] },
				{ test: /\.scss$/i, issuer: /(\.html|empty-entry\.js)$/i, use: [cssLoader, "sass-loader"] },
				{ test: /\.scss$/i, issuer: /\.ts$/i, use: ["style-loader", cssLoader, "sass-loader"] }
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendor",
						chunks: "all"
					}
				}
			}
		},
		devtool: isDevBuild ? "source-map" : false,
		performance: {
			hints: false
		},
		plugins: [
			new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
			new webpack.ProvidePlugin({ Promise: "bluebird", $: "jquery", jQuery: "jquery", 'window.jQuery': 'jquery', Popper: ['popper.js', 'default'] }),
			new AureliaPlugin({ aureliaApp: 'boot' }),
			new ModuleDependenciesPlugin({}),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "[name].css",
				chunkFilename: "[name].css"
			}),
			new CopyWebpackPlugin([
				{ from: resolve('../static/favicon.ico'), to: resolve('dist/favicon.ico') },
				{ from: resolve('../static/loading.css'), to: resolve('dist/loading.css') },
				{ from: resolve('../static/webfonts'), to: resolve('dist/webfonts') }
			], { debug: 'info' })
		]
	}];
}
