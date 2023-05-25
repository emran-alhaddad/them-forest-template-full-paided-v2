<script lang="ts" setup>
const stateList = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
]

const radios = ref('home')
const deliveryOption = ref('standard')
const paymentMethod = ref('credit-debit-card')
const panel = ref(0)

const paymentMethods = [
  {
    radioValue: 'credit-debit-card',
    radioLabel: 'Credit/Debit/ATM Card',
    icon: 'tabler-credit-card',
  },
  {
    radioValue: 'cash-on-delivery',
    radioLabel: 'Cash On Delivery',
    icon: 'tabler-help',
  },
]
</script>

<template>
  <VExpansionPanels v-model="panel">
    <!-- SECTION Delivery Address -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Delivery Address</VExpansionPanelTitle>

      <VExpansionPanelText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- 👉 Full Name -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField label="Full Name" />
            </VCol>

            <!-- 👉 Phone No -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Phone No"
                type="number"
              />
            </VCol>

            <!-- 👉 Address -->
            <VCol cols="12">
              <AppTextarea
                label="Address"
                rows="3"
              />
            </VCol>

            <!-- 👉 Pincode -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField
                label="Pincode"
                type="number"
              />
            </VCol>

            <!-- 👉 Landmark -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField label="Landmark" />
            </VCol>

            <!-- 👉 City -->
            <VCol
              cols="12"
              md="6"
            >
              <AppTextField label="City" />
            </VCol>

            <!-- 👉 State -->
            <VCol
              cols="12"
              md="6"
            >
              <AppSelect
                :items="stateList"
                label="State"
              />
            </VCol>

            <!-- 👉 Address Type  -->
            <VCol cols="12">
              <VLabel class="mb-3">
                Address Type
              </VLabel>
              <VRadioGroup
                v-model="radios"
                inline
              >
                <div>
                  <VRadio
                    label="Home (All day delivery)"
                    value="home"
                  />
                  <VRadio
                    label="Office (Delivery between 10 AM - 5 PM)"
                    value="office"
                  />
                </div>
              </VRadioGroup>
            </VCol>
          </VRow>
        </VForm>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Delivery Address -->

    <!-- SECTION Delivery Options -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Delivery Options</VExpansionPanelTitle>

      <VExpansionPanelText>
        <!-- 👉 Radio Group -->
        <VRadioGroup
          v-model="deliveryOption"
          class="delivery-options"
        >
          <div
            class="delivery-option d-flex rounded-t"
            :class="deliveryOption === 'standard' ? 'active' : ''"
            @click="deliveryOption = 'standard'"
          >
            <VRadio
              inline
              value="standard"
              class="mt-n4"
            />
            <div class="w-100">
              <div class="d-flex justify-space-between">
                <h6 class="text-base font-weight-medium">
                  Standard 3-5 Days
                </h6>
                <h6 class="text-base font-weight-medium">
                  Free
                </h6>
              </div>
              <span class="text-sm">Friday, 15 Nov - Monday, 18 Nov</span>
            </div>
          </div>
          <div
            class="delivery-option d-flex"
            :class="deliveryOption === 'express' ? 'active' : ''"
            @click="deliveryOption = 'express'"
          >
            <VRadio
              inline
              class="mt-n4"
              value="express"
            />
            <div class="w-100">
              <div class="d-flex justify-space-between">
                <h5 class="text-base font-weight-medium">
                  Express
                </h5>
                <h6 class="text-base font-weight-medium">
                  $5.00
                </h6>
              </div>
              <span class="text-sm">Friday, 15 Nov - Sunday, 17 Nov</span>
            </div>
          </div>
          <div
            class="delivery-option d-flex rounded-b"
            :class="deliveryOption === 'overnight' ? 'active' : ''"
            @click="deliveryOption = 'overnight'"
          >
            <VRadio
              inline
              class="mt-n4"
              value="overnight"
            />
            <div class="w-100">
              <div class="d-flex justify-space-between">
                <h6 class="text-base font-weight-medium">
                  Overnight
                </h6>
                <h6 class="text-base font-weight-medium">
                  $10.00
                </h6>
              </div>
              <span class="text-sm">Friday, 15 Nov - Saturday, 16 Nov</span>
            </div>
          </div>
        </VRadioGroup>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Delivery Options -->

    <!-- SECTION Payment Method -->
    <VExpansionPanel>
      <VExpansionPanelTitle>Payment Method</VExpansionPanelTitle>

      <VExpansionPanelText>
        <VRow>
          <VCol
            md="6"
            cols="12"
          >
            <VForm>
              <!-- 👉 Payment Method -->
              <div>
                <VRadioGroup
                  v-model="paymentMethod"
                  inline
                >
                  <div>
                    <VRadio
                      v-for="payment in paymentMethods"
                      :key="payment.radioValue"
                      :value="payment.radioValue"
                    >
                      <template #label>
                        <span class="me-1">{{ payment.radioLabel }}</span>
                        <VIcon
                          size="18"
                          :icon="payment.icon"
                        />
                      </template>
                    </VRadio>
                  </div>
                </VRadioGroup>
              </div>

              <VRow v-show="paymentMethod === 'credit-debit-card'">
                <!-- 👉 Card Number -->
                <VCol cols="12">
                  <AppTextField
                    label="Card Number"
                    type="number"
                  />
                </VCol>

                <!-- 👉 Name -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField label="Name" />
                </VCol>

                <!-- 👉 Expire Date -->
                <VCol
                  cols="6"
                  md="3"
                >
                  <AppTextField label="Expiry" />
                </VCol>

                <!-- 👉 CVV Code -->
                <VCol
                  cols="6"
                  md="3"
                >
                  <AppTextField
                    label="CVV"
                    type="number"
                    max="3"
                  />
                </VCol>
              </VRow>
            </VForm>
          </VCol>
        </VRow>

        <VDivider class="my-5" />

        <!-- 👉 Place Order -->
        <div class="d-flex gap-4">
          <VBtn>Place Order</VBtn>
          <VBtn
            color="secondary"
            variant="tonal"
          >
            Cancel
          </VBtn>
        </div>
      </VExpansionPanelText>
    </VExpansionPanel>
    <!-- !SECTION Payment Method -->
  </VExpansionPanels>
</template>

<style lang="scss">
.delivery-options {
  .v-selection-control-group {
    inline-size: 100%;
  }
}

.delivery-option {
  padding: 1rem;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &.active {
    border-color: rgb(var(--v-theme-primary));
  }
}
</style>
