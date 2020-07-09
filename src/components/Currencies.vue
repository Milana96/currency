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
      search: "",
      currencies: [],
      
    };
  },
  computed: {
    filteredCurrencies() {
      if (this.search && this.search != "") {
        const searchText = this.search.toLowerCase();
        return this.$store.state.currencies.filter(el => {
          return (
            el.code.toLowerCase().includes(searchText) ||
            el.symbol.toLowerCase().includes(searchText) ||
            el.id == parseInt(searchText)
          );
        });
      }
      return this.$store.state.currencies;
    }
  },
  mounted() {
    this.$store.commit('GET_CURRENCIES');
  }
};
</script>
