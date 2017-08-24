const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );


module.exports = {
    devtool: 'eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            xhtml: true
        })
    ]
};
