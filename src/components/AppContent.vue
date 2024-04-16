<script setup lang="ts">
import UserTable from "@/components/UIParts/UserTable.vue";

import {Mockup} from "@/models/types/Persons";
import {computed} from "vue";

const data = computed(()=> {
  return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : Mockup
})

</script>

<template>
  <main class="main-content">
    <user-table :persons="data"/>
  </main>
</template>

<style scoped lang="sass">
.main-content
  display: flex
  justify-content: center

</style>
