module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: "open.duyiedu.com"
      }
    }
  }
}