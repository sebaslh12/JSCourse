const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        // __dirname gives us the absolute path to the project folder
        // path is a node library to get all the path methods
        // We have to do this because path needs an absolute path and it has to be compatible with everyone in every os
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    }
}
