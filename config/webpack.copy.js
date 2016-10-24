var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: './dist',
        filename: '[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'package.json', to: 'package.json' },
            { from: 'server/**/*' }
        ])
    ]
};
