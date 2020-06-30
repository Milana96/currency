<template>
  <div class="container">
    <div class="sidenav-container">
      <div class="sidenav-container-nav" v-if="showCurrencies">
        <p class="sidenav-container-nav-header header-orange">Currency list</p>

        <Item
          v-for="currency in currencies"
          :key="currency.code"
          :currency="currency"
        >
        </Item>
        <router-link class="add-currency orange" :to="{ path: '/currencies/add' }">
          <span><font-awesome-icon icon="plus-circle"/></span>
          Add currency</router-link
        >
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Item from "../components/currencies/Item.vue";
export default {
  name: "Currencies",
  components: {
    Item
  },
  data() {
    return {
      showCurrencies: true
    };
  },
  computed: {
    currencies() {
      return this.$store.state.currencies;
    }
  }
};
</script>

