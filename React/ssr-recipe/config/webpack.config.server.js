const paths = require('./paths');

module.exports = {
    mode: 'production',
    extry: paths.ssrIndexJs,
    target: 'node',
    output:{
        path: paths.ssrBuild,
        filename: 'server.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: paths.publicUrlOrPath,
    }
};