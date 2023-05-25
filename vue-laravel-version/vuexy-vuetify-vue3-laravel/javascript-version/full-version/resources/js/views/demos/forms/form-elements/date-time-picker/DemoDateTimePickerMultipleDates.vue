<script setup>
const multipleDate = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
