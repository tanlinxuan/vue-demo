const removeConsolePlugin = [];

if (process.env.NODE_ENV === 'production') {
    removeConsolePlugin.push('transform-remove-console');
}

module.exports = {
    // presets: ['@vue/app'],
    presets: [
        [
            '@babel/preset-env',
            {
                // transform any
                loose: true
            }
        ]
    ],
    // 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的
    plugins: [
        // import
        '@babel/plugin-syntax-dynamic-import',
        // transform
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-modules-commonjs',
        // vue jsx语法
        '@babel/plugin-syntax-jsx',
        'transform-vue-jsx',
        'lodash',
        // spread ...
        // '@babel/plugin-syntax-object-rest-spread',
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ],
        ...removeConsolePlugin
    ]
};

