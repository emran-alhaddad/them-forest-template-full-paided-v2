<script setup>
import DealDetails from '@/views/wizard-examples/create-deal/DealDetails.vue'
import DealReviewComplete from '@/views/wizard-examples/create-deal/DealReviewComplete.vue'
import CreateDealType from '@/views/wizard-examples/create-deal/DealType.vue'
import DealUsage from '@/views/wizard-examples/create-deal/DealUsage.vue'

const createDealSteps = [
  {
    title: 'Deal Type',
    subtitle: 'Choose type of deal',
    icon: 'tabler-users',
  },
  {
    title: 'Deal Details',
    subtitle: 'Provide deal details',
    icon: 'tabler-id',
  },
  {
    title: 'Deal Usage',
    subtitle: 'Limitations & Offers',
    icon: 'tabler-credit-card',
  },
  {
    title: 'Review & Complete',
    subtitle: 'Launch a deal',
    icon: 'tabler-checkbox',
  },
]

const currentStep = ref(0)

const createDealData = ref({
  dealType: {
    Offer: 'percentage',
    discount: null,
    region: null,
  },
  dealDetails: {
    title: '',
    code: '',
    description: '',
    offeredUItems: [],
    cartCondition: null,
    dealDuration: '',
    notification: {
      email: false,
      sms: false,
      pushNotification: false,
    },
  },
  dealUsage: {
    userType: null,
    maxUsers: null,
    cartAmount: null,
    promotionFree: null,
    paymentMethod: null,
    dealStatus: null,
    isSingleUserCustomer: false,
  },
  dealReviewComplete: { isDealDetailsConfirmed: true },
})

const onSubmit = () => {
  console.log('createDealData :>> ', createDealData.value)
}
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="4"
        lg="3"
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      >
        <VCardText>
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="createDealSteps"
            icon-size="24"
            class="stepper-icon-step-bg"
          />
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        md="8"
        lg="9"
      >
        <VCardText>
          <VWindow
            v-model="currentStep"
            class="disable-tab-transition"
          >
            <VWindowItem>
              <CreateDealType v-model:form-data="createDealData.dealType" />
            </VWindowItem>

            <VWindowItem>
              <DealDetails v-model:form-data="createDealData.dealDetails" />
            </VWindowItem>

            <VWindowItem>
              <DealUsage v-model:form-data="createDealData.dealUsage" />
            </VWindowItem>

            <VWindowItem>
              <DealReviewComplete v-model:form-data="createDealData.dealReviewComplete" />
            </VWindowItem>
          </VWindow>

          <div class="d-flex justify-space-between mt-8">
            <VBtn
              color="secondary"
              variant="tonal"
              :disabled="currentStep === 0"
              @click="currentStep--"
            >
              <VIcon
                icon="tabler-chevron-left"
                start
                class="flip-in-rtl"
              />
              Previous
            </VBtn>

            <VBtn
              v-if="createDealSteps.length - 1 === currentStep"
              color="success"
              append-icon="tabler-check"
              @click="onSubmit"
            >
              submit
            </VBtn>

            <VBtn
              v-else
              @click="currentStep++"
            >
              Next

              <VIcon
                icon="tabler-chevron-right"
                end
                class="flip-in-rtl"
              />
            </VBtn>
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
