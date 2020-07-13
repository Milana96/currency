<template>
  <div class="single-currency-container">
    <form
      action=""
      v-on:submit.prevent="onSubmit"
      ref="addCurrency"
      novalidate="true"
    >
      <p class="header-orange">Edit currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <div class="show-err">
          <Input
            name="code"
            v-model="currentCurrency.code"
            v-validate="'required|length:3'"
            :class="{ input: true, 'is-danger': errors.has('code') }"
          />
          <i v-show="errors.has('code')" class="fa fa-warning"></i>
          <span v-show="errors.has('code')" class="help is-danger">{{
            errors.first("code")
          }}</span>
        </div>
      </div>
      <div class="single-currency-container-item">
        <label for="">Currency Symbol</label>
        <div class="show-error">
          <Input
            name="symbol"
            v-model="currentCurrency.symbol"
            v-validate="'required'"
            :class="{ input: true, 'is-danger': errors.has('symbol') }"
          />
          <i v-show="errors.has('symbol')" class="fa fa-warning"></i>
          <span v-show="errors.has('symbol')" class="help is-danger">{{
            errors.first("symbol")
          }}</span>
        </div>
      </div>
      <div class="submit-currency">
        <Button :disabled="errors.any()" type="submit">Save</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { Validator } from "vee-validate";
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
export default {
  components: {
    Input,
    Button
  },
  name: "Edit",
  created() {
    this.fetchSingleCurrency();
  },
  data() {
    return {
      currentCurrency: {}
    };
  },
  watch: {
    $route(to, from) {
      this.fetchSingleCurrency();
    }
  },
  methods: {
    fetchSingleCurrency() {
      this.$store.commit("GET_CURRENCIES");
      this.currentCurrency = this.$store.state.currencies.find(
        e => e.id == this.$route.params.id
      );
    },
    onSubmit(event) {
      this.$store.dispatch("editCurrency", this.currentCurrency);
      this.$nextTick(() => {
        this.$validator.reset();
        this.errors.clear();
        this.currentCurrency = {
          id: null,
          code: "",
          symbol: ""
        };
      });
    }
  }
};
</script>
