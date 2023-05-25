<script setup>
const radioContent = [
  {
    title: 'Basic',
    subtitle: 'Free',
    desc: 'Get 1 project with 1 team member.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$45.80',
    value: 'premium',
    desc: 'Get 5 projects with 5 team members.',
  },
]

const selectedRadio = ref('basic')
</script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
