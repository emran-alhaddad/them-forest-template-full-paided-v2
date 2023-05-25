<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
</script>

<template>
  <AppTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
