<script lang="ts">
import {defineComponent, ref} from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css';
import 'intl-tel-input/build/js/intlTelInput.js';
import intlTelInput from 'intl-tel-input';
import IMask from "imask";

export default defineComponent({
  name: "PhoneField",
  props: {
    name:{
      type: String,
      required: false
    },
    disabled:{
      type: Boolean,
      required: false
    },
    placeholder:{
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    mask: {
      type: String,
      required: false
    }
  },
  data(){
    return {
      model: '',
      error: '',
      hasError: false,
      imask: undefined,
      maskPhone: null
    }
  },
  mounted(){
    const input = document.querySelector("#telephone");
    intlTelInput(input, {
      // any initialisation options go here
      initialCountry: 'ru',
      separateDialCode: true,
      nationalMode: false
    });

    this.initMask()
  },
  methods:{
    initMask () {
      // маска для телефона
      const elem = this.maskPhone

      if (elem) {
        this.imask = IMask(elem, {
          mask: this.mask,
          commit: (value: string): void => {
            this.model = value;
          }
        });
      }
    },

  }
})
</script>

<template>
  <div>
    <input
        v-model="model"
        :name="name"
        type="tel"
        :id="'telephone'"
        :disabled="disabled"
        class="form-control"
        autocomplete="off"
        :placeholder="placeholder"
        :class="{ 'is-invalid': hasError }"
        :required="required"
        ref="maskPhone"
    />
    <span role="alert" class="text-red" v-if="hasError">
      {{ error }}
    </span>
  </div>
</template>

<style scoped lang="sass">

</style>
