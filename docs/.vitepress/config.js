// const path = require("path");
const nav = require("./configs/nav");
const sidebar = require("./configs/sidebar");
module.exports = {
  base: "/eternity-plus/",
  title: "Eternity Plus",
  description: "Vue3 UI 组件库",
  themeConfig: {
    nav,
    sidebar,
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
