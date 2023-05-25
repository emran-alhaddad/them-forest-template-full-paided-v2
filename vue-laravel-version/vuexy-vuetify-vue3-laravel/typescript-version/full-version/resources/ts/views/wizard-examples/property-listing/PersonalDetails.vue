<script setup lang="ts">
import type { PersonalDetails } from './types'
import type { CustomInputContent } from '@core/types'

const props = defineProps<{
  formData: PersonalDetails
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: PersonalDetails): void
}>()

const propertyRadioContent: CustomInputContent[] = [
  {
    title: 'I am the builder',
    desc: 'List property as Builder, list your project and get highest reach fast.',
    icon: { icon: 'custom-office', size: '40' },
    value: 'builder',
  },
  {
    title: 'I am the owner',
    desc: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    icon: { icon: 'custom-diamond', size: '40' },
    value: 'owner',
  },
  {
    title: 'I am the broker',
    desc: 'Earn highest commission by listing your clients properties at best price.',
    value: 'broker',
    icon: { icon: 'custom-suitcase', size: '40' },

  },
]

const formData = ref<PersonalDetails>(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol cols="12">
        <!-- 👉 User Type  -->
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.userType"
          :radio-content="propertyRadioContent"
          :grid-column="{ cols: '12', sm: '4' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 First Name -->
        <AppTextField
          v-model="formData.firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Last Name -->
        <AppTextField
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Username -->
        <AppTextField
          v-model="formData.username"
          label="Username"
          placeholder="John.Doe"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Password -->
        <AppTextField
          v-model="formData.password"
          type="password"
          placeholder="Password"
          label="Password"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Email -->
        <AppTextField
          v-model="formData.email"
          type="email"
          label="Email"
          placeholder="john.doe@email.com"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Contact -->
        <AppTextField
          v-model="formData.contact"
          type="number"
          label="Contact"
          placeholder="7897897899"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
