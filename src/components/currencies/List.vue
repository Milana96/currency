<template>
  <div class="currency-item">
    <p>{{currency.code}}</p>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  components: {
    Item
  },
  props: {
    currency: {
      type: Object
    }
  },
  created() {
    console.log(this.currency);
    
  }
};
</script>
<style lang="scss">
  .currency-item {
    padding: 15px 0;
    border-bottom: 1px solid rgb(189, 189, 189);
  }
</style>
