/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webconfig = {
    entry: {
        app: ['./src/index.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname, 'src/'),
                ],
            },
            {
                test: /\.json$/,
                loaders: ['json-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract({
                    notExtractedLoader: 'style-loader',
                    loader: ['css-loader?sourceMap', 'postcss-loader'],
                }),
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    notExtractedLoader: 'style-loader',
                    loader: ['css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap'],
                }),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
                loaders: ['file-loader'],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'node_modules/'),
        ],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    },
    postcss: () => [autoprefixer],
    output: {
        path: `${__dirname}/public`,
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),
        new ExtractTextPlugin({ filename: '[name]-[contenthash].css', allChunks: true }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-au/),
        new HtmlWebpackPlugin({
            template: 'assets/templates/index.ejs',
            title: 'Smartforms Playground',
            favicon: 'assets/images/favicon.ico',
            chunksSortMode: 'dependency',
            version: process.env.GITVERSION_INFORMATIONALVERSION || 'dev',
        }),
    ],
    devtool: 'cheap-module-source-map',
};

module.exports = webconfig;

