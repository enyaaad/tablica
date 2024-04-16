<script setup lang="ts">

const props = defineProps({
    name:{
      type: String,
      required: false
    },
    disabled:{
      type: Boolean,
      required: false
    },
    type:{
      type: String,
      required: false
    },
})

const emits = defineEmits(['submit']);

</script>

<template>
  <button
      :type="type"
      @submit="emits('submit')"
      class="font-header"
  >
    <slot/>
  </button>
</template>

<style scoped lang="sass">
button
  width: 100%
  color: white
  background-color: #17505B
  padding: 13px 15px
  border: none
  border-radius: 4px
  font-size: 1em
  cursor: pointer
  transition: 0.3s

button:hover
  background-color: #1f6e7e
</style>
