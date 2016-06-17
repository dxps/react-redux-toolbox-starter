const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: __dirname,

    devtool: 'inline-source-map',

    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },

    entry: "./index.js",

    output: {
        path: path.join(__dirname, 'build'),
        filename: "app.js",
        publicPath: "/assets/"
    },

    module: {

        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            include: __dirname,
            query: {
                presets: [ 'es2015', 'es2016', 'react', 'react-hmre' ]
            }
        }, {
            test: /(\.scss|\.css)$/,
            // ExtractTextPlugin does not work with HMR, but it will be included in webpack prod config
            // loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap'
        }
        ]

    },

    resolve: {
        extensions: ['', '.jsx', '.scss', '.css', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },

    postcss: [autoprefixer],

    sassLoader: {
        data: '@import "' + path.resolve(__dirname, 'app/theme/_config.scss') + '";'
    },

    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        new ExtractTextPlugin('main.css', { allChunks: true }),
        new webpack.NoErrorsPlugin()
    ]

};
