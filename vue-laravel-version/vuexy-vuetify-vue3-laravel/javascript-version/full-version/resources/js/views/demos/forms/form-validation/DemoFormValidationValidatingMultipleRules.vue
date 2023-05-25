<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
</script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
