module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.baidu.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  publicPath:'./',
  lintOnSave: false
}
