<script setup>
import InvoiceAddPaymentDrawer from '@/views/apps/invoice/InvoiceAddPaymentDrawer.vue'
import InvoiceEditable from '@/views/apps/invoice/InvoiceEditable.vue'
import InvoiceSendInvoiceDrawer from '@/views/apps/invoice/InvoiceSendInvoiceDrawer.vue'

// Store
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'

const invoiceListStore = useInvoiceStore()
const route = useRoute()
const invoiceData = ref()

// 👉 fetchInvoice
invoiceListStore.fetchInvoice(Number(route.params.id)).then(response => {
  invoiceData.value = {
    invoice: response.data.invoice,
    paymentDetails: response.data.paymentDetails,
    purchasedProducts: [{
      title: 'App Design',
      cost: 24,
      qty: 2,
      description: 'Designed UI kit & app pages.',
    }],
    note: 'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!',
    paymentMethod: 'Bank Account',
    salesperson: 'Tom Cook',
    thanksNote: 'Thanks for your business',
  }
}).catch(error => {
  console.log(error)
})

const isSendSidebarActive = ref(false)
const isAddPaymentSidebarActive = ref(false)
const paymentTerms = ref(true)
const clientNotes = ref(false)
const paymentStub = ref(false)
const selectedPaymentMethod = ref('Bank Account')

const paymentMethods = [
  'Bank Account',
  'PayPal',
  'UPI Transfer',
]
</script>

<template>
  <VRow>
    <!-- 👉 InvoiceEditable   -->
    <VCol
      v-if="invoiceData?.invoice"
      cols="12"
      md="9"
    >
      <InvoiceEditable :data="invoiceData" />
    </VCol>

    <!-- 👉 Right Column: Invoice Action -->
    <VCol
      cols="12"
      md="3"
    >
      <VCard class="mb-8">
        <VCardText>
          <!-- 👉 Send Invoice Trigger button -->
          <VBtn
            block
            prepend-icon="tabler-send"
            class="mb-2"
            @click="isSendSidebarActive = true"
          >
            Send Invoice
          </VBtn>

          <div class="d-flex gap-2">
            <div class="w-50">
              <!-- 👉  Preview button -->
              <VBtn
                block
                color="secondary"
                variant="tonal"
                class="mb-2"
                :to="{ name: 'apps-invoice-preview-id', params: { id: route.params.id } }"
              >
                Preview
              </VBtn>
            </div>

            <div class="w-50">
              <!-- 👉 Save button -->
              <VBtn
                block
                color="secondary"
                variant="tonal"
                class="mb-2"
              >
                Save
              </VBtn>
            </div>
          </div>

          <!-- 👉 Add Payment trigger button -->
          <VBtn
            block
            prepend-icon="tabler-currency-dollar"
            @click="isAddPaymentSidebarActive = true"
          >
            Add Payment
          </VBtn>
        </VCardText>
      </VCard>

      <!-- 👉 Accept payment via  -->
      <AppSelect
        v-model="selectedPaymentMethod"
        :items="paymentMethods"
        label="Accept Payment Via"
        class="mb-6"
      />

      <!-- 👉 Payment Terms -->
      <div class="d-flex align-center justify-space-between mb-2">
        <VLabel for="payment-terms">
          Payment Terms
        </VLabel>
        <div>
          <VSwitch
            id="payment-terms"
            v-model="paymentTerms"
          />
        </div>
      </div>

      <!-- 👉 Client Notes -->
      <div class="d-flex align-center justify-space-between mb-2">
        <VLabel for="client-notes">
          Client Notes
        </VLabel>
        <div>
          <VSwitch
            id="client-notes"
            v-model="clientNotes"
          />
        </div>
      </div>

      <!-- 👉 Payment Stub -->
      <div class="d-flex align-center justify-space-between">
        <VLabel for="payment-stub">
          Payment Stub
        </VLabel>
        <div>
          <VSwitch
            id="payment-stub"
            v-model="paymentStub"
          />
        </div>
      </div>
    </VCol>

    <!-- 👉 Invoice send drawer -->
    <InvoiceSendInvoiceDrawer v-model:isDrawerOpen="isSendSidebarActive" />

    <!-- 👉 Invoice add payment drawer -->
    <InvoiceAddPaymentDrawer v-model:isDrawerOpen="isAddPaymentSidebarActive" />
  </VRow>
</template>
