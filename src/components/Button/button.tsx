import { computed, defineComponent } from "vue";
import "./button.scss";

const buttonProps = {
  icon: {
    type: String,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator(value: string) {
      return value === "left" || value === "right";
    },
  },
  round: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    validator(value: string) {
      return ["primary", "success", "warning", "danger"].indexOf(value) >= 0;
    },
  },
};

const Button = defineComponent({
  name: "EtButton",
  props: buttonProps,

  setup(props, context) {
    const onClickButton = () => {
      context.emit("click");
    };

    return {
      onClickButton,
      buttonClass: computed(() => [
        `et-button__icon-${props.iconPosition}`,
        { [`et-button__bg-${props.type}`]: props.type },
        { "et-button__round": props.round },
      ]),
    };
  },

  render() {
    return (
      <button
        class={[`et-button`, this.buttonClass]}
        onClick={this.onClickButton}
      >
        {this.loading ? (
          <et-icon
            class="et-button__loading et-button__icon"
            name="loading"
          ></et-icon>
        ) : (
          ""
        )}
        {this.icon && !this.loading ? (
          <et-icon class="et-button__icon" name={this.icon}></et-icon>
        ) : (
          ""
        )}

        <div class="et-button__content">{this.$slots.default?.()}</div>
      </button>
    );
  },
});

export default Button;
