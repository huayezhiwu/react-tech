const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    devtool: 'source-map',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                        // plugins: [require('plugin-transform-runtime')]
                    }
                },
                
                  
                  

               
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ],
    },
    // plugins: [new HtmlWebpackPlugin()],

    devServer: {
        contentBase: '.',
        compress: true,
        port: 8686

    }
}
