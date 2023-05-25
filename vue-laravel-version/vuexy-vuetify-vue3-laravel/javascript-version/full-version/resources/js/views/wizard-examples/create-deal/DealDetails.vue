<script setup>
const props = defineProps({
  formData: {
    type: null,
    required: true,
  },
})

const emit = defineEmits(['update:formData'])

const formData = ref(props.formData)

const offeredItems = [
  'Apple iPhone 12 Pro Max (256GB)',
  'Apple iPhone 12 Pro (512GB)',
  'Apple iPhone 11 Pro Max (256GB)',
  'Apple iPhone 11 (64GB)',
  'Apple iPhone 12 Mini (256GB)',
  'OnePlus Nord CE 56 (128GB)',
]

watch(formData, () => {
  emit('update:formData', formData.value)
})
</script>

<template>
  <VForm>
    <VRow>
      <VCol
        cols="12"
        sm="6"
      >
        <AppTextField
          v-model="formData.title"
          label="Deal Title"
        />
      </VCol>

      <VCol
        cols="12"
        sm
      >
        <AppTextField
          v-model="formData.code"
          label="Deal Code"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppTextarea
          v-model="formData.description"
          label="Deal Description"
          rows="4"
          auto-grow
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VRow>
          <VCol cols="12">
            <AppSelect
              v-model="formData.offeredUItems"
              multiple
              chips
              label="Offered Items"
              :items="offeredItems"
            />
          </VCol>

          <VCol cols="12">
            <AppSelect
              v-model="formData.cartCondition"
              label="Cart Condition"
              :items="['Cart must contain all selected Downloads', 'Cart needs one or more of the selected Downloads']"
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <AppDateTimePicker
          v-model="formData.dealDuration"
          label="Deal Duration"
          :config="{ mode: 'range' }"
        />
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <h6 class="text-sm font-weight-medium">
          Notify Users
        </h6>

        <div class="d-flex align-center flex-wrap gap-x-3">
          <VCheckbox
            v-model="formData.notification.email"
            label="Email"
            value="email"
          />
          <VCheckbox
            v-model="formData.notification.sms"
            label="SMS"
            value="sms"
          />
          <VCheckbox
            v-model="formData.notification.pushNotification"
            label="Push Notification"
            value="push-notification"
          />
        </div>
      </VCol>
    </VRow>
  </VForm>
</template>
