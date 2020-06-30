<template>
  <div class="currency-item header-grey">
    <router-link class="grey" :to="{path: `/currencies/${currency.id}/edit`}">
      <p>{{currency.code}}</p>
    </router-link>
    <button class="btn-remove" @click="removeCurrency(currency)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    currency: {
      type: Object
    }
  },
  methods: {
    removeCurrency(currency) {
      this.$store.dispatch('removeCurrency', currency.id)
    }
  }
};
</script>
