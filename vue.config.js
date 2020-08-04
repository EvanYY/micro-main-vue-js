const path = require('path')
const webpack = require('webpack')
// 导入速度分析插件
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// 导入缓存
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
// 实例化插件
const smp = new SpeedMeasurePlugin()
const utilsResource = require('./public/dll/utilsResource.manifest.json')
const vueResource = require('./public/dll/vueResource.manifest.json')
const qiankunResource = require('./public/dll/qiankunResource.manifest.json')

const eslintSorceMap = process.env.NODE_ENV !== 'production' || process.env.VUE_APP_MODE === 'test'
function getExternals () {
  return {
    // lodash: '_',
    // vue: 'Vue',
    // vuex: 'Vuex',
    // axios: 'axios',
    // redux: 'Redux',
    // 'vue-router': 'VueRouter',
    // qiankun: 'qiankun'
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
    externals: getExternals(),
    // externals: process.env.NODE_ENV === 'production' ? getExternals() : {},
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
    plugins: [
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'public', 'dll', 'utilsResource.manifest.json')
      }),
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'public', 'dll', 'vueResource.manifest.json')
      }),
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'public', 'dll', 'qiankunResource.manifest.json')
      })
    ]
      .concat(process.env.NODE_ENV === 'production' ? [
        new HardSourceWebpackPlugin({
          // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
          // 果清除了node_modules，则缓存也是如此
          cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
          // Either an absolute path or relative to webpack's options.context.
          // Sets webpack's recordsPath if not already set.
          recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
          // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
          // 置构建不同的缓存
          configHash: function (webpackConfig) {
            // node-object-hash on npm can be used to build this.
            return require('node-object-hash')({ sort: false }).hash(webpackConfig)
          },
          // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
          // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
          environmentHash: {
            root: process.cwd(),
            directories: [],
            files: ['package-lock.json', 'yarn.lock']
          }
        })
      ] : [])
  }),
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '询盘云系统管理'
        args[0].utilsResource = utilsResource.name + '.js'
        args[0].vueResource = vueResource.name + '.js'
        args[0].qiankunResource = qiankunResource.name + '.js'
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
