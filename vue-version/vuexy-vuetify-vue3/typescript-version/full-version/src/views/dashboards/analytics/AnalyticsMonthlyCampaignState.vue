<script setup lang="ts">
const monthlyCampaignState = [
  {
    avatarColor: 'success',
    avatarIcon: 'tabler-mail',
    title: 'Emails',
    count: '12,346',
    stats: '0.3%',
    statsColor: 'success',
  },
  {
    avatarColor: 'info',
    avatarIcon: 'tabler-link',
    title: 'Opened',
    count: '8,734',
    stats: '2.1%',
    statsColor: 'success',
  },
  {
    avatarColor: 'warning',
    avatarIcon: 'tabler-click',
    title: 'Clicked',
    count: '967',
    stats: '1.4%',
    statsColor: 'error',
  },
  {
    avatarColor: 'primary',
    avatarIcon: 'tabler-users',
    title: 'Subscribe',
    count: '345',
    stats: '8.5%',
    statsColor: 'success',
  },
  {
    avatarColor: 'secondary',
    avatarIcon: 'tabler-alert-triangle',
    title: 'Complaints',
    count: '10',
    stats: '1.5%',
    statsColor: 'error',
  },
  {
    avatarColor: 'error',
    avatarIcon: 'tabler-ban',
    title: 'Unsubscribe',
    count: '86',
    stats: '0.8%',
    statsColor: 'success',
  },
]

const moreMenuList = [
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Download', value: 'Download' },
  { title: 'View All', value: 'View All' },
]
</script>

<template>
  <VCard
    title="Monthly Campaign State"
    subtitle="8.52k Social Visitors"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreMenuList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="state in monthlyCampaignState"
          :key="state.title"
        >
          <template #prepend>
            <VAvatar
              :color="state.avatarColor"
              variant="tonal"
              size="34"
              rounded
            >
              <VIcon :icon="state.avatarIcon" />
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ state.title }}
          </VListItemTitle>

          <template #append>
            <span class="font-weight-medium text-medium-emphasis me-3">{{ state.count }}</span>
            <span :class="`text-${state.statsColor}`">{{ state.stats }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 26px;
}
</style>
