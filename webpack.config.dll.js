const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    antDesignVue: ['ant-design-vue']
  },
  output: {
    filename: '[name]_dll.js',
    path: path.resolve(__dirname, 'public', 'dll'),
    library: '[name]_dll' // 暴露给外部使用
    // libraryTarget 指定如何暴露内容，缺省时就是 var
  },
  plugins: [
    new webpack.DllPlugin({
      // name和library一致
      name: '[name]_dll',
      context: __dirname,
      path: path.resolve(__dirname, 'public', 'dll', 'manifest.json') // manifest.json的生成路径
    })
  ]
}
