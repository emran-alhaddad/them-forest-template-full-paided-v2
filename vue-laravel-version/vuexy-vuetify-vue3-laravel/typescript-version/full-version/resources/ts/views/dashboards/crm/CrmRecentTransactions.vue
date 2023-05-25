<script setup lang="ts">
import aeIcon from '@images/icons/payments/ae-icon.png'
import mastercardIcon from '@images/icons/payments/mastercard-icon.png'
import visaIcon from '@images/icons/payments/visa-icon.png'

interface Status {
  Verified: string
  Rejected: string
  Pending: string
}

interface Transition {
  cardImg: string
  lastDigit: string
  cardType: string
  sentDate: string
  status: keyof Status
  trend: string
}

const lastTransitions: Transition[] = [
  {
    cardImg: visaIcon,
    lastDigit: '*4230',
    cardType: 'Credit',
    sentDate: '17 Mar 2022',
    status: 'Verified',
    trend: '+$1,678',
  },
  {
    cardImg: mastercardIcon,
    lastDigit: '*5578',
    cardType: 'Credit',
    sentDate: '12 Feb 2022',
    status: 'Rejected',
    trend: '-$839',
  },
  {
    cardImg: aeIcon,
    lastDigit: '*4567',
    cardType: 'Credit',
    sentDate: '28 Feb 2022',
    status: 'Verified',
    trend: '+$435',
  },
  {
    cardImg: visaIcon,
    lastDigit: '*5699',
    cardType: 'Credit',
    sentDate: '8 Jan 2022',
    status: 'Pending',
    trend: '+$2,345',
  },
  {
    cardImg: visaIcon,
    lastDigit: '*5699',
    cardType: 'Credit',
    sentDate: '8 Jan 2022',
    status: 'Rejected',
    trend: '-$234',
  },
]

const resolveStatus: Status = {
  Verified: 'success',
  Rejected: 'error',
  Pending: 'secondary',
}

const moreList = [
  { title: 'Refresh', value: 'refresh' },
  { title: 'Download', value: 'Download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard title="Recent Transactions">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VDivider />
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th class="font-weight-medium">
            CARD
          </th>
          <th class="font-weight-medium">
            DATE
          </th>
          <th class="font-weight-medium">
            STATUS
          </th>
          <th class="font-weight-medium">
            TREND
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="transition in lastTransitions"
          :key="transition.lastDigit"
        >
          <td style="padding-block: 0.65rem;">
            <div class="d-flex align-center">
              <div class="me-3">
                <VImg
                  :src="transition.cardImg"
                  width="50"
                />
              </div>
              <div>
                <p class="font-weight-medium text-base mb-0">
                  {{ transition.lastDigit }}
                </p>
                <p class="text-sm mb-0 text-disabled">
                  {{ transition.cardType }}
                </p>
              </div>
            </div>
          </td>
          <td>
            <p class="font-weight-medium text-base mb-0">
              Sent
            </p>
            <span class="text-sm text-disabled">{{ transition.sentDate }}</span>
          </td>
          <td>
            <VChip
              label
              :color="resolveStatus[transition.status]"
            >
              {{ transition.status }}
            </VChip>
          </td>
          <td>
            <span class="font-weight-medium text-base">{{ transition.trend }}</span>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss" scoped>
.v-table {
  tbody {
    tr:not(:last-child) {
      td {
        border: none !important;
      }
    }
  }
}
</style>
