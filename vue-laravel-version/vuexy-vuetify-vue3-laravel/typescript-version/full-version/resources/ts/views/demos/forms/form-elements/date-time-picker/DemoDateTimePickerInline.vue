<script setup lang="ts">
const date = ref('')
</script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
