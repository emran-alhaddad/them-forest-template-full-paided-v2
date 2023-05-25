<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
</script>

<template>
  <AppAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
