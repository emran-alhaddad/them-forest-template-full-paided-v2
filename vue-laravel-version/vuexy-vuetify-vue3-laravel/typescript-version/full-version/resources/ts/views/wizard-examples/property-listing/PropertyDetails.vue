<script setup lang="ts">
import type { PropertyDetails } from './types'
import type { CustomInputContent } from '@core/types'

const props = defineProps<{
  formData: PropertyDetails
}>()

const emit = defineEmits<{
  (e: 'update:formData', value: PropertyDetails): void
}>()

const radioContent: CustomInputContent[] = [
  {
    title: 'Sell the property',
    desc: 'Post your property for sale. Unlimited free listing.',
    icon: { icon: 'custom-home', size: '40' },
    value: 'sell',
  },
  {
    title: 'Rent the property',
    desc: 'Post your property for rent. Unlimited free listing.',
    icon: { icon: 'custom-wallet', size: '40' },
    value: 'rent',
  },
]

const formData = ref<PropertyDetails>(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Property Deal Type  -->
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.propertyDealType"
          :radio-content="radioContent"
          :grid-column="{ cols: '12', sm: '6' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Property Type -->
        <AppSelect
          v-model="formData.propertyType"
          label="Property type"
          :items="['Residential', 'Commercial']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Zip Code -->
        <AppTextField
          v-model="formData.zipCode"
          label="Zip Code"
          type="number"
          placeholder="123456"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Country -->
        <AppSelect
          v-model="formData.country"
          label="Country"
          :items="['India', 'UK', 'USA', 'AUS', 'Germany']"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 State -->
        <AppTextField
          v-model="formData.state"
          label="State"
          placeholder="California"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 City -->
        <AppTextField
          v-model="formData.city"
          label="City"
          placeholder="Los Angeles"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <!-- 👉 Landmark -->
        <AppTextField
          v-model="formData.landmark"
          label="Landmark"
          placeholder="Near to bus stop"
        />
      </VCol>

      <VCol>
        <!-- 👉 Address -->
        <AppTextarea
          v-model="formData.address"
          label="Address"
          rows="2"
        />
      </VCol>
    </VRow>
  </VForm>
</template>
