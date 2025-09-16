module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-blog/'   // 👈 改成你的仓库名
    : '/'
}
