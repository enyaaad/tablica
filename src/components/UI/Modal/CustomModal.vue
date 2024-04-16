<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
    default: false
  }
})

const isOpenModal = computed(()=> {
  return props.isModalOpen
})

const emits = defineEmits(['close'])

</script>

<template>
  <transition>
    <div v-if="isOpenModal" class="modal" :class="{'shown': isOpenModal}">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"/>
          <span class="close" @click="emits('close')">&times;</span>
        </div>
        <div class="modal-body">
          <slot name="body"/>
        </div>
      </div>
    </div>
  </transition>

</template>

<style scoped lang="sass">
.modal
  display: none
  position: fixed
  z-index: 1
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgba(0, 0, 0, 0.5)

.shown
  display: block !important

.modal-content
  background-color: #fefefe
  margin: 15% auto
  padding: 20px
  border: 1px solid #888
  width: 80%
  .modal-header
    display: flex
    justify-content: space-between
    align-items: center

.close
  color: #aaa
  float: right
  font-size: 28px
  font-weight: bold

.close:hover,
.close:focus
  color: black
  text-decoration: none
  cursor: pointer

.v-enter-active,
.v-leave-active
  transition: opacity 0.3s ease

.v-enter-from,
.v-leave-to
  opacity: 0

</style>
