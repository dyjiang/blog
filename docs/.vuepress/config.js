// const moment = require('moment');

module.exports = {
  title: "牧之笔记",
  description: "记录一下....",
  ga: "UA-121061441-1",
  markdown: {
    lineNumbers: true,
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  // theme: "reco",
  themeConfig: {
    // 博客配置 reco主题
    base: "dyjiang.github.io",
    subSidebar: "auto",
    locales: {
      "/": {
        lang: "zh-CN",
      },
    },
    author: "牧之", //全局作者姓名
    lastUpdated: "上次更新", // string | boolean
    // lastUpdated: true,  // 2.设置true，开启最后更新时间
    // noFoundPageByTencent: false,  // reco
    //  startYear: '2017',   // 项目开始时间，只填写年份
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记", link: "/blog/" },
      { text: "代码块", link: "/code/", icon: "reco-date" },
      { text: "关于我", link: "/about/" },
      // {
      //   text: "关于我",
      //   items: [
      //     // { text: "Github", link: "https://github.com/dyjiang/blog"},
      //     { text: "我", link: "/about/" },
      //   ],
      // },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "前端知识点",
          collapsable: false,
          children: ["js-base", "react", "vue"],
        },
        {
          title: "后台知识点",
          collapsable: false,
          children: ["node", "php"],
        },
        {
          title: "其他",
          collapsable: false,
          children: ["study", "typora", "git", "ui", "pm", "3d", "220726","tizi"],
        },
      ],
      "/code/": [
        {
          title: "代码块",
          collapsable: false,
          children: ["code0", "code1", "code2", "code3", "code4", "20220712", "220719", "220719_1", "220723", "220809",
           "220809_1", "220809_2", "220809_3", "220820", "220820_1", "220820_2","220820_3","220901","220902","220914","230303","maodian","230308","2303081"],
        },
      ],
      "/about/": [
        {
          title: "关于我",
          //  title: "$page",
          collapsable: false,
          children: ["me", "mail", "220720"],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/last-updated", //日期控件
      {
        dateOptions: {
          hour12: false,
        },
      },
    ],
    ["@vuepress/back-to-top"],
  ],
};
