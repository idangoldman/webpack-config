const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );


module.exports = {
    context: path.resolve( __dirname, '../frontend' ),

    entry: './index.js',

    output: {
        filename: 'script.js',
        path: path.resolve( __dirname, '../dist' )
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            frontend: path.resolve( __dirname, '../frontend' )
        }
    },

    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader', 'babel-loader'
                ]
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(gif|png|jpe?g|svg)(\?.*)?$/i,
                enforce: 'pre',
                use: {
                    loader: 'image-webpack-loader',
                    options: {
                        optipng: {
                            optimizationLevel: 7,
                            progressive: true
                        }
                    }
                }
            },
            {
                test: /\.(woff2?|ttf|eot)(\?.*)?$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg|woff2?|ttf|eot)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),

        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};
