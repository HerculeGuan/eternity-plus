<template>
  <svg class="et-icon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>

<script lang='ts'>
import "../../svg";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "EtIcon",
  props: {
    name: {
      type: String,
    },
  },
  created() {
  },
});
</script>

<style lang="scss" scoped>
.et-icon {
  width: 1em;
  height: 1em;
}
</style>