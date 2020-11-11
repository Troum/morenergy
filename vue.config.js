const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
    chainWebpack(config) {
        config.plugins.delete('prefetch');
        config.plugin('CompressionPlugin').use(CompressionPlugin);
    },
    devServer: {
        proxy: `${process.env.VUE_APP_API_URL}`
    }
};
