<script setup>
const sourceVisits = [
  {
    avatarIcon: 'tabler-shadow',
    title: 'Direct Source',
    subtitle: 'Direct link click',
    stats: '1.2k',
    profitLoss: 4.2,
  },
  {
    avatarIcon: 'tabler-globe',
    title: 'Social Network',
    subtitle: 'Social Channels',
    stats: '31.5k',
    profitLoss: 8.2,
  },
  {
    avatarIcon: 'tabler-mail',
    title: 'Email Newsletter',
    subtitle: 'Mail Campaigns',
    stats: '893',
    profitLoss: 2.4,
  },
  {
    avatarIcon: 'tabler-external-link',
    title: 'Referrals',
    subtitle: 'Impact Radius Visits',
    stats: '342',
    profitLoss: -0.4,
  },
  {
    avatarIcon: 'tabler-discount-2',
    title: 'ADVT',
    subtitle: 'Google ADVT',
    stats: '2.15k',
    profitLoss: 9.1,
  },
  {
    avatarIcon: 'tabler-star',
    title: 'Other',
    subtitle: 'Many Sources',
    stats: '12.5k',
    profitLoss: 6.2,
  },
]

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
  <VCard
    title="Source Visits"
    subtitle="38.4k Visitors"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="visit in sourceVisits"
          :key="visit.title"
        >
          <template #prepend>
            <VAvatar
              size="34"
              color="secondary"
              variant="tonal"
              rounded
            >
              <VIcon :icon="visit.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ visit.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ visit.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <span class="me-3">{{ visit.stats }}</span>
              <VChip
                label
                :color="visit.profitLoss > 0 ? 'success' : 'error'"
              >
                {{ visit.profitLoss > 0 ? '+' : '' }}
                {{ visit.profitLoss }}%
              </VChip>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 19px;
}
</style>
