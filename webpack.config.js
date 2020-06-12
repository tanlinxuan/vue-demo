const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const  projectConfig = require('./project.config')
const webpackConfig= {
    entry:{
        path:path.join(__dirname,'./src/index.js'),
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    resolve: {
        alias:{
            ...projectConfig.alias
        },
        mainFiles:["index"], //默认解析 文件夹下 name 为index 的文件
        extensions: ['.js', '.vue','.json'] // 解析默认解析文件 的后缀
    },
    mode:process.env.NODE_ENV,
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test:/\.(png|jpg|jepg|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,  //这里的单位是b
                            name:'images/[name][hash].[ext]' //打包后输出路径
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html',
            inject: 'body',
            minify: {
                removeComments: true
            }
        })
    ]
}
module.exports=webpackConfig