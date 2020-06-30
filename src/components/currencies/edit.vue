<template>
  <div class="single-currency-container">
    <form action="" v-on:submit.prevent="onSubmit" ref="addCurrency">
      <p class="header-orange">Edit currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <input v-model="currentCurrency.code" type="text" name="" id="" />
      </div>
      <div class="single-currency-container-item">
        <label for="">Currency Symbol</label>
        <input v-model="currentCurrency.symbol" type="text" name="" id="" />
      </div>
      <div class="submit-currency">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  created() {
      this.fetchSingleCurrency()
  },
  props: {
      currency: {
          type: Object
      }
  },
  data() {
    return {
        currentCurrency: {}
    };
  },
  methods: {
    fetchSingleCurrency() {
        this.currentCurrency =  this.$store.state.currencies.find(e => e.id == this.$route.params.id)   
    },
    onSubmit(event) {
      this.$store.dispatch('editCurrency', this.currentCurrency.id)
      this.$router.push('/');
    }
  }
};
</script>


