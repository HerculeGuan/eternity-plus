<template>
  <div class="icon-demos">
    <div class="code-example">
      <div class="example">
        <et-icon name="setting"></et-icon>
      </div>
      <code-wrap :code="content" :tips="tips"></code-wrap>
    </div>
  </div>
</template>

<script>
import EtIcon from "../../../src/components/Icon/icon.vue";
import CodeWrap from "../utils/code-wrap.vue";
import "../style/common.scss";

export default {
  components: {
    EtIcon,
    CodeWrap,
  },
  setup() {
    const content = `
    <et-icon name="setting"></et-icon>
    `;
    const tips = "使用<code>name</code>来设置图标";
    return {
      content,
      tips,
    };
  },
};
</script>
