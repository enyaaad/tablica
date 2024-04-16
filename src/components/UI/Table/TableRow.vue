<script setup lang="ts">
import {PropType} from "vue";
import {Person} from "@/models/types/Persons";

const props = defineProps({
  item: {
    type: Object as PropType<Person>,
    required: true
  },
  class: {
    type: String,
    required: false
  },
  propsIndex: {
    type: Number,
    required: false
  },
})


</script>

<template class="custom-table" >
  <template v-if="item" >
    <tr :class="props.class ? props.class : 'item-' + propsIndex ">
      <td>{{item.name}}</td>
      <td>{{item.phone}}</td>
    </tr>

    <template v-if="item.childrens" >
        <table-row v-for="(child,index) in item.childrens"
                   :item="child" :class="'item-' + propsIndex + '-child-' + index"/>
    </template>

  </template>
</template>

<style scoped lang="sass">

</style>
