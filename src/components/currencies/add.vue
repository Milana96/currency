<template>
  <div class="single-currency-container">
    <form action="" v-on:submit.prevent="onSubmit" ref="addCurrency">
      <p class="header-orange">Add currency</p>
      <div class="single-currency-container-item">
        <label for="">Currency code</label>
        <div class="show-err">
          <Input
            name="code"
            v-model="currency.code"
            v-validate="'required|unique|length:3'"
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
            v-model="currency.symbol"
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
        <Button :disabled="errors.any()" type="submit">Submit</Button>
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
  name: "Add",
  data() {
    return {
      currency: {
        id: null,
        code: "",
        symbol: ""
      }
    };
  },
  methods: {
    onSubmit(event) {
      this.$store.dispatch("addCurrency", this.currency);
      this.$nextTick(() => {
        this.$validator.reset();
        this.errors.clear();
        this.currency = {
          code: '',
          symbol: ''
        }
      });
    }
  },
  mounted() {
    const isUnique = value =>
      new Promise(resolve => {
        setTimeout(() => {
          const currencies = this.$store.state.currencies;

          for (var i = 0; i < currencies.length; i++) {
            if (currencies[i].code.indexOf(value) === -1) {
              return resolve({
                valid: true
              });
            }
            return resolve({
              valid: false,
              data: {
                message: `${value} already exist.`
              }
            });
          }
        }, 200);
      });

    Validator.extend("unique", {
      validate: isUnique,
      getMessage: (field, params, data) => data.message
    });
  }
};
</script>
