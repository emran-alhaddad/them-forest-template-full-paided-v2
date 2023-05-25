<script setup>
import auFlag from '@images/icons/countries/au.png'
import brFlag from '@images/icons/countries/br.png'
import cnFlag from '@images/icons/countries/cn.png'
import frFlag from '@images/icons/countries/fr.png'
import inFlag from '@images/icons/countries/in.png'
import usFlag from '@images/icons/countries/us.png'

const salesByCountries = [
  {
    avatarImg: usFlag,
    stats: '$8,567k',
    subtitle: 'United states',
    profitLoss: 25.8,
  },
  {
    avatarImg: brFlag,
    stats: '$2,415k',
    subtitle: 'Brazil',
    profitLoss: -6.2,
  },
  {
    avatarImg: inFlag,
    stats: '$865k',
    subtitle: 'India',
    profitLoss: 12.4,
  },
  {
    avatarImg: auFlag,
    stats: '$745k',
    subtitle: 'Australia',
    profitLoss: -11.9,
  },
  {
    avatarImg: frFlag,
    stats: '$45',
    subtitle: 'France',
    profitLoss: 16.2,
  },
  {
    avatarImg: cnFlag,
    stats: '$12k',
    subtitle: 'China',
    profitLoss: 14.8,
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
    title="Sales by Countries"
    subtitle="Monthly Sales Overview"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="country in salesByCountries"
          :key="country.stats"
        >
          <template #prepend>
            <VAvatar
              size="34"
              color="secondary"
              variant="tonal"
              :image="country.avatarImg"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ country.stats }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ country.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div :class="`d-flex align-center font-weight-medium ${country.profitLoss > 0 ? 'text-success' : 'text-error'}`">
              <VIcon
                :icon="country.profitLoss > 0 ? 'tabler-chevron-up' : 'tabler-chevron-down'"
                size="20"
                class="me-1"
              />
              <span>{{ Math.abs(country.profitLoss) }}%</span>
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
