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
