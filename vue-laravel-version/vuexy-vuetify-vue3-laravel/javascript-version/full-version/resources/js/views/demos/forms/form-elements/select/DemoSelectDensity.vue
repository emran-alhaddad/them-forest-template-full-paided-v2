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
    label="Density"
    density="compact"
  />
</template>
