const path=require('path')
const {VueLoaderPlugin}=require('vue-loader')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const resolve = src => {
    return path.resolve(__dirname, src);
};
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
            'vue$':'vue/dist/vue.esm.js',
            '@':resolve('src'),
            '@components': resolve('src/components'),
            '@less': resolve('src/less'),
            '@util': resolve('src/utils'),
            '@assets': resolve('src/assets'),
            '@pages': resolve('src/pages'),
            '@router': resolve('src/router'),
        },
        extensions: ['.js', '.jsx','.json']
    },
    mode:process.env.NODE_ENV,
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
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