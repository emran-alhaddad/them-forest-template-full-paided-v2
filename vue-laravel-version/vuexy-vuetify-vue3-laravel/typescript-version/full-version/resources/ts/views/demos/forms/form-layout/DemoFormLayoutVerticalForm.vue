<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
