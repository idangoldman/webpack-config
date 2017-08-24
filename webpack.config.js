// module.exports = function( env ) {
//     const merge = require( 'webpack-merge' );
//
//     const commonConfig = require( './webpack/common.js' );
//     const envConfig = require( `./webpack/${ env }.js` );
//
//     return merge([ commonConfig, envConfig ]);
// }


module.exports = function( env ) {
    return require( 'webpack-merge' )([
        require( './webpack/common.js' ),
        require( `./webpack/${ env }.js` )
    ]);
}
