<script setup lang="ts">
import type {Person} from "@/models/types/Persons";
import {computed, reactive, ref} from "vue";
import TableRow from "@/components/UI/Table/TableRow.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import CustomModal from "@/components/UI/Modal/CustomModal.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import {getAllArraysInObjects} from "@/composables/useUtility"

const rolesIsNotEmpty = computed(()=> { return props.persons })

const props = defineProps<{
  persons: Person[]
}>()

const emits = defineEmits(['userAdd','userPush'])

function flattenNestedObjects(obj) {
  let flattenedObject = [];

  flattenedObject.push(...obj)

  getAllArraysInObjects(obj).forEach(array => {
    flattenedObject.push(...array)
  })

  return flattenedObject;
}

const addUser = (event) => {
  event.preventDefault()
  if(userForm.name.length < 1)
    return

  userForm.chief ? emits('userPush', userForm) : emits('userAdd', userForm)

  localStorage.setItem('data', JSON.stringify(props.persons))
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
            <custom-input :label="'ФИО'" @update:modelValue = "userForm.name = $event"/>

            <custom-input :label="'Телефон'" @update:modelValue = "userForm.phone = $event"/>

            <custom-select :label="'Начальник'" :items="flattenNestedObjects(persons)" @update:modelValue="userForm.chief = $event"/>
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
