<script setup lang="ts">
interface Props {
  isDialogVisible: boolean
}

interface Emit {
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}

const referAndEarnSteps = [
  {
    icon: 'tabler-send',
    title: 'Send Invitation 👍🏻',
    subtitle: 'Send your referral link to your friend',
  },
  {
    icon: 'tabler-rocket',
    title: 'Registration 😎',
    subtitle: 'Let them register to our services',
  },
  {
    icon: 'tabler-keyboard',
    title: 'Free Trial  🎉',
    subtitle: 'Your friend will get 30 days free trial',
  },
]
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="740"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="$emit('update:isDialogVisible', false)" />

    <VCard class="refer-and-earn-dialog">
      <VCardText class="px-5 px-sm-16 pt-16 pb-10">
        <h5 class="text-h5 text-center mb-3">
          Refer & Earn
        </h5>
        <p class="text-sm-body-1 text-center">
          Invite your friend to vuexy, if they sign up, you and your friend will get 30 days free trial
        </p>

        <VRow class="text-center mt-8">
          <VCol
            v-for="step in referAndEarnSteps"
            :key="step.title"
            cols="12"
            sm="4"
          >
            <VAvatar
              variant="tonal"
              size="82"
              color="primary"
              rounded
            >
              <VIcon
                size="40"
                :icon="step.icon"
              />
            </VAvatar>

            <h6 class="text-lg mt-4 mb-2">
              {{ step.title }}
            </h6>
            <span class="text-base">{{ step.subtitle }}</span>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="px-5 px-sm-16 pt-10 pb-16">
        <h6 class="text-lg mb-4">
          Invite your friends
        </h6>

        <p class="mb-1 text-sm">
          Enter your friend's email address and invite them to join Vuexy 😍
        </p>
        <VForm
          class="d-flex align-center gap-4"
          @submit.prevent="() => {}"
        >
          <AppTextField
            density="compact"
            placeholder="johnDoe@gmail.com"
          />

          <VBtn type="submit">
            Submit
          </VBtn>
        </VForm>

        <h6 class="text-h6 mb-4 mt-7">
          Share the referral link
        </h6>

        <p class="mb-1 text-sm">
          You can also copy and send it or share it on your social media. 🚀
        </p>
        <VForm
          class="d-flex align-center flex-wrap gap-3"
          @submit.prevent="() => {}"
        >
          <AppTextField
            density="compact"
            placeholder="http://referral.link"
            class="refer-link-input me-1"
          >
            <template #append-inner>
              <VBtn variant="text">
                COPY LINK
              </VBtn>
            </template>
          </AppTextField>

          <div class="d-flex gap-3">
            <VBtn
              icon
              class="rounded"
              color="#3B5998"
              size="38"
            >
              <VIcon
                color="white"
                icon="tabler-brand-facebook"
                size="22"
              />
            </VBtn>

            <VBtn
              icon
              class="rounded"
              color="#55ACEE"
              size="38"
            >
              <VIcon
                color="white"
                icon="tabler-brand-twitter"
                size="22"
              />
            </VBtn>

            <VBtn
              icon
              class="rounded"
              color="#007BB6"
              size="38"
            >
              <VIcon
                color="white"
                icon="tabler-brand-linkedin"
                size="22"
              />
            </VBtn>
          </div>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.refer-link-input {
  .v-field--appended {
    padding-inline-end: 0;
  }

  .v-field__append-inner {
    padding-block-start: 0.125rem;
  }
}
</style>
