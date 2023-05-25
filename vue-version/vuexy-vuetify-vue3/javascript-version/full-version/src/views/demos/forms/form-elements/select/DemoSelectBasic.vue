<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
</script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
  />
</template>
