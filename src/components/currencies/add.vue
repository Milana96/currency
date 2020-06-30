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
      <div class="add-currency">
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

<style lang="scss">
.single-currency-container {
  display: flex;
  flex: 0 0 75%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  form {
    width: 100%;
  }
  p {
    width: 50%;
    padding: 25px 3px 3px;
    margin: 0;
  }
  &-item {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 11px 0;
    border-bottom: 1px solid #bdbdbd;
        input {
            height: 25px;
        }
  }
  .add-currency {
    position: relative;
    width: 50%;
    .btn {
      position: absolute;
      top: 10px;
      right: 0;
      background-color: #f26522;
      color: white;
      text-align: right;
      text-transform: uppercase;
      padding: 8px 16px;
      border: none;
      border-radius: 5px;
    }
  }
}
</style>
