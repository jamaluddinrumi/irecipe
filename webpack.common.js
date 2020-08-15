const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'iRecipe - Resep Dari Sahabat Untuk Sahabat',
            template: './src/index.html',
            meta: { 
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                charset: 'UTF-8'
            }
        })
    ],
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
}