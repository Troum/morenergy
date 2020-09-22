const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};
