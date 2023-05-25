<script setup>
import aeIcon from '@images/icons/payments/ae-icon.png'
import mastercardIcon from '@images/icons/payments/mastercard-icon.png'
import visaIcon from '@images/icons/payments/visa-icon.png'

const lastTransitions = [
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

const resolveStatus = {
  Verified: 'success',
  Rejected: 'error',
  Pending: 'secondary',
}

const moreList = [
  {
    title: 'Refresh',
    value: 'refresh',
  },
  {
    title: 'Download',
    value: 'Download',
  },
  {
    title: 'View All',
    value: 'View All',
  },
]
</script>

<template>
  <VCard title="Last Transaction">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VDivider />
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th>CARD</th>
          <th>DATE</th>
          <th>STATUS</th>
          <th>TREND</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="transition in lastTransitions"
          :key="transition.lastDigit"
        >
          <td style="padding-block: 0.61rem;">
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
                <p class="text-sm text-disabled mb-0">
                  {{ transition.cardType }}
                </p>
              </div>
            </div>
          </td>
          <td style="padding-block: 0.61rem;">
            <p class="font-weight-medium text-base mb-0">
              Sent
            </p>
            <span class="text-sm text-disabled">{{ transition.sentDate }}</span>
          </td>
          <td style="padding-block: 0.61rem;">
            <VChip
              label
              :color="resolveStatus[transition.status]"
            >
              {{ transition.status }}
            </VChip>
          </td>
          <td style="padding-block: 0.61rem;">
            <span class="font-weight-medium text-base">{{ transition.trend }}</span>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
