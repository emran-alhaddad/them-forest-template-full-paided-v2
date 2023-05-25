<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

// Components
import InvoiceAddPaymentDrawer from '@/views/apps/invoice/InvoiceAddPaymentDrawer.vue'
import InvoiceSendInvoiceDrawer from '@/views/apps/invoice/InvoiceSendInvoiceDrawer.vue'

// Store
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'

const invoiceListStore = useInvoiceStore()
const route = useRoute()
const invoiceData = ref()
const paymentDetails = ref()
const isAddPaymentSidebarVisible = ref(false)
const isSendPaymentSidebarVisible = ref(false)

// 👉 fetchInvoice
invoiceListStore.fetchInvoice(Number(route.params.id)).then(response => {
  invoiceData.value = response.data.invoice
  paymentDetails.value = response.data.paymentDetails
}).catch(error => {
  console.log(error)
})

// ℹ️ Your real data will contain this information
const purchasedProducts = [
  {
    name: 'Vuexy Admin Template',
    description: 'HTML Admin Template',
    qty: 1,
    cost: 32,
  },
  {
    name: 'Frest Admin Template',
    description: 'Angular Admin Template',
    qty: 1,
    cost: 22,
  },
  {
    name: 'Apex Admin Template',
    description: 'HTML Admin Template',
    qty: 2,
    cost: 17,
  },
  {
    name: 'Robust Admin Template',
    description: 'React Admin Template',
    qty: 1,
    cost: 66,
  },
]

// 👉 Print Invoice
const printInvoice = () => {
  window.print()
}
</script>

<template>
  <section v-if="invoiceData">
    <VRow>
      <VCol
        cols="12"
        md="9"
      >
        <VCard>
          <!-- SECTION Header -->
          <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row">
            <!-- 👉 Left Content -->
            <div class="ma-sm-4">
              <div class="d-flex align-center mb-6">
                <!-- 👉 Logo -->
                <VNodeRenderer
                  :nodes="themeConfig.app.logo"
                  class="me-3"
                />

                <!-- 👉 Title -->
                <h6 class="font-weight-bold text-capitalize text-h4">
                  {{ themeConfig.app.title }}
                </h6>
              </div>

              <!-- 👉 Address -->
              <p class="mb-0">
                Office 149, 450 South Brand Brooklyn
              </p>
              <p class="my-2">
                San Diego County, CA 91905, USA
              </p>
              <p class="mb-0">
                +1 (123) 456 7891, +44 (876) 543 2198
              </p>
            </div>

            <!-- 👉 Right Content -->
            <div class="mt-4 ma-sm-4">
              <!-- 👉 Invoice ID -->
              <h6 class="font-weight-medium text-h4">
                Invoice #{{ invoiceData.id }}
              </h6>

              <!-- 👉 Issue Date -->
              <p class="my-3">
                <span>Date Issued: </span>
                <span class="font-weight-medium">{{ invoiceData.issuedDate }}</span>
              </p>

              <!-- 👉 Due Date -->
              <p class="mb-0">
                <span>Due Date: </span>
                <span class="font-weight-medium">{{ invoiceData.dueDate }}</span>
              </p>
            </div>
          </VCardText>
          <!-- !SECTION -->

          <VDivider />

          <!-- 👉 Payment Details -->
          <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
            <div class="ma-sm-4">
              <h6 class="text-base font-weight-medium mb-6">
                Invoice To:
              </h6>
              <p class="mb-1">
                {{ invoiceData.client.name }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.company }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.contact }}
              </p>
              <p class="mb-0">
                {{ invoiceData.client.companyEmail }}
              </p>
            </div>

            <div class="mt-4 ma-sm-4">
              <h6 class="text-h6 font-weight-medium mb-6">
                Bill To:
              </h6>
              <table>
                <tr>
                  <td class="pe-6 pb-1">
                    Total Due:
                  </td>
                  <td class="pb-1">
                    <span class="font-weight-medium">
                      {{ paymentDetails.totalDue }}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="pe-6 pb-1">
                    Bank Name:
                  </td>
                  <td class="pb-1">
                    {{ paymentDetails.bankName }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6 pb-1">
                    Country:
                  </td>
                  <td class="pb-1">
                    {{ paymentDetails.country }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6 pb-1">
                    IBAN:
                  </td>
                  <td class="pb-1">
                    {{ paymentDetails.iban }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6 pb-1">
                    SWIFT Code:
                  </td>
                  <td class="pb-1">
                    {{ paymentDetails.swiftCode }}
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>

          <!-- 👉 Table -->
          <VDivider />

          <VTable class="invoice-preview-table">
            <thead>
              <tr>
                <th scope="col">
                  ITEM
                </th>
                <th scope="col">
                  DESCRIPTION
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  COST
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  QTY
                </th>
                <th
                  scope="col"
                  class="text-center"
                >
                  PRICE
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="item in purchasedProducts"
                :key="item.name"
              >
                <td class="text-no-wrap">
                  {{ item.name }}
                </td>
                <td class="text-no-wrap">
                  {{ item.description }}
                </td>
                <td class="text-center">
                  ${{ item.cost }}
                </td>
                <td class="text-center">
                  {{ item.qty }}
                </td>
                <td class="text-center">
                  ${{ item.cost * item.qty }}
                </td>
              </tr>
            </tbody>
          </VTable>

          <VDivider class="mb-2" />

          <!-- Total -->
          <VCardText class="d-flex justify-space-between flex-column flex-sm-row print-row">
            <div class="my-2 mx-sm-4 text-base">
              <div class="d-flex align-center mb-1">
                <h6 class="text-base font-weight-medium me-1">
                  Salesperson:
                </h6>
                <span>Alfie Solomons</span>
              </div>
              <p>Thanks for your business</p>
            </div>

            <div class="my-2 mx-sm-4">
              <table>
                <tr>
                  <td class="text-end">
                    <div class="me-5">
                      <p class="mb-2">
                        Subtotal:
                      </p>
                      <p class="mb-2">
                        Discount:
                      </p>
                      <p class="mb-2">
                        Tax:
                      </p>
                      <p class="mb-2">
                        Total:
                      </p>
                    </div>
                  </td>

                  <td class="font-weight-medium text-high-emphasis">
                    <p class="mb-2">
                      $154.25
                    </p>
                    <p class="mb-2">
                      $00.00
                    </p>
                    <p class="mb-2">
                      $50.00
                    </p>
                    <p class="mb-2">
                      $204.25
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </VCardText>

          <VDivider />

          <VCardText>
            <div class="d-flex mx-sm-4">
              <h6 class="text-base font-weight-medium me-1">
                Note:
              </h6>
              <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span>
            </div>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        md="3"
        class="d-print-none"
      >
        <VCard>
          <VCardText>
            <!-- 👉 Send Invoice Trigger button -->
            <VBtn
              block
              prepend-icon="tabler-send"
              class="mb-2"
              @click="isSendPaymentSidebarVisible = true"
            >
              Send Invoice
            </VBtn>

            <VBtn
              block
              variant="tonal"
              color="secondary"
              class="mb-2"
            >
              Download
            </VBtn>

            <VBtn
              block
              variant="tonal"
              color="secondary"
              class="mb-2"
              @click="printInvoice"
            >
              Print
            </VBtn>

            <VBtn
              block
              color="secondary"
              variant="tonal"
              class="mb-2"
              :to="{ name: 'apps-invoice-edit-id', params: { id: route.params.id } }"
            >
              Edit Invoice
            </VBtn>

            <!-- 👉  Add Payment trigger button  -->
            <VBtn
              block
              prepend-icon="tabler-currency-dollar"
              @click="isAddPaymentSidebarVisible = true"
            >
              Add Payment
            </VBtn>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- 👉 Add Payment Sidebar -->
    <InvoiceAddPaymentDrawer v-model:isDrawerOpen="isAddPaymentSidebarVisible" />

    <!-- 👉 Send Invoice Sidebar -->
    <InvoiceSendInvoiceDrawer v-model:isDrawerOpen="isSendPaymentSidebarVisible" />
  </section>
</template>

<style lang="scss">
.invoice-preview-table {
  --v-table-row-height: 44px !important;
}

@media print {
  .v-application {
    background: none !important;
  }

  @page { margin: 0; size: auto; }

  .layout-page-content,
  .v-row,
  .v-col-md-9 {
    padding: 0;
    margin: 0;
  }

  .product-buy-now {
    display: none;
  }

  .v-navigation-drawer,
  .layout-vertical-nav,
  .app-customizer-toggler,
  .layout-footer,
  .layout-navbar,
  .layout-navbar-and-nav-container {
    display: none;
  }

  .v-card {
    box-shadow: none !important;

    .print-row {
      flex-direction: row !important;
    }
  }

  .layout-content-wrapper {
    padding-inline-start: 0 !important;
  }
}
</style>
