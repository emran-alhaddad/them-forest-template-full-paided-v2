export const collapsible = {
  ts: `<script lang="ts" setup>
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
`,
  js: `<script setup>
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
`,
}

export const formHint = {
  ts: `<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
  js: `<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
}

export const formValidation = {
  ts: `<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
</script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
  js: `<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
</script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
}

export const formWithTabs = {
  ts: `<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
</script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,
  js: `<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
</script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,
}

export const horizontalForm = {
  ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
  js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
}

export const horizontalFormWithIcons = {
  ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
  js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
}

export const multipleColumn = {
  ts: `<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
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
</template>
`,
  js: `<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
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
</template>
`,
}

export const verticalForm = {
  ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
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
</template>
`,
  js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
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
</template>
`,
}

export const verticalFormWithIcons = {
  ts: `<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
  js: `<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
</script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,
}
