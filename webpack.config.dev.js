const base=require('./webpack.config')
const merge=require('webpack-merge')
const webpack=require('webpack')
const  projectConfig = require('./project.config')
module.exports=merge(base,{
    devServer:{
        port:projectConfig.port || 8089,
        host:projectConfig.host || '127.0.0.1',
        open:true,
        hot:true,
        overlay:{erros:true}
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})