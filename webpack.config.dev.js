// const { resolve } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js', //El archivo fuente que se va ir a produccion
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
      ],
    devServer: {
        static:{
            directory: path.join(__dirname, 'dist'),},
        compress: true,
        port: 3000,
        open: true, //Nos permite abrir el navegador para ver cambios en tiempo real
        
    }
}