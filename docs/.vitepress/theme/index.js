import DefaultTheme from "vitepress/theme";
import { registerComponents } from "./register-components";
import "vitepress-theme-demoblock/theme/styles/index.css";
import theme from "vitepress/dist/client/theme-default";
import "./custom.styl";
import "./custom.scss";

import Icon from "../../../src/components/Icon/Icon.vue";

export default {
  ...theme,
  DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    app.component(Icon.name, Icon);
    registerComponents(app);
  },
};
