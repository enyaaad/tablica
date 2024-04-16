<script setup lang="ts">
import type {Person} from "@/models/types/Persons";
import type {PropType} from "vue";
import {computed, reactive, ref} from "vue";
import TableRow from "@/components/UI/Table/TableRow.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomModal from "@/components/UI/Modal/CustomModal.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import {Mockup} from "@/models/types/Persons";

const rolesIsNotEmpty = computed(()=> { return props.persons })

const props = defineProps({
  persons: {
    type: Object as PropType<Person[]>,
    required: true
  }
})

const addUser = (event) => {
  event.preventDefault()

  console.log(props.persons?.flat(Infinity))
  if(!userForm.chief){
    if(userForm.name === '')
      return
    Mockup.push(<Person>Object.assign(userForm,{id:Math.round(Math.random())}))
  }
  else {
    let person = Mockup.find((person)=> person.id === userForm.chief)
    console.log(person, person.childrens)
    if(person && person.childrens)
      person?.childrens.push(<Person>Object.assign(userForm,{id:Math.round(Math.random())}))
  }

  console.log(Mockup.find((person)=> person.id === userForm.chief))

  localStorage.setItem('data',JSON.stringify(Mockup))
}

const userForm = reactive({
  name: '',
  phone: '',
  chief: 0
})

const openModal = ref<boolean>(false)
</script>

<template>
  <div class="main-table">
    <table id="myTable">
      <thead>
      <tr>
        <th>Название</th>
        <th>Телефон</th>
      </tr>
      </thead>
      <tbody>

      <template v-for="(item,index) in persons" :key="item.id" v-if="rolesIsNotEmpty">
        <TableRow :item="item" :props-index="index"></TableRow>
      </template>
      </tbody>
    </table>

    <custom-button @click="openModal = !openModal">
      Добавить
    </custom-button>

    <custom-modal :is-modal-open="openModal"
                  @close="openModal = !openModal"
    >

      <template #header>
        Добавление пользователя
      </template>

      <template #body>

        <form @submit="addUser($event)">

          <div style="margin-bottom: 30px">
            <custom-input :label="'хуй'" @update:modelValue = "userForm.name = $event"/>

            <custom-input :label="'хуй2'" @update:modelValue = "userForm.phone = $event"/>

            <custom-select :label="'хуй3'" :items="persons.flat(Infinity)" @update:modelValue="userForm.chief = $event"/>
          </div>

          <custom-button type="submit">
            Добавить
          </custom-button>
        </form>

      </template>
    </custom-modal>
  </div>
</template>

<style scoped lang="sass">

</style>
