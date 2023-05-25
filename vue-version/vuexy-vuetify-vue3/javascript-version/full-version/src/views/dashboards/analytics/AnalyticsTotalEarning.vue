<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [
  {
    name: 'Earning',
    data: [
      15,
      10,
      20,
      8,
      12,
      18,
      12,
      5,
    ],
  },
  {
    name: 'Expense',
    data: [
      -7,
      -10,
      -7,
      -12,
      -6,
      -9,
      -5,
      -8,
    ],
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  
  return {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      type: 'bar',
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    legend: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '18%',
        borderRadius: 5,
        startingShape: 'rounded',
        endingShape: 'rounded',
      },
    },
    colors: [
      `rgba(${ hexToRgb(currentTheme.primary) }, 1)`,
      `rgba(${ hexToRgb(currentTheme.secondary) }, 1)`,
    ],
    dataLabels: { enabled: false },
    grid: {
      show: false,
      padding: {
        top: -40,
        bottom: -20,
        left: -10,
        right: -2,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { show: false } },
    responsive: [
      {
        breakpoint: 1468,
        options: { plotOptions: { bar: { columnWidth: '22%' } } },
      },
      {
        breakpoint: 1197,
        options: {
          chart: { height: 228 },
          plotOptions: {
            bar: {
              borderRadius: 8,
              columnWidth: '26%',
            },
          },
        },
      },
      {
        breakpoint: 783,
        options: {
          chart: { height: 232 },
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '28%',
            },
          },
        },
      },
      {
        breakpoint: 589,
        options: { plotOptions: { bar: { columnWidth: '16%' } } },
      },
      {
        breakpoint: 520,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '18%',
            },
          },
        },
      },
      {
        breakpoint: 426,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 5,
              columnWidth: '20%',
            },
          },
        },
      },
      {
        breakpoint: 381,
        options: { plotOptions: { bar: { columnWidth: '24%' } } },
      },
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
  }
})

const totalEarnings = [
  {
    avatar: 'tabler-currency-dollar',
    avatarColor: 'primary',
    title: 'Total Sales',
    subtitle: 'Total Sales',
    earning: '+$98',
  },
  {
    avatar: 'tabler-brand-paypal',
    avatarColor: 'secondary',
    title: 'Total Revenue',
    subtitle: 'Client Payment',
    earning: '+$126',
  },
]
</script>

<template>
  <VCard>
    <VCardItem class="pb-0">
      <VCardTitle>Total Earning</VCardTitle>

      <div class="d-flex align-center mt-2">
        <h4 class="text-h1 me-2">
          87%
        </h4>
        <div class="text-success">
          <VIcon
            size="18"
            icon="tabler-chevron-up"
          />
          <span class="text-base">25.8%</span>
        </div>
      </div>

      <template #append>
        <div class="mt-n10 me-n2">
          <MoreBtn :menu-list="[{ title: 'View More', value: 'View More' }, { title: 'Delete', value: 'Delete' }]" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        :options="chartOptions"
        :series="series"
        height="210"
        class="my-2"
      />

      <VList class="card-list mt-4">
        <VListItem
          v-for="earning in totalEarnings"
          :key="earning.title"
        >
          <VListItemTitle class="font-weight-medium">
            {{ earning.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ earning.subtitle }}
          </VListItemSubtitle>

          <template #prepend>
            <VAvatar
              :icon="earning.avatar"
              :color="earning.avatarColor"
              variant="tonal"
              size="34"
              rounded
            />
          </template>

          <template #append>
            <span class="text-success font-weight-medium">{{ earning.earning }}</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 18px;
}
</style>
