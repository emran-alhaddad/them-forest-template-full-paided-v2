<script setup>
const textareaValue = ref('Hello!')
</script>

<template>
  <AppTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
