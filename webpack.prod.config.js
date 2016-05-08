const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: __dirname,

    entry: "./index.js",

    output: {
        path: path.join(__dirname, 'assets'),
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
                presets: [ 'es2015', 'es2016', 'react' ]
            }
        }, {
            test: /(\.scss|\.css)$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap!toolbox')
        }
        ]

    },

    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },

    toolbox: {
        theme: path.join(__dirname, 'app/toolbox-theme.scss')
    },

    postcss: [autoprefixer],

    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin()
    ]

};
