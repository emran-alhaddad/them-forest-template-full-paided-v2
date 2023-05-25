<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
</script>

<template>
  <VResponsive
    :style="{ background: `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <VSlider
        v-model="redColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-r"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="redColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <VSlider
        v-model="greenColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-g"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="greenColorValue"
              type="number"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <VSlider
        v-model="blueColorValue"
        :max="255"
        :step="1"
        prepend-icon="tabler-letter-b"
      >
        <template #append>
          <div style="inline-size: 7rem;">
            <AppTextField
              v-model="blueColorValue"
              type="number"
              variant="underlined"
              :max="255"
            />
          </div>
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
