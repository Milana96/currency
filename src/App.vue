<template>
  <div id="app">
      <b-row>
        <b-col sm="12"><Header /></b-col>
      </b-row>
      <b-row>
        <b-col sm="3"><Currencies /></b-col>
        <!-- <b-col sm="9"><router-view /></b-col> -->
      </b-row>
  </div>
  
</template>

<script>
import Header from "./components/Header";
import Currencies from "./components/Currencies";
export default {
  components: {
    Header,
    Currencies
  },
  
};
</script>
