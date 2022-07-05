// const moment = require('moment');

module.exports = {
  title: "牧之笔记",
  description: "记录工作，记录生活....",
  ga: "UA-121061441-1",
  markdown: {
    lineNumbers: true,
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // theme: "reco",
  themeConfig: {
    // 博客配置 reco主题
    base:'dyjiang.github.io',
    subSidebar: 'auto',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    author: '牧之', //全局作者姓名
    lastUpdated: '上次更新', // string | boolean
    // lastUpdated: true,  // 2.设置true，开启最后更新时间
    // noFoundPageByTencent: false,  // reco
    //  startYear: '2017',   // 项目开始时间，只填写年份
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/blog/" },
      { text: "代码块", link: "/code/",icon: 'reco-date' },
      {
        text: "关于我",
        items: [
          { text: "Github", link: "https://github.com/dyjiang/blog"},
          { text: "我", link: "/about/" },
        ],
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "js知识点",
          collapsable: false,
          children: ["js-base", "react","vue","php"],
        },
        {
          title: "其他",
          collapsable: false,
          children: ["typora"],
        },
      ],
      "/code/": [
        {
          title: "代码块",
          collapsable: false,
          children: ["code0",'code1',"code2",'code3'],
        },
      ],
      "/about/": [
        {
          title: "关于我",
        //  title: "$page",
          collapsable: false,
          children: ["me"],
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',  //日期控件
      {
        dateOptions:{
          hour12: false
        }
      }
    ]
  ]
};
