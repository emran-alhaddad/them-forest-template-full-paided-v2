<script setup lang="ts">
import laptopGirl from '@images/illustrations/laptop-girl.png'

const props = defineProps<{
  isDialogVisible: boolean
}>()

const emit = defineEmits<{
  (e: 'update:isDialogVisible', val: boolean): void
  (e: 'updatedData', val: unknown): void
}>()

const currentStep = ref(0)

const createApp = [
  {
    icon: 'tabler-clipboard',
    title: 'Details',
    subtitle: 'Enter Details',
  },
  {
    icon: 'tabler-box',
    title: 'Frameworks',
    subtitle: 'Select Framework',
  },
  {
    icon: 'tabler-database',
    title: 'Database',
    subtitle: 'Select Database',
  },
  {
    icon: 'tabler-credit-card',
    title: 'Billing',
    subtitle: 'Payment Details',
  },
  {
    icon: 'tabler-check',
    title: 'Submit',
    subtitle: 'submit',
  },
]

const categories = [
  {
    icon: 'tabler-briefcase',
    color: 'info',
    title: 'CRM Application',
    subtitle: 'Scales with any business',
    slug: 'crm-application',
  },
  {
    icon: 'tabler-shopping-cart',
    color: 'success',
    title: 'Ecommerce Platforms',
    subtitle: 'Grow Your Business With App',
    slug: 'ecommerce-application',
  },
  {
    icon: 'tabler-device-laptop',
    color: 'error',
    title: 'Online Learning platform',
    subtitle: 'Start learning today',
    slug: 'online-learning-application',
  },
]

const frameworks = [
  {
    icon: 'tabler-brand-react-native',
    color: 'info',
    title: 'React Native',
    subtitle: 'Create truly native apps',
    slug: 'react-framework',
  },
  {
    icon: 'tabler-brand-angular',
    color: 'error',
    title: 'Angular',
    subtitle: 'Most suited for your application',
    slug: 'angular-framework',
  },
  {
    icon: 'tabler-brand-html5',
    color: 'warning',
    title: 'HTML',
    subtitle: 'Progressive Framework',
    slug: 'html-framework',
  },
  {
    icon: 'tabler-brand-python',
    color: 'primary',
    title: 'Python',
    subtitle: 'js web frameworks',
    slug: 'js-framework',
  },
]

const databases = [
  {
    icon: 'tabler-brand-firebase',
    color: 'error',
    title: 'Firebase',
    subtitle: 'Cloud Firestore',
    slug: 'firebase-database',
  },
  {
    icon: 'tabler-brand-amazon',
    color: 'warning',
    title: 'AWS',
    subtitle: 'Amazon Fast NoSQL Database',
    slug: 'aws-database',
  },
  {
    icon: 'tabler-database',
    color: 'info',
    title: 'MySQL',
    subtitle: 'Basic MySQL database',
    slug: 'mysql-database',
  },
]

const createAppData = ref({
  category: 'crm-application',
  framework: 'vue-framework',
  database: 'firebase-database',
  cardNumber: null,
  cardName: '',
  cardExpiry: '',
  cardCvv: '',
  isSave: false,
})

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
  currentStep.value = 0
}

watch(props, () => {
  if (!props.isDialogVisible)
    currentStep.value = 0
})

const onSubmit = () => {
  // eslint-disable-next-line no-alert
  alert('submitted...!!')
  emit('updatedData', createAppData.value)
}
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="900"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn
      size="small"
      @click="emit('update:isDialogVisible', false)"
    />
    <VCard class="create-app-dialog">
      <VCardText class="pa-5 pa-sm-10">
        <h5 class="text-h5 text-center mb-2">
          Create App
        </h5>
        <p class="text-sm text-center mb-8">
          Provide data with this form to create your app.
        </p>

        <VRow>
          <VCol
            cols="12"
            sm="5"
            md="4"
            lg="3"
          >
            <AppStepper
              v-model:current-step="currentStep"
              direction="vertical"
              :items="createApp"
              icon-size="24"
              class="stepper-icon-step-bg"
            />
          </VCol>

          <VCol
            cols="12"
            sm="7"
            md="8"
            lg="9"
          >
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition stepper-content"
            >
              <!-- 👉 category -->
              <VWindowItem>
                <AppTextField label="Application Name" />

                <h6 class="text-h6 my-4">
                  Category
                </h6>
                <VRadioGroup v-model="createAppData.category">
                  <VList class="card-list">
                    <VListItem
                      v-for="category in categories"
                      :key="category.title"
                      @click="createAppData.category = category.slug"
                    >
                      <template #prepend>
                        <VAvatar
                          size="48"
                          rounded
                          variant="tonal"
                          :color="category.color"
                          :icon="category.icon"
                        />
                      </template>

                      <VListItemTitle class="mb-1">
                        {{ category.title }}
                      </VListItemTitle>
                      <VListItemSubtitle>
                        {{ category.subtitle }}
                      </VListItemSubtitle>

                      <template #append>
                        <VRadio :value="category.slug" />
                      </template>
                    </VListItem>
                  </VList>
                </VRadioGroup>
              </VWindowItem>

              <!-- 👉 Frameworks -->
              <VWindowItem>
                <h6 class="text-h6 mb-4">
                  Select Framework
                </h6>
                <VRadioGroup v-model="createAppData.framework">
                  <VList class="card-list">
                    <VListItem
                      v-for="framework in frameworks"
                      :key="framework.title"
                      @click="createAppData.framework = framework.slug"
                    >
                      <template #prepend>
                        <VAvatar
                          size="48"
                          rounded
                          variant="tonal"
                          :color="framework.color"
                        >
                          <VIcon :icon="framework.icon" />
                        </VAvatar>
                      </template>
                      <VListItemTitle class="mb-1">
                        {{ framework.title }}
                      </VListItemTitle>
                      <VListItemSubtitle>
                        {{ framework.subtitle }}
                      </VListItemSubtitle>
                      <template #append>
                        <VRadio :value="framework.slug" />
                      </template>
                    </VListItem>
                  </VList>
                </VRadioGroup>
              </VWindowItem>

              <!-- 👉 Database Engine -->
              <VWindowItem>
                <AppTextField label="Database Name" />

                <h6 class="text-h6 my-4">
                  Select Database Engine
                </h6>
                <VRadioGroup v-model="createAppData.database">
                  <VList class="card-list">
                    <VListItem
                      v-for="database in databases"
                      :key="database.title"
                      @click="createAppData.database = database.slug"
                    >
                      <template #prepend>
                        <VAvatar
                          size="48"
                          rounded
                          variant="tonal"
                          :color="database.color"
                        >
                          <VIcon :icon="database.icon" />
                        </VAvatar>
                      </template>
                      <VListItemTitle class="mb-1">
                        {{ database.title }}
                      </VListItemTitle>
                      <VListItemSubtitle>
                        {{ database.subtitle }}
                      </VListItemSubtitle>
                      <template #append>
                        <VRadio :value="database.slug" />
                      </template>
                    </VListItem>
                  </VList>
                </VRadioGroup>
              </VWindowItem>

              <!-- 👉 Billing form -->
              <VWindowItem>
                <h6 class="text-h6 mb-4">
                  Payment Details
                </h6>

                <VForm>
                  <VRow>
                    <VCol cols="12">
                      <AppTextField
                        v-model="createAppData.cardNumber"
                        label="Card Number"
                        type="number"
                      />
                    </VCol>

                    <VCol
                      cols="12"
                      md="6"
                    >
                      <AppTextField
                        v-model="createAppData.cardName"
                        label="Name on Card"
                      />
                    </VCol>

                    <VCol
                      cols="6"
                      md="3"
                    >
                      <AppTextField
                        v-model="createAppData.cardExpiry"
                        label="Expiry"
                      />
                    </VCol>

                    <VCol
                      cols="6"
                      md="3"
                    >
                      <AppTextField
                        v-model="createAppData.cardCvv"
                        label="CVV"
                      />
                    </VCol>

                    <VCol cols="12">
                      <VSwitch
                        v-model="createAppData.isSave"
                        label="Save Card for future billing?"
                      />
                    </VCol>
                  </VRow>
                </VForm>
              </VWindowItem>

              <VWindowItem class="text-center">
                <h6 class="text-h6 mb-2">
                  Submit 🥳
                </h6>
                <p class="text-sm mb-6">
                  Submit to kickstart your project.
                </p>

                <VImg
                  :src="laptopGirl"
                  width="176"
                  class="mx-auto"
                />
              </VWindowItem>
            </VWindow>

            <div class="d-flex justify-space-between mt-8">
              <VBtn
                variant="tonal"
                color="secondary"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="tabler-arrow-left"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="createApp.length - 1 === currentStep"
                color="success"
                @click="onSubmit"
              >
                submit
                <VIcon
                  icon="tabler-check"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="tabler-arrow-right"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.stepper-content .card-list {
  --v-card-list-gap: 24px;
}
</style>
