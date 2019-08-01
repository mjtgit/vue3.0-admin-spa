const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    publicPath:'/',    // 公共路径
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist',
    lintOnSave:false,  // 关闭eslint
    productionSourceMap:true,  // 生产环境下css 分离文件
    devServer:{   // 配置服务器
        port:5000,
        open:true,
        https:false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack:{  // 覆盖webpack默认配置的都在这里
        resolve:{   // 配置解析别名
            alias:{ // 别名配置
                '@':path.resolve(__dirname, './src'),
                '@i':path.resolve(__dirname, './src/assets/image')
            }
        }
    },
    //第三方插件
    pluginOptions: {
    }
}
