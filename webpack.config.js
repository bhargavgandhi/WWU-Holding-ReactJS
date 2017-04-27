var webpack = require('webpack');
var path = require('path');
 
var BUILD_DIR = path.resolve(__dirname, 'WWUApp/assets/js');
var APP_DIR = path.resolve(__dirname, 'wwuSrc');
 
var config = {
    entry:  APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};
 
module.exports = config;