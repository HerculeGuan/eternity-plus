import DefaultTheme from "vitepress/theme";
import { registerComponents } from "./register-components";
import "vitepress-theme-demoblock/theme/styles/index.css";
import theme from "vitepress/dist/client/theme-default";
import "./custom.styl";
import "./custom.scss";
import "./index.scss";

import Icon from "../../../src/components/Icon/icon.tsx";
import Button from "../../../src/components/Button/button.tsx";
import ButtonGroup from "../../../src/components/Button/button-group.vue";

export default {
  ...theme,
  DefaultTheme,

  enhanceApp({ app, router, siteData }) {
    app.component(Icon.name, Icon);
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
    registerComponents(app);
  },
};
