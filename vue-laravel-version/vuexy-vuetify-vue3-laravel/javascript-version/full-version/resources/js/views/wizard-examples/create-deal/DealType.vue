<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import sittingGirlWithLaptop from '@images/illustrations/sitting-girl-with-laptop.png'
import CreateDealBackgroundDark from '@images/pages/DealTypeBackground-dark.png'
import CreateDealBackgroundLight from '@images/pages/DealTypeBackground-light.png'

const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(['update:formData'])

const createDealBackground = useGenerateImageVariant(CreateDealBackgroundLight, CreateDealBackgroundDark)

const discountOffers = [
  {
    icon: {
      icon: 'custom-check',
      size: '40',
    },
    title: 'Percentage',
    desc: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
    value: 'percentage',
    color: 'primary',
  },
  {
    icon: {
      icon: 'custom-card',
      size: '40',
    },
    title: 'Flat Amount',
    desc: 'Create a deal which offer uses some flat amount (i.e $5 OFF) on total.',
    value: 'flat',
  },
  {
    icon: {
      icon: 'custom-diamond',
      size: '40',
    },
    title: 'Prime member',
    desc: 'Create prime member only deal to encourage the prime members.',
    value: 'prime',
  },
]

const formData = ref(props.formData)

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <!-- 👉 Shopping girl image -->
      <VCol cols="12">
        <div class="d-flex align-center justify-center w-100 deal-type-image-wrapper border rounded px-5">
          <VImg :src="sittingGirlWithLaptop" />
          <VImg
            :src="createDealBackground"
            class="position-absolute deal-type-background-img"
          />
        </div>
      </VCol>

      <VCol cols="12">
        <CustomRadiosWithIcon
          v-model:selected-radio="formData.Offer"
          :radio-content="discountOffers"
          :grid-column="{ cols: '12', sm: '4' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppTextField
          v-model="formData.discount"
          type="number"
          label="Discount"
          hint="Enter the discount percentage. 10 = 10%"
          persistent-hint
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppSelect
          v-model="formData.region"
          label="Region"
          :items="['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']"
          hint="Select applicable regions for the deal."
          persistent-hint
        />
      </VCol>
    </VRow>
  </VForm>
</template>

<style lang="scss">
.deal-type-image-wrapper {
  position: relative;
  block-size: 260px;
  inline-size: 210px;
}

.deal-type-background-img {
  inline-size: 75%;
  inset-block-end: 0;
}
</style>
