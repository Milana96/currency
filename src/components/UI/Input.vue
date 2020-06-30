<template>
  <div class="input-control">
    <input
      v-if="controlType === 'input'"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>


