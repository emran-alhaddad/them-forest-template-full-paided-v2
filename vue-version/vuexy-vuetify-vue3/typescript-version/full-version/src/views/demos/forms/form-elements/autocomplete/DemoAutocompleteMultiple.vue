<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
</script>

<template>
  <AppAutocomplete
    label="States"
    :items="items"
    multiple
    eager
  />
</template>
