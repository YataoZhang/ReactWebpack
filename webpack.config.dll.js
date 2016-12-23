/**
 * Created by zhangyatao on 2016/12/21.
 */
const webpack = require('webpack');
var pagkages = require('./package.json');
const vendors = Object.keys(pagkages.dependencies);

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    output: {
        path: 'build',
        filename: '[name].js',
        library: '[name]_[chunkhash]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname
        }),
        new UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            }
        })
    ]
};