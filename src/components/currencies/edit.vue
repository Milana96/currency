<template>
  <div class="single-currency-container">
    <form action="" v-on:submit.prevent="onSubmit" ref="addCurrency">
      <p class="header-orange">Edit currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <Input v-model="currentCurrency.code"/>
      </div>
      <div class="single-currency-container-item">
        <label for="">Currency Symbol</label>
        <Input v-model="currentCurrency.symbol"/>
      </div>
      <div class="submit-currency">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '../UI/Input.vue'
import Button from '../UI/Button.vue'
export default {
    components: {
        Input,
        Button
    },
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


