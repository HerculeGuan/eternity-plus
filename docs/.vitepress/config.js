// const path = require("path");
module.exports = {
  base: "/eternity-plus/",
  title: "Eternity Plus",
  description: "Vue3 UI 组件库",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/HerculeGuan/eternity-plus" },
    ],
    sidebar: [
      {
        text: "开发指南",
        link: "/install/",
      },
      {
        text: "组件",
        children: [
          {
            text: "Icon 图标",
            link: "/components/icon",
          },
          {
            text: "Button 按钮",
            link: "/components/button",
          }
        ],
      },
    ],
    lastUpdated: "最后更新时间", // string | boolean
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        cssPreprocessor: "scss",
      });
    },
  },
};
