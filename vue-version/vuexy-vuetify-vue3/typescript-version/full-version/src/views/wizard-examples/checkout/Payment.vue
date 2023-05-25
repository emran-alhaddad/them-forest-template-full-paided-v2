<script setup lang="ts">
import type { CheckoutData } from './types'

const prop = defineProps<{
  currentStep?: number
  checkoutData: CheckoutData
}>()

const emit = defineEmits<{
  (e: 'update:currentStep', value: number): void
  (e: 'update:checkout-data', value: CheckoutData): void
}>()

const checkoutPaymentDataLocal = ref(prop.checkoutData)

const selectedPaymentMethod = ref('card')

const cardFormData = ref({
  cardNumber: null,
  cardName: '',
  cardExpiry: '',
  cardCvv: null,
  isCardSave: true,
})

const giftCardFormData = ref({
  giftCardNumber: null,
  giftCardPin: null,
})

const selectedDeliveryAddress = computed(() => {
  return checkoutPaymentDataLocal.value.addresses.filter(address => {
    return address.value === checkoutPaymentDataLocal.value.deliveryAddress
  })
})

const updateCartData = () => {
  emit('update:checkout-data', checkoutPaymentDataLocal.value)
}

const nextStep = () => {
  updateCartData()
  emit('update:currentStep', prop.currentStep ? prop.currentStep + 1 : 1)
}

watch(() => prop.currentStep, updateCartData)
</script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="8"
    >
      <!-- 👉 Offers alert -->
      <VAlert
        color="success"
        variant="tonal"
        class="mb-4"
      >
        <template #prepend>
          <VIcon
            icon="tabler-bookmarks"
            size="34"
          />
        </template>
        <VAlertTitle class="text-success mb-3">
          Bank Offers
        </VAlertTitle>

        <p class="mb-1">
          - 10% Instant Discount on Bank of America Corp Bank Debit and Credit cards
        </p>
      </VAlert>

      <VTabs
        v-model="selectedPaymentMethod"
        class="v-tabs-pill"
        density="comfortable"
      >
        <VTab value="card">
          Card
        </VTab>
        <VTab value="cash-on-delivery">
          Cash on Delivery
        </VTab>
        <VTab value="gift-card">
          Gift Card
        </VTab>
      </VTabs>

      <VWindow
        v-model="selectedPaymentMethod"
        class="mt-5"
        style="max-width: 600px;"
      >
        <VWindowItem value="card">
          <VForm class="mt-3">
            <VRow>
              <VCol cols="12">
                <AppTextField
                  v-model="cardFormData.cardNumber"
                  type="number"
                  label="Card Number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cardFormData.cardName"
                  label="Name"
                />
              </VCol>

              <VCol
                cols="6"
                md="3"
              >
                <AppTextField
                  v-model="cardFormData.cardExpiry"
                  label="Expiry"
                />
              </VCol>

              <VCol
                cols="6"
                md="3"
              >
                <AppTextField
                  v-model="cardFormData.cardCvv"
                  label="CVV"
                  type="number"
                >
                  <template #append-inner>
                    <VTooltip
                      text="Card Verification Value"
                      location="bottom"
                    >
                      <template #activator="{ props: tooltipProps }">
                        <VIcon
                          v-bind="tooltipProps"
                          size="20"
                          icon="tabler-help"
                        />
                      </template>
                    </VTooltip>
                  </template>
                </AppTextField>
              </VCol>

              <VCol cols="12">
                <VSwitch
                  v-model="cardFormData.isCardSave"
                  label="Save Card for future billing?"
                />

                <div class="mt-4">
                  <VBtn
                    class="me-3"
                    @click="nextStep"
                  >
                    Checkout
                  </VBtn>
                  <VBtn
                    variant="tonal"
                    color="secondary"
                  >
                    Reset
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="cash-on-delivery">
          <p class="text-base text-high-emphasis">
            Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance.
          </p>

          <VBtn @click="nextStep">
            Pay on delivery
          </VBtn>
        </VWindowItem>

        <VWindowItem value="gift-card">
          <h6 class="text-base font-weight-medium mb-4">
            Enter Gift Card Details
          </h6>
          <VForm>
            <VRow>
              <VCol cols="12">
                <AppTextField
                  v-model="giftCardFormData.giftCardNumber"
                  label="Gift Card Number"
                />
              </VCol>

              <VCol cols="12">
                <AppTextField
                  v-model="giftCardFormData.giftCardPin"
                  label="Gift Card Pin"
                />
              </VCol>

              <VCol cols="12">
                <VBtn @click="nextStep">
                  Redeem Gift Card
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VCard
        flat
        variant="outlined"
      >
        <VCardText>
          <h6 class="text-base font-weight-medium mb-4">
            Price Details
          </h6>

          <div class="d-flex justify-space-between text-base mb-2">
            <span class="text-high-emphasis">Order Total</span>
            <span>${{ checkoutPaymentDataLocal.orderAmount }}.00</span>
          </div>

          <div class="d-flex justify-space-between text-base">
            <span class="text-high-emphasis">Delivery Charges</span>
            <div v-if="checkoutPaymentDataLocal.deliverySpeed === 'free'">
              <span class="text-decoration-line-through text-disabled me-2">$5.00</span>
              <VChip
                color="success"
                label
              >
                Free
              </VChip>
            </div>
            <div v-else>
              <span>${{ checkoutPaymentDataLocal.deliveryCharges }}</span>
            </div>
          </div>
        </VCardText>

        <VDivider />

        <VCardText>
          <div class="d-flex justify-space-between text-base mb-2">
            <span class="text-high-emphasis font-weight-medium">Total</span>
            <span>${{ checkoutPaymentDataLocal.orderAmount + checkoutPaymentDataLocal.deliveryCharges }}.00</span>
          </div>

          <div class="d-flex justify-space-between text-base mb-4">
            <span class="text-high-emphasis font-weight-medium">Deliver to:</span>
            <VChip
              color="primary"
              class="text-capitalize"
              label
            >
              {{ checkoutPaymentDataLocal.deliveryAddress }}
            </VChip>
          </div>

          <template
            v-for="item in selectedDeliveryAddress"
            :key="item.value"
          >
            <h6 class="text-base font-weight-medium">
              {{ item.title }}
            </h6>
            <p class="text-base mb-1">
              {{ item.desc }}
            </p>
            <p class="text-base mb-3">
              Mobile : {{ item.subtitle }}
            </p>
          </template>

          <a
            href="#"
            class="font-weight-medium text-base"
          >Change address</a>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
