// const path = require("path");
module.exports = {
  base: "/eternity-plus/",
  title: "Eternity Plus",
  description: "Vue UI 组件库",

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

      //   {
      //     text: "开发指南",
      //     link: ["/install/"],
      //     // collapsable: false,
      //   },
      {
        text: "组件",
        children: [
          {
            text: "Icon 图标",
            link: "/components/icon",
          },

        ],
      },
    ],
    lastUpdated: "最后更新时间", // string | boolean
  },
};
