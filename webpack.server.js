const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const config = {
    // mode:'development', // 开发环境
    target:'node', //应用在node
    entry:'./src/server/index.js', //入口文件
    output: {
        // __dirname:项目的根路径,path:出口文件路径:项目根路径下的build文件夹下,
        path: path.join(__dirname,'build'),
        // filename:打包文件名称
        filename:'bundle.js',
    },
    // 在服务器端打包文件中,包含了Node系统模块.导致打包文件本身体积庞大
    // 可以通过webpack配置剔除打包文件中的Node模块
    externals:[nodeExternals()]
}
module.exports = merge(baseConfig,config)