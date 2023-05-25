<script setup>
import themeselectionQr from '@images/pages/themeselection-qr.png'

const props = defineProps({
  authCode: {
    type: String,
    required: false,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'submit',
])

const authCode = ref(structuredClone(toRaw(props.authCode)))

const formSubmit = () => {
  if (authCode.value) {
    emit('submit', authCode.value)
    emit('update:isDialogVisible', false)
  }
}

const resetAuthCode = () => {
  authCode.value = structuredClone(toRaw(props.authCode))
  emit('update:isDialogVisible', false)
}
</script>

<template>
  <VDialog
    max-width="787"
    :model-value="props.isDialogVisible"
    @update:model-value="(val) => $emit('update:isDialogVisible', val)"
  >
    <!-- Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard class="pa-5 pa-sm-8">
      <VCardItem>
        <VCardTitle class="text-h5 font-weight-medium text-center">
          Add Authenticator App
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-3">
        <h6 class="text-lg font-weight-medium mb-2">
          Authenticator Apps
        </h6>

        <p class="mb-6">
          Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below.
        </p>

        <div class="mb-4">
          <VImg
            width="122"
            :src="themeselectionQr"
            class="mx-auto"
          />
        </div>

        <VAlert
          color="light-warning"
          class="text-warning"
        >
          <span class="text-lg font-weight-medium">ASDLKNASDA9AHS678dGhASD78AB</span>
          <p class="mb-0">
            If you are unable to scan the QR code, you can manually enter the secret key below.
          </p>
        </VAlert>
        <VForm @submit.prevent="() => {}">
          <AppTextField
            v-model="authCode"
            name="auth-code"
            label="Enter Authentication Code"
            class="my-4"
          />

          <div class="d-flex justify-end flex-wrap gap-3">
            <VBtn
              color="secondary"
              variant="tonal"
              @click="resetAuthCode"
            >
              Cancel
            </VBtn>

            <VBtn
              type="submit"
              @click="formSubmit"
            >
              Continue
              <VIcon
                end
                icon="tabler-arrow-right"
                class="flip-in-rtl"
              />
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
