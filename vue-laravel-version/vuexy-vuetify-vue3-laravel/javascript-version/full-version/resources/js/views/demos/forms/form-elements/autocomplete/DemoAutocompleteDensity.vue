<script setup>
const select = ref(['Florida'])

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
</script>

<template>
  <AppAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
