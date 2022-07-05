module.exports = {
  title: "牧之笔记",
  description: "记录工作，记录生活....",
  theme: "reco",
  themeConfig: {
    // 博客配置 reco主题
    // blogConfig: {
    //   category: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认2
    //     text: "Category", // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认3
    //     text: "Tag", // 默认文案 “标签”
    //   },
    //   socialLinks: [
    //     // 信息栏展示社交信息
    //     { icon: "reco-github", link: "https://github.com/recoluan" },
    //     { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
    //   ],
    // },
    author: '牧之', //全局作者姓名
    // lastUpdated: '上次更新', // string | boolean
    lastUpdated: true,  // 2.设置true，开启最后更新时间
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/blog/" },
      { text: "代码块", link: "/code/" },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: "关于我",
        items: [
          { text: "Github", link: "https://github.com/dyjiang/blog" },
          { text: "我", link: "/about/" },
        ],
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "js知识点",
          collapsable: false,
          children: ["js-base", "react"],
        },
      ],
      "/code/": [
        {
          title: "代码块",
          collapsable: false,
          children: ["bug1"],
        },
      ],
      "/about/": [
        {
          title: "关于我",
          collapsable: false,
          children: ["me"],
        },
      ],
      "/timeline/": [
        {
          title: "js知识点",
          collapsable: false,
          children: ["time"],
        },
      ],
    },
  },
};
