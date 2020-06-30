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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  width: 100%;
  min-width: 1440px;
  height: 100vh;
  padding: 0 15px;
  margin: 0 -30px;
  .sidenav-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    text-align: left;
    color: grey;
    &-nav {
      display: flex;
      flex: 0 0 20%;
      flex-direction: column;
      background-color: rgb(231, 231, 231);
      padding: 25px 30px;

      &-header {
        margin: 0;
        padding: 0 3px 3px;
      }
    }
    .add-currency {
      padding: 15px 0;
      border-bottom: 1px solid rgb(189, 189, 189);
      color: #f26522;
      text-transform: uppercase;
      text-decoration: none;
    }
  }
}
</style>
