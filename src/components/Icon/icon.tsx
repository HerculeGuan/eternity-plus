import "../../svg";
import { computed, defineComponent, toRefs } from "vue";

const iconProps = {
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
};

const Icon = defineComponent({
  name: "EtIcon",
  props: iconProps,

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

  render() {
    return (
      <svg class="et-icon" style={this.sizeClass}>
        <use xlinkHref={`#i-${this.$props.name}`}></use>
      </svg>
    );
  },
});

export default Icon;
