const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    // mode:'development', // 开发环境
    entry:'./src/client/index.js', //入口文件
    output: {
        // __dirname:项目的根路径,path:出口文件路径:项目根路径下的build文件夹下,
        path: path.join(__dirname,'public'),
        // filename:打包文件名称
        filename:'bundle.js',
    }
}
module.exports = merge(baseConfig,config)