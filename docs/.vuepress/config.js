module.exports = {
  base: '/sumi/', // 部署到GitHub相关得配置
  title: "与道耳",
  description: '富强 民主 文明 和谐 自由 平等 公正 法治 爱国 敬业 诚信 友善',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // 更多配置可以参考 https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    huawei: false,
    type: 'blog',
    author: 'Yudr Sumi',
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      {
        text: '生活',
        icon: 'reco-document',
        items: [
          { text: 'live', link: '/live/' },
          // { text: 'ios', link: '/ios/' },
          // { text: 'Web', link: '/web/' }
        ]
      },
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' },
      {
        text: '外联',
        icon: 'reco-message',
        items: [
          { text: 'NPM', link: 'https://www.npmjs.com/~reco_luan', icon: 'reco-npm' },
          { text: 'GitHub', link: 'https://github.com/recoluan', icon: 'reco-github' },
          { text: '简书', link: 'https://www.jianshu.com/u/cd674a19515e', icon: 'reco-jianshu' },
          { text: 'CSDN', link: 'https://blog.csdn.net/recoluan', icon: 'reco-csdn' },
          { text: '博客圆', link: 'https://www.cnblogs.com/luanhewei/', icon: 'reco-bokeyuan' },
          { text: 'WeChat', link: 'https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A', icon: 'reco-wechat' },
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/yudr.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '最后更新',
    // 作者
    author: 'Yudr Sumi',
    // 备案号
    record: 'Sumi_2360',
    // 项目开始时间
    startYear: '2019'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: false
  },
  plugins: [
    ['@vuepress/pwa', {
      undatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }],
    '@vuepress/medium-zoom',
    'flowchart'
  ]
}  
