const path = require('path')
const webpack = require('webpack')
// 导入速度分析插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 导入缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

// 实例化插件
const smp = new SpeedMeasurePlugin()
const eslintSorceMap = process.env.NODE_ENV !== 'production' || process.env.VUE_APP_MODE === 'test'
function getExternals () {
  return {
    lodash: '_'
  }
}
module.exports = {
  lintOnSave: eslintSorceMap,
  configureWebpack: smp.wrap({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    externals: process.env.NODE_ENV === 'production' ? getExternals() : {},
    optimization: {
      splitChunks: { // 分割代码块
        cacheGroups: {
          vendors: {
            // 第三方依赖
            priority: 1, // 设置优先级，首先抽离第三方模块
            name: 'chunk-vendors',
            test: /node_modules/,
            chunks: 'initial',
            minSize: 0,
            minChunks: 1 // 最少引入了1次
          },
          // 'ant-design-vue': {
          //   name: 'ant-design-vue', // 单独将 react-lottie 拆包
          //   priority: 5, // 权重需大于`vendor`
          //   test: /[\/]node_modules[\/]ant-design-vue[\/]/,
          //   chunks: 'initial',
          //   minSize: 100,
          //   minChunks: 1 // 重复引入了几次
          // },
          common: {
            // 公共模块
            chunks: 'initial',
            name: 'chunk-common',
            minSize: 100, // 大小超过100个字节
            minChunks: 3 // 最少引入了3次
          }
        }
      }
    },
    plugins: [new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? 'public' : './public', 'dll', 'manifest.json')
    })].concat(process.env.NODE_ENV === 'production' ? [
      new HardSourceWebpackPlugin()
    ] : [])
  }),
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '询盘云系统管理'
        return args
      })
    if (process.env.VUE_APP_MODE === 'test') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin).end()
    }
  },
  productionSourceMap: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 5000,
    open: false,
    disableHostCheck: true
  }
}
