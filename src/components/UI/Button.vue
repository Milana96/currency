<template>
  <button class="btn" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

