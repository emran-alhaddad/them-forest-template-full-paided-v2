<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
</script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
