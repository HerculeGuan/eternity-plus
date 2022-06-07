<template>
  <button
    class="et-button"
    :class="[
      `et-button__icon-${iconPosition}`,
      { [`et-button__bg-${type}`]: type },
      { 'et-button__round': round },
    ]"
    @click="$emit('click')"
  >
    <et-icon
      class="et-button__loading et-button__icon"
      v-if="loading"
      name="loading"
    ></et-icon>
    <et-icon
      class="et-button__icon"
      v-if="icon && !loading"
      :name="icon"
    ></et-icon>
    <div class="et-button__content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import Icon from "../Icon/icon";

export default {
  name: "EtButton",
  props: {
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
  },
  components: {
    "et-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-button {
  font-size: $font-size;
  height: $height;
  padding: 0 0.8em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    border-color: $border-color-hover;
  }

  &:focus {
    outline: none;
  }

  &__content {
    order: 2;
  }
  &__icon {
    order: 1;
    margin-right: 0.2em;
  }
  &__icon-right {
    > .et-button__icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
    > .et-button__content {
      order: 1;
    }
  }
  &__round {
    border-radius: 16px;
  }
  &__loading {
    animation: spin 1s infinite linear;
    margin-right: 0.2em;
  }
  &:disabled {
    cursor: not-allowed;
    border-color: $border-color;
  }
  $buttonType: primary, success, warning, danger;
  @each $c in $buttonType {
    &__bg-#{$c} {
      border: none;
      color: #fff;
      font-weight: 500;
      &:hover,
      &:disabled {
        opacity: 0.8;
      }
      &:active {
        opacity: 1;
      }
      > svg {
        fill: #fff;
      }
    }
  }
  &__bg-primary {
    background-color: $primary-color;
  }
  &__bg-success {
    background-color: $success-color;
  }
  &__bg-warning {
    background-color: $warning-color;
  }
  &__bg-danger {
    background-color: $danger-color;
  }
}
</style>

