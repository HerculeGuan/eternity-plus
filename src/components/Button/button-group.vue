<template>
  <div class="et-button-group" ref="root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, onMounted } from "@vue/runtime-core";
export default {
  name: "EtButtonGroup",
  setup() {
    const vm = getCurrentInstance();
    onMounted(() => {
      //   for (let node of root) {
      //     let name = node.nodeName.toLowerCase();
      //     if (name !== "button") {
      //       console.warn(
      //         `et-button-group的子元素应该全是button,但你写的是${name}`
      //       );
      //     }
      //   }
    });
  },
};
</script>

<style lang="scss">
@import "../var";

.et-button-group {
  display: inline-flex;
  vertical-align: middle;
  .et-button {
    border-radius: 0 !important;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
}
</style>
