const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        noInfo: true,
        stats: 'minimal'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'iRecipe - Remember Recipes, Remember iRecipe!',
            template: './src/index.html',
            meta: { 
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                charset: 'UTF-8'
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/img/favicon', to: 'img/favicon'}
            ]
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