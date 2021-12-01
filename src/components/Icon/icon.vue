<template>
  <svg class="et-icon" :style="sizeClass">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import "../../svg";
import { computed, defineComponent, toRefs } from "@vue/runtime-core";
export default defineComponent({
  name: "EtIcon",
  props: {
    name: {
      type: String,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    const { size, color } = toRefs(props);
    const sizeClass = computed(() => {
      return {
        width: `${size.value}px`,
        height: `${size.value}px`,
        fill: color.value,
      };
    });
    return { sizeClass };
  },
});
</script>

