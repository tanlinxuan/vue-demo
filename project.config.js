const path=require('path')

const projectConfig={
    entry:path.join(__dirname,'./src/index.js'), //启动主入口
    host:'127.0.0.1',
    port:8089, //本地启动端口
    alias:{  //配置静态文件路由别名
        'vue$':'vue/dist/vue.esm.js',  //保证项目内 vue 版本一致
        '@':path.resolve('src'), // 静态主文件入口
        '@components': path.resolve('src/components'),
        '@less': path.resolve('src/less'),
        '@util': path.resolve('src/utils'),
        '@assets': path.resolve('src/assets'),
        '@pages': path.resolve('src/pages'),
        '@router': path.resolve('src/router'),
    }
};
module.exports=projectConfig