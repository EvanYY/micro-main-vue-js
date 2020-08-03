const path = require('path')
const eslintSorceMap = process.env.NODE_ENV !== 'production' || process.env.NODE_ENV === 'test'
module.exports = {
  lintOnSave: eslintSorceMap,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '询盘云系统管理'
        return args
      })
    if (process.env.NODE_ENV === 'test') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end()
    }
  },
  // productionSourceMap: eslintSorceMap,
  productionSourceMap: false,
  devServer: {
    port: 5000,
    open: false,
    disableHostCheck: true
  }
}
