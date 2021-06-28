const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 导入缓存
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const eslintSorceMap = process.env.NODE_ENV !== 'production' || process.env.VUE_APP_MODE === 'test'
module.exports = {
  lintOnSave: eslintSorceMap,
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        minSize: 10240, // 单个文件的最小size
        maxSize: 2000000, // 单个文件最大的size
        minChunks: 2, // 最小被引用
        maxAsyncRequests: 5, // 首页加载资源
        maxInitialRequests: 3,
        automaticNameDelimiter: '~', // 打包文件自定义的链接符
        name: true,
        chunks: 'async', // initial(初始块)、async(按需加载块)、all(默认，全部块)
        // 这里需要注意的是如果使用initial 会将首页需要的依赖和项目本身的依赖打包2次增大文件体积
        cacheGroups: {
          default: false,
          vendor: {
            test (module) {
              let path = module.resource
              if (!path) return true
              path = path.replace(/\\/g, '/')
              const isNeed = path &&
                          /node_modules/.test(path) &&
                          /node_modules\/(?!vuetify)/.test(path) &&
                          /node_modules\/(?!muse)\n*/.test(path)
              if (!isNeed && path.indexOf('node_modules') > -1) {
                console.log('vendor not need::', path, isNeed)
              }
              return isNeed
            },
            name: 'chunk-vendors',
            priority: 10,
            enforce: true
          },
          // vue: {
          //   test (module) {
          //     let path = module.resource
          //     if (!path) return false
          //     path = path.replace(/\\/g, '/')
          //     // return path && path.indexOf('node_modules') > -1 && path.indexOf('vuetify') > -1
          //     return path && /node_modules\/vue/.test(path)
          //   },
          //   name: 'chunk-vuetify',
          //   priority: 9,
          //   enforce: true
          // },
          // echarts: {
          //   // test: (/node_modules/ && /muse\n*/),
          //   test (module) {
          //     let path = module.resource
          //     if (!path) return false
          //     path = path.replace(/\\/g, '/')
          //     return path && /node_modules\/echarts\n*/.test(path)
          //   },
          //   name: 'chunk-echarts',
          //   priority: 8,
          //   enforce: true
          // },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            minSize: 30000
          }
        }
      }
    }
    // config.plugin = [].concat(process.env.NODE_ENV === 'production' ? [
    //   new HardSourceWebpackPlugin({
    //     // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
    //     // 果清除了node_modules，则缓存也是如此
    //     cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
    //     // Either an absolute path or relative to webpack's options.context.
    //     // Sets webpack's recordsPath if not already set.
    //     recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
    //     // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
    //     // 置构建不同的缓存
    //     configHash: function (webpackConfig) {
    //       // node-object-hash on npm can be used to build this.
    //       return require('node-object-hash')({ sort: false }).hash(webpackConfig)
    //     },
    //     // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
    //     // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
    //     environmentHash: {
    //       root: process.cwd(),
    //       directories: [],
    //       files: ['package-lock.json', 'yarn.lock']
    //     }
    //   })
    // ] : [])
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': path.resolve(__dirname, 'src')
  //     }
  //   },
  //   optimization: {
  //     splitChunks: { // 分割代码块
  //       cacheGroups: {
  //         vendors: {
  //           // 第三方依赖
  //           priority: 1, // 设置优先级，首先抽离第三方模块
  //           name: 'chunk-vendors',
  //           test: /node_modules/,
  //           chunks: 'initial',
  //           minSize: 0,
  //           minChunks: 1 // 最少引入了1次
  //         },
  //         common: {
  //           // 公共模块
  //           name: 'chunk-common', // 抽取公共文件的名字
  //           minChunks: 2, // 最小被引用多少次则被抽取
  //           minSize: 30000 // 单个文件最小size
  //         }
  //       }
  //     }
  //   },
  // plugins: [].concat(process.env.NODE_ENV === 'production' ? [
  //   new HardSourceWebpackPlugin({
  //     // cacheDirectory是在高速缓存写入。默认情况下，将缓存存储在node_modules下的目录中，因此如
  //     // 果清除了node_modules，则缓存也是如此
  //     cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
  //     // Either an absolute path or relative to webpack's options.context.
  //     // Sets webpack's recordsPath if not already set.
  //     recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
  //     // configHash在启动webpack实例时转换webpack配置，并用于cacheDirectory为不同的webpack配
  //     // 置构建不同的缓存
  //     configHash: function (webpackConfig) {
  //       // node-object-hash on npm can be used to build this.
  //       return require('node-object-hash')({ sort: false }).hash(webpackConfig)
  //     },
  //     // 当加载器，插件，其他构建时脚本或其他动态依赖项发生更改时，hard-source需要替换缓存以确保输
  //     // 出正确。environmentHash被用来确定这一点。如果散列与先前的构建不同，则将使用新的缓存
  //     environmentHash: {
  //       root: process.cwd(),
  //       directories: [],
  //       files: ['package-lock.json', 'yarn.lock']
  //     }
  //   })
  // ] : [])
  // },
  chainWebpack: config => {
    // config
    //   .plugin('html')
    //   .tap(args => {
    //     args[0].title = '询盘云系统管理'
    //     args[0].utilsResource = utilsResource.name + '.js?'
    //     args[0].vueResource = vueResource.name + '.js'
    //     args[0].qiankunResource = qiankunResource.name + '.js'
    //     args[0].hash = true
    //     return args
    //   })
    config.resolve.alias.set('@', resolve('src'))
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
