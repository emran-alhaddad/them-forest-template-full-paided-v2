<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
</script>

<template>
  <VSlider
    v-model="slider"
    :max="max"
    :min="min"
    :step="1"
  >
    <template #append>
      <AppTextField
        v-model="slider"
        type="number"
        style="inline-size: 100px;"
      />
    </template>
  </VSlider>
</template>
