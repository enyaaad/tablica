<script setup lang="ts">
import UserTable from "@/components/UIParts/UserTable.vue";
import {deepSearch} from "@/composables/useUtility"

import {Mockup} from "@/models/types/Persons";
import {onMounted, ref} from "vue";

let data = ref([])

onMounted(()=> {
  const personJSON = localStorage.getItem('data');
  try {
    if(personJSON) {
      data.value = JSON.parse(localStorage.getItem('data'))
      return
    }
  } catch (e) {
    // catch error
  } finally {
    data.value = Mockup
  }
})

const addUser = (person) => {
  if(person)
    data.value.push(person)
}

const pushUser = (person) => {
  const parent = deepSearch(data.value,'id',  (k, v) => v === person.chief)

  if(parent)
    parent.childrens.push(person)

}

</script>

<template>
  <main class="main-content">
    <user-table :persons="data" @user-add="addUser" @user-push="pushUser"/>
  </main>
</template>

<style scoped lang="sass">
.main-content
  display: flex
  justify-content: center

</style>
