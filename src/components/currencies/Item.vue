<template>
  <div class="currency-item header-grey">
    <router-link class="link grey" :to="{path: `/currencies/${currency.id}`, params: `${currency.id}`}">
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
