const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.[contenthash].js',
        path:path.resolve(__dirname,'./dist'),
        clean: true
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            }
        ]
    },
    plugins:[new HtmlWebpackplugin({filename:'index.html'})],
    devServer:{
        static:path.resolve(__dirname,'./dist'),
        historyApiFallback:{index:'index.html'},
        port:4200
        
    }
        
    
};