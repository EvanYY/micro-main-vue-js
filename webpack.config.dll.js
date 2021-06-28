const path = require('path')
const webpack = require('webpack')
/*
 * @description: 暂时废弃
 * @author: 杨洋
 * @date: 2020-10-15 14:24:56
 * @version: V1.0.0
*/
module.exports = {
  entry: {
    // antDesignVue: ['ant-design-vue'],
    utilsResource: ['lodash'],
    vueResource: ['vue', 'vuex', 'vue-router', 'axios'],
    qiankunResource: ['qiankun', 'redux', 'redux-actions']
  },
  mode: 'production',
  output: {
    filename: '[name]_dll_[chunkhash:8].js',
    path: path.resolve(__dirname, 'public', 'dll'),
    library: '[name]_dll_[chunkhash:8]', // 暴露给外部使用
    libraryTarget: 'umd' // 指定如何暴露内容，缺省时就是 var
  },
  plugins: [
    new webpack.DllPlugin({
      // name和library一致
      name: '[name]_dll_[chunkhash:8]',
      context: __dirname,
      path: path.resolve(__dirname, 'public', 'dll', '[name].manifest.json') // manifest.json的生成路径
    })
  ]
}
