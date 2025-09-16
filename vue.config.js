// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'   // ⚠️ 改成你的仓库名（区分大小写）
    : '/'
}
