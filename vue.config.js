// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Obelisk-design/'   // ⚠️ 改成你的仓库名（区分大小写）
    : '/'
}
