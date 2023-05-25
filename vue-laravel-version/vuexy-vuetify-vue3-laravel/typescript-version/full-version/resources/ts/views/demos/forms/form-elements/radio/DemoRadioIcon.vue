<script lang="ts" setup>
const radioGroup = ref(1)
</script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="`Radio ${n}`"
      :value="n"
    />
  </VRadioGroup>
</template>
