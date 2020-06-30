<template>
  <div class="currencies-container">
    <div class="sidenav-container">
      <div class="sidenav-container-nav">
        <p class="sidenav-container-nav-header header-orange">Currency list</p>

        <Item
          v-for="currency in currencies"
          :key="currency.code"
          :currency="currency"
        >
        
        </Item>
        <router-link class="link add-currency orange" :to="{ path: '/currencies/add' }">
          <span><font-awesome-icon icon="plus-circle"/></span>
          Add currency</router-link
        >
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Item from "../components/currencies/Item";
export default {
  name: "Currencies",
  components: {
    Item
  },
  data() {
    return {
      // currencies: []
    };
  },
  mounted() {
    // this.$store.dispatch('fetchCurrencies');
    // if(localStorage.getItem('currencies')) {
    //   this.currencies = JSON.parse(localStorage.getItem('currencies'));
    //   console.log(this.currencies);
      
    // }
    // console.log(this.$store.state.currencies);
    
  },
  computed: {
    currencies() {
      return this.$store.state.currencies;
    }
    
  }
};
</script>

