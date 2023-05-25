<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
</script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
