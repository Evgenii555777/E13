const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './dist/script.js',


    mode: isDevelopment ? 'development' : 'production',

    devServer: isDevelopment ? {
        static: './dist',
        open: true,
        hot: true,
        proxy: {
            '/api': 'http://localhost:3000'
        }
    } : {},

    plugins: isDevelopment ? [
        new webpack.HotModuleReplacementPlugin()
    ] : []
};
