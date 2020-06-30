<template>
  <div class="single-currency-container">
    <form action="" v-on:submit.prevent="onSubmit" ref="addCurrency">
      <p class="header-orange">Add currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <Input v-model="currency.code"/>
      </div>
      <div class="single-currency-container-item">
        <label for="">Currency Symbol</label>
        <Input v-model="currency.symbol"/>
      </div>
      <div class="submit-currency">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '../UI/Input.vue'
import Button from '../UI/Button.vue';
export default {
  components: {
    Input, 
    Button
  },
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
    onSubmit(event) {
      this.$store.dispatch('addCurrency', this.currency)
      this.$router.push('/');
    }
  }
};
</script>


