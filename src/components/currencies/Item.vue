<template>
  <div class="currency-item header-grey">
    <router-link class="grey" :to="{path: `/currencies/${currency.id}/edit`}">
      <p>{{currency.code}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
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
</style>
