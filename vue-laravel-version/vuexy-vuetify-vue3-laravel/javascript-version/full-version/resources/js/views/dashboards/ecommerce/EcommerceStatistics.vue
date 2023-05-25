<script setup>
const statistics = [
  {
    title: 'Sales',
    stats: '230k',
    icon: 'tabler-chart-pie-2',
    color: 'primary',
  },
  {
    title: 'Customers',
    stats: '8.549k',
    icon: 'tabler-users',
    color: 'info',
  },
  {
    title: 'Products',
    stats: '1.423k',
    icon: 'tabler-shopping-cart',
    color: 'error',
  },
  {
    title: 'Revenue',
    stats: '$9745',
    icon: 'tabler-currency-dollar',
    color: 'success',
  },
]
</script>

<template>
  <VCard title="Statistics">
    <template #append>
      <span class="text-sm text-disabled">Updated 1 month ago</span>
    </template>

    <VCardText class="pt-6">
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          md="3"
        >
          <div class="d-flex align-center gap-4">
            <VAvatar
              :color="item.color"
              variant="tonal"
              size="42"
            >
              <VIcon :icon="item.icon" />
            </VAvatar>

            <div class="d-flex flex-column">
              <span class="text-h5 font-weight-medium">{{ item.stats }}</span>
              <span class="text-sm">
                {{ item.title }}
              </span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
