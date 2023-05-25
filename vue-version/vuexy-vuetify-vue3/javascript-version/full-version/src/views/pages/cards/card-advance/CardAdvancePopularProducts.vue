<script setup>
import amazonEchoDot from '@images/eCommerce/amazon-echo-dot.png'
import appleWatch from '@images/eCommerce/apple-watch.png'
import headphone from '@images/eCommerce/headphone.png'
import iphone from '@images/eCommerce/iphone.png'
import nike from '@images/eCommerce/nike.png'
import sonyDualsense from '@images/eCommerce/sony-dualsense.png'

const popularProducts = [
  {
    avatarImg: iphone,
    title: 'Apple iPhone 13',
    subtitle: 'Item: #FXZ-4567',
    stats: '$999.29',
  },
  {
    avatarImg: nike,
    title: 'Nike Air Jordan',
    subtitle: 'Item: #FXZ-3456',
    stats: '$72.40',
  },
  {
    avatarImg: headphone,
    title: 'Beats Studio 2',
    subtitle: 'Item: #FXZ-9485',
    stats: '$99',
  },
  {
    avatarImg: appleWatch,
    title: 'Apple Watch Series 7',
    subtitle: 'Item: #FXZ-2345',
    stats: '$249.99',
  },
  {
    avatarImg: amazonEchoDot,
    title: 'Amazon Echo Dot',
    subtitle: 'Item: #FXZ-8959',
    stats: '$79.40',
  },
  {
    avatarImg: sonyDualsense,
    title: 'Play Station Console',
    subtitle: 'Item: #FXZ-7892',
    stats: '$129.48',
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
    title="Popular Products"
    subtitle="Total 10.4k Visitors"
  >
    <template #append>
      <div class="mt-n4 me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="product in popularProducts"
          :key="product.title"
        >
          <template #prepend>
            <VAvatar
              size="44"
              rounded
              :image="product.avatarImg"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ product.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ product.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div class="d-flex align-center">
              <span class="text-body-1 me-2">{{ product.stats }}</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 24px;
}
</style>
