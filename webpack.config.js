/**
 * Created by zhangyatao on 2016/12/21.
 */
var webpack = require('webpack');
var postCssImport = require('postcss-import');
var preCss = require('precss');
var autoprefixer = require('autoprefixer');
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});
// webpack.config.js
module.exports = {
    entry: {
        app: './components/index.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
                    'postcss-loader?parser=postcss-scss'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        definePlugin,
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest.json')
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    postcss: function plugins(bundler) {
        return [
            postCssImport({addDependencyTo: bundler}),
            preCss(),
            autoprefixer({
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 35',
                    'Firefox >= 31',
                    'Explorer >= 9',
                    'iOS >= 7',
                    'Opera >= 12',
                    'Safari >= 7.1'
                ]
            })
        ];
    }
};