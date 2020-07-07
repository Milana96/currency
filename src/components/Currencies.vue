<template>
  <div class="currencies-container">
    <div class="sidenav-container">
      <div class="sidenav-container-nav">
        <p class="sidenav-container-nav-header header-orange">Currency list</p>
        <label>Search</label>
        <Input v-model="search" />
        <Item
          v-for="currency in filteredCurrencies"
          :key="currency.code"
          :currency="currency"
        >
        </Item>
        <router-link
          class="link add-currency orange"
          :to="{ path: '/currencies/add' }"
        >
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
import Input from "../components/UI/Input";
export default {
  name: "Currencies",
  components: {
    Item,
    Input
  },
  data() {
    return {
      // currencies: []
      search: ""
    };
  },
  computed: {
    filteredCurrencies() {
      const searchText = this.search.toLowerCase();
      return this.$store.state.currencies.filter(el => {
        console.log(el.id);
        
        return (
          el.code.toLowerCase().includes(searchText) ||
          el.symbol.toLowerCase().includes(searchText) ||
          el.id == searchText
        );
      });
    }
  },
  mounted() {
    // this.$store.dispatch('fetchCurrencies');
    // if(localStorage.getItem('currencies')) {
    //   this.currencies = JSON.parse(localStorage.getItem('currencies'));
    //   console.log(this.currencies);
    // }
    // console.log(this.$store.state.currencies);
  }
};
</script>
