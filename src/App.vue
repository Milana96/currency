<template>
  <div id="app">
    <Header />
    <Currencies />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
import Currencies from "./components/Currencies";
export default {
  components: {
    Header,
    Currencies
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Domine", serif;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  a {
    color: white;
    text-decoration: none;
  }
  .grey {
    color: grey;
  }
  .orange {
    color: #f65222;
  }
  .header-orange {
    font-weight: normal;
    color: #f26522;
    border-bottom: 1px solid #f26522;
  }
  .header-grey {
     color: grey;
     border-bottom: 1px solid #bdbdbd
  }
}
</style>
