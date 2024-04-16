<script setup lang="ts">

import type {PropType} from "vue";
import {computed} from "vue";

const props = defineProps({
  name:{
    type: String,
    required: false
  },
  items: {
    type: Object as PropType<any>,
    required:true,
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
  label: {
    type: String,
    required: false,
  },
  modelValue:{},
})

const model = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    console.log(value)
    return emits('update:modelValue', value)
  }
});
const emits = defineEmits(['update:modelValue'])

</script>

<template>
  <label :for="'input-'+props.name" v-if="props.label" class="form-label">{{ props.label }}</label>
  <select
      v-model="model"
      :name="name"
      :disabled="disabled"
      class="form-select"
      ref="root"
  >
    <option v-for="(item, index) in items" :key="'cs_' + props.name + '_' + index" :value="item.id">
      {{ item.name }}
    </option>
  </select>
</template>

<style scoped lang="sass">
select
  width: 100%
  padding: 12px 0 12px 15px
  border: 1px solid #DCDFE6
  color: #606266
  border-radius: 4px
  transition: 0.2s ease
  text-overflow: ellipsis
  &:focus
    border: 1px solid #17505B
    outline: none

</style>
