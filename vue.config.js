// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/obelisk-design/'  // 项目站点写仓库名
    : '/'
}
