
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')



module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
            filename: 'principal.js',
            path: __dirname + '/public'
    },
  devServer: {
    static: './public',
    port: 8080,
    open: true,
    hot: true,
     warnings: false
    },
    optimization:{
        minimizer: [
            new TerserPlugin({
               
            }),
            new CssMinimizerPlugin()
        ]
    },

    plugins:[
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],

    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CCS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader', // Compila Sass para CSS
            ]
        },{
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource'
        }]
    }
}