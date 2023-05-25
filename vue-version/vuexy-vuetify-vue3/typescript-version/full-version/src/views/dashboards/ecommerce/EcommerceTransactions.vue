<script setup lang="ts">
const transitions = [
  {
    avatarIcon: 'tabler-wallet',
    avatarColor: 'primary',
    title: 'Wallet',
    subtitle: 'Starbucks',
    stats: '-$75',
    profit: false,
  },
  {
    avatarIcon: 'tabler-browser-check',
    avatarColor: 'success',
    title: 'Bank Transfer',
    subtitle: 'Add Money',
    stats: '+$480',
    profit: true,
  },
  {
    avatarIcon: 'tabler-brand-paypal',
    avatarColor: 'error',
    title: 'Paypal',
    subtitle: 'Client Payment',
    stats: '+$268',
    profit: true,
  },
  {
    avatarIcon: 'tabler-credit-card',
    avatarColor: 'secondary',
    title: 'Master Card',
    subtitle: 'Ordered iPhone 13',
    stats: '-$699',
    profit: false,
  },
  {
    avatarIcon: 'tabler-currency-dollar',
    avatarColor: 'info',
    title: 'Bank Transactions',
    subtitle: 'Refund',
    stats: '+$98',
    profit: true,
  },
  {
    avatarIcon: 'tabler-brand-paypal',
    avatarColor: 'error',
    title: 'Paypal',
    subtitle: 'Client Payment',
    stats: '+$126',
    profit: true,
  },
  {
    avatarIcon: 'tabler-browser-check',
    avatarColor: 'success',
    title: 'Bank Transfer',
    subtitle: 'Pay Office Rent',
    stats: '-$1290',
    profit: false,
  },
]

const moreList = [
  { title: 'Refresh', value: 'refresh' },
  { title: 'Download', value: 'Download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard
    title="Transactions"
    subtitle="Total 58 Transactions done in this Month"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="transition in transitions"
          :key="transition.title"
        >
          <template #prepend>
            <VAvatar
              size="34"
              :color="transition.avatarColor"
              variant="tonal"
              rounded
            >
              <VIcon :icon="transition.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ transition.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ transition.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <span :class="`${transition.profit ? 'text-success' : 'text-error'} me-2`">{{ transition.stats }}</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 23px;
}
</style>
