<template>
  <div class="single-currency-container">
    <form action="" v-on:submit.prevent="onSubmit">
      <p class="header-orange">Add currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <input v-model="currency.code" type="text" name="" id="" />
      </div>
      <div class="single-currency-container-item">
        <label for="">Currency Symbol</label>
        <input v-model="currency.symbol" type="text" name="" id="" />
      </div>
      <div class="submit-currency">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      currency: {
        id: Math.random(),
        code: "",
        symbol: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addCurrency', this.currency)
      console.log(this.$store.state.currencies);
    }
  }
};
</script>


