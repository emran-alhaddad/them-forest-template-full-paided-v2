<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
</script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
