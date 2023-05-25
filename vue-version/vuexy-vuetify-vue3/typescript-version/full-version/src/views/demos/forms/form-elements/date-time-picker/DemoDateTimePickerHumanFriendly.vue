<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ dateFormat: 'F j, Y' }"
  />
</template>
