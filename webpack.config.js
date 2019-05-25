var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports={
    entry: [ "babel-polyfill", __dirname + '/app/index.js'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                              '@babel/react',{
                              'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            }
        ]
    },
    output:{
        filename: 'build.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
}