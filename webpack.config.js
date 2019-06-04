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
            },
            { test: /\.scss/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ]
    },
    output:{
        filename: 'build.js',
        path: __dirname + '/docs'
    },
    plugins: [HTMLWebpackPluginConfig]
}