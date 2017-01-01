var path = require('path');
var webpack = require('webpack');

var config = {
    entry: {
        main: './src/index.js',
    },
    resolve: {
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.json']
    },
    output: {
        path: path.resolve('./build/'),
        filename: '[name].js',
        publicPath: '/build/'
    },
    target: 'node',
    module : {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                exclude: /node_modules/
            }
        ]
    },
    eslint: {
        configFile: './.eslintrc',
        fix: true
    }
};

module.exports = config;