<template>
  <label :for="'input-'+props.name" v-if="props.label" class="form-label">{{ props.label }}</label>
  <div class="position-relative">
    <input
        :type="props.showPass ? 'text' : props.type"
        v-model="model"
        :name="props.name"
        :id="'input-'+props.name"
        :disabled="props.disabled"
        class="form-control"
        autocomplete="off"
        :placeholder="props.placeholder"
        :required="props.required"
        ref="root"
        :min="props.min"
        :max="props.max"
        @change="emit('change')"
        @focus="emit('focus')"
        @keyup="emit('keyup')"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps([
  "name",
  "calendar",
  "modelValue",
  "errors",
  "type",
  "disabled",
  "placeholder",
  "showClose",
  "showPass",
  "closeTop",
  "required",
  "min",
  "max",
  "label"
]);
const emit = defineEmits(['update:modelValue', 'click', 'clear', 'change', 'focus', 'keyup'])

const model = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    return emit('update:modelValue', value)
  }
});

const clear = (() => {
  model.value = '';
  emit('clear', true)
})

const root = ref();
defineExpose({
  root
})
</script>
<style lang="sass" scoped>
input
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
