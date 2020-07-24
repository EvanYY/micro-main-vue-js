let path = require('path');
module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
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
  devServer: {
    port: 8080,
    open: false,
    disableHostCheck: true
  },
}
