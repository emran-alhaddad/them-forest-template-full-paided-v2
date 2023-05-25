<script lang="ts" setup>
import BillingHistoryTable from './BillingHistoryTable.vue'

// Images
import mastercard from '@images/icons/payments/mastercard.png'
import visa from '@images/icons/payments/visa.png'

interface CardDetails {
  name: string
  number: string
  expiry: string
  isPrimary: boolean
  type: string
  cvv: string
  image: string
}
const selectedPaymentMethod = ref('credit-debit-atm-card')

const isPricingPlanDialogVisible = ref(false)
const isConfirmDialogVisible = ref(false)
const isCardEditDialogVisible = ref(false)
const isCardDetailSaveBilling = ref(false)

const creditCards: CardDetails[] = [
  {
    name: 'Tom McBride',
    number: '5531234567899856',
    expiry: '12/23',
    isPrimary: true,
    type: 'visa',
    cvv: '456',
    image: visa,
  },
  {
    name: 'Mildred Wagner',
    number: '4851234567895896',
    expiry: '10/27',
    isPrimary: false,
    type: 'mastercard',
    cvv: '123',
    image: mastercard,
  },
]

const countryList = ['United States', 'Canada', 'United Kingdom', 'Australia', 'New Zealand', 'India', 'Russia', 'China', 'Japan']

const currentCardDetails = ref()

const openEditCardDialog = (cardDetails: CardDetails) => {
  currentCardDetails.value = cardDetails

  isCardEditDialogVisible.value = true
}

const cardNumber = ref(135632156548789)
const cardName = ref('john Doe')
const cardExpiryDate = ref('05/24')
const cardCvv = ref(420)

const resetPaymentForm = () => {
  cardNumber.value = 135632156548789
  cardName.value = 'john Doe'
  cardExpiryDate.value = '05/24'
  cardCvv.value = 420

  selectedPaymentMethod.value = 'credit-debit-atm-card'
}
</script>

<template>
  <VRow>
    <!-- 👉 Current Plan -->
    <VCol cols="12">
      <VCard title="Current Plan">
        <VCardText>
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <div>
                <div class="mb-6">
                  <h3 class="text-base font-weight-medium mb-1">
                    Your Current Plan is Basic
                  </h3>
                  <p class="text-base">
                    A simple start for everyone
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-base font-weight-medium mb-1">
                    Active until Dec 09, 2021
                  </h3>
                  <p class="text-base">
                    We will send you a notification upon Subscription expiration
                  </p>
                </div>

                <div>
                  <h3 class="text-base font-weight-medium mb-1">
                    <span class="me-3">$199 Per Month</span>
                    <VChip
                      color="primary"
                      size="small"
                      label
                    >
                      Popular
                    </VChip>
                  </h3>
                  <p class="text-base mb-0">
                    Standard plan for small to medium businesses
                  </p>
                </div>
              </div>
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VAlert
                color="warning"
                variant="tonal"
              >
                <VAlertTitle class="mb-1">
                  We need your attention!
                </VAlertTitle>

                <span>Your plan requires update</span>
              </VAlert>

              <!-- progress -->
              <h6 class="d-flex font-weight-medium text-base mt-4 mb-2">
                <span>Days</span>
                <VSpacer />
                <span>24 of 30 Days</span>
              </h6>

              <VProgressLinear
                color="primary"
                rounded
                height="12"
                model-value="75"
              />

              <p class="text-base mt-2 mb-0">
                6 days remaining until your plan requires update
              </p>
            </VCol>

            <VCol cols="12">
              <div class="d-flex flex-wrap gap-y-4">
                <VBtn
                  class="me-3"
                  @click="isPricingPlanDialogVisible = true"
                >
                  upgrade plan
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="isConfirmDialogVisible = true"
                >
                  Cancel Subscription
                </VBtn>
              </div>
            </VCol>
          </VRow>

          <!-- 👉 Confirm Dialog -->
          <ConfirmDialog
            v-model:isDialogVisible="isConfirmDialogVisible"
            confirmation-question="Are you sure to cancel your subscription?"
            cancel-msg="Unsubscription Cancelled!!"
            cancel-title="Cancelled"
            confirm-msg="Your subscription cancelled successfully."
            confirm-title="Unsubscribed!"
          />

          <!-- 👉 plan and pricing dialog -->
          <PricingPlanDialog v-model:is-dialog-visible="isPricingPlanDialogVisible" />
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Payment Methods -->
    <VCol cols="12">
      <VCard title="Payment Methods">
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VRow>
                  <!-- 👉 card type switch -->
                  <VCol cols="12">
                    <VRadioGroup
                      v-model="selectedPaymentMethod"
                      inline
                    >
                      <VRadio
                        value="credit-debit-atm-card"
                        label="Credit/Debit/ATM Card"
                        color="primary"
                      />
                      <VRadio
                        value="cod-cheque"
                        label="COD/Cheque"
                        color="primary"
                      />
                    </VRadioGroup>
                  </VCol>

                  <VCol cols="12">
                    <VRow v-show="selectedPaymentMethod === 'credit-debit-atm-card'">
                      <!-- 👉 Card Number -->
                      <VCol cols="12">
                        <AppTextField
                          v-model="cardNumber"
                          label="Card Number"
                          type="number"
                        />
                      </VCol>

                      <!-- 👉 Name -->
                      <VCol
                        cols="12"
                        md="6"
                      >
                        <AppTextField
                          v-model="cardName"
                          label="Name"
                        />
                      </VCol>

                      <!-- 👉 Expiry date -->
                      <VCol
                        cols="6"
                        md="3"
                      >
                        <AppTextField
                          v-model="cardExpiryDate"
                          label="Expiry Date"
                        />
                      </VCol>

                      <!-- 👉 Cvv code -->
                      <VCol
                        cols="6"
                        md="3"
                      >
                        <AppTextField
                          v-model="cardCvv"
                          type="number"
                          label="CVV Code"
                        />
                      </VCol>

                      <!-- 👉 Future Billing switch -->
                      <VCol cols="12">
                        <VSwitch
                          v-model="isCardDetailSaveBilling"
                          density="compact"
                          label="Save card for future billing?"
                        />
                      </VCol>
                    </VRow>

                    <p
                      v-show="selectedPaymentMethod === 'cod-cheque'"
                      class="text-base"
                    >
                      Cash on delivery is a mode of payment where you make the payment after the goods/services are received.
                    </p>
                    <p
                      v-show="selectedPaymentMethod === 'cod-cheque'"
                      class="text-base"
                    >
                      You can pay cash or make the payment via debit/credit card directly to the delivery person.
                    </p>
                  </VCol>
                </VRow>
              </VCol>

              <!-- 👉 Saved Cards -->
              <VCol
                cols="12"
                md="6"
              >
                <h6 class="text-base font-weight-medium mb-3">
                  My Cards
                </h6>

                <div class="d-flex flex-column gap-y-4">
                  <VCard
                    v-for="card in creditCards"
                    :key="card.name"
                    flat
                    variant="tonal"
                  >
                    <VCardText class="d-flex flex-sm-row flex-column pa-4">
                      <div class="text-no-wrap">
                        <VImg
                          :src="card.image"
                          width="46"
                        />
                        <h4 class="my-3 text-body-1">
                          <span class="me-2">
                            {{ card.name }}
                          </span>
                          <VChip
                            v-if="card.isPrimary"
                            label
                            color="primary"
                            size="small"
                          >
                            Primary
                          </VChip>
                        </h4>
                        <span class="text-base">**** **** **** {{ card.number.substring(card.number.length - 4) }}</span>
                      </div>

                      <VSpacer />

                      <div class="d-flex flex-column text-sm-end">
                        <div class="d-flex flex-wrap gap-4 order-sm-0 order-1">
                          <VBtn
                            variant="tonal"
                            @click="openEditCardDialog(card)"
                          >
                            Edit
                          </VBtn>
                          <VBtn
                            color="secondary"
                            variant="tonal"
                          >
                            Delete
                          </VBtn>
                        </div>
                        <span class="text-sm mt-sm-auto mb-sm-0 my-5 order-sm-1 order-0">Card expires at {{ card.expiry }}</span>
                      </div>
                    </VCardText>
                  </VCard>
                </div>

                <!-- 👉 Add Edit Card Dialog -->
                <CardAddEditDialog
                  v-model:isDialogVisible="isCardEditDialogVisible"
                  :card-details="currentCardDetails"
                />
              </VCol>

              <!-- 👉 Payment method action button -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn type="submit">
                  Save changes
                </VBtn>
                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="resetPaymentForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Billing Address -->
    <VCol cols="12">
      <VCard title="Billing Address">
        <VCardText>
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- 👉 Company name -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField label="Company Name" />
              </VCol>

              <!-- 👉 Billing Email -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField label="Billing Email" />
              </VCol>

              <!-- 👉 Tax ID -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField label="Tax ID" />
              </VCol>

              <!-- 👉 Vat Number -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField label="VAT Number" />
              </VCol>

              <!-- 👉 Mobile -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  dirty
                  label="Phone Number"
                  type="number"
                  prefix="US (+1)"
                />
              </VCol>

              <!-- 👉 Country -->
              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  label="Country"
                  :items="countryList"
                />
              </VCol>

              <!-- 👉 Billing Address -->
              <VCol cols="12">
                <AppTextField label="Billing Address" />
              </VCol>

              <!-- 👉 State -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField label="State" />
              </VCol>

              <!-- 👉 Zip Code -->
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  label="Zip Code"
                  type="number"
                />
              </VCol>

              <!-- 👉 Actions Button -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn type="submit">
                  Save changes
                </VBtn>
                <VBtn
                  type="reset"
                  color="secondary"
                  variant="tonal"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Billing History -->
    <VCol cols="12">
      <BillingHistoryTable />
    </VCol>
  </VRow>
</template>

<style lang="scss">
.pricing-dialog {
  .pricing-title {
    font-size: 1.5rem !important;
  }

  .v-card {
    border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    box-shadow: none;
  }
}
</style>
