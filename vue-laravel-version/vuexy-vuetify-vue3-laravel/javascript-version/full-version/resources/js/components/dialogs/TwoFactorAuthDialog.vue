<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  smsCode: {
    type: String,
    required: false,
    default: '',
  },
  authAppCode: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits(['update:isDialogVisible'])

const authMethods = [
  {
    icon: 'tabler-settings',
    title: 'Authenticator Apps',
    subtitle: 'Get code from an app like Google Authenticator or Microsoft Authenticator.',
    method: 'authApp',
  },
  {
    icon: 'tabler-message',
    title: 'SMS',
    subtitle: 'We will send a code via SMS if you need to use your backup login method.',
    method: 'sms',
  },
]

const selectedMethod = ref(['authApp'])
const isAuthAppDialogVisible = ref(false)
const isSmsDialogVisible = ref(false)

const openSelectedMethodDialog = () => {
  if (selectedMethod.value[0] === 'authApp') {
    isAuthAppDialogVisible.value = true
    isSmsDialogVisible.value = false
    emit('update:isDialogVisible', false)
  }
  if (selectedMethod.value[0] === 'sms') {
    isAuthAppDialogVisible.value = false
    isSmsDialogVisible.value = true
    emit('update:isDialogVisible', false)
  }
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
      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-3">
          Select Authentication Method
        </VCardTitle>
        <VCardSubtitle>
          <span class="text-base">
            You also need to select a method by which the proxy authenticates to the directory serve.
          </span>
        </VCardSubtitle>
      </VCardItem>

      <VCardText>
        <VList
          v-model:selected="selectedMethod"
          mandatory
          variant="outlined"
          class="card-list auth-method-card"
          :class="$vuetify.display.xs ? 'responsive-card' : ''"
        >
          <VListItem
            v-for="item of authMethods"
            :key="item.title"
            rounded
            :value="item.method"
            class="py-5 px-6 my-6"
            :class="selectedMethod[0] === item.method && 'bg-light-primary text-primary'"
          >
            <template #prepend>
              <VIcon
                :icon="item.icon"
                size="38"
              />
            </template>

            <VListItemTitle class="mb-2">
              <span class="text-xl font-weight-medium">
                {{ item.title }}
              </span>
            </VListItemTitle>
            <p class="text-base mb-0">
              {{ item.subtitle }}
            </p>
          </VListItem>
        </VList>

        <div class="d-flex gap-4 justify-center">
          <VBtn @click="openSelectedMethodDialog">
            submit
          </VBtn>
          <VBtn
            color="secondary"
            variant="tonal"
            @click="$emit('update:isDialogVisible', false)"
          >
            Close
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <AddAuthenticatorAppDialog
    v-model:isDialogVisible="isAuthAppDialogVisible"
    :auth-code="props.authAppCode"
  />
  <EnableOneTimePasswordDialog
    v-model:isDialogVisible="isSmsDialogVisible"
    :mobile-number="props.smsCode"
  />
</template>

<style lang="scss">
.auth-method-card {
  &.card-list .v-list-item {
    padding-block: 20px !important;
    padding-inline: 30px !important;
  }

  .v-list-item--active {
    background-color: transparent !important;

    .v-list-item__overlay {
      opacity: 0;
    }
  }

  &.responsive-card {
    .v-list-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;

      .v-list-item__prepend {
        svg {
          margin: 0;
        }
      }
    }
  }
}
</style>
