const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );


module.exports = {
    // devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                keep_fnames: true,
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            showErrors: false,
            template: './index.html',
            xhtml: true
        })
    ]
};
