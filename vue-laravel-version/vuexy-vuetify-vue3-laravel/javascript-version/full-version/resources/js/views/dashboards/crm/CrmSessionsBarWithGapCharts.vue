<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [
  {
    name: 'PRODUCT A',
    data: [
      4,
      3,
      6,
      4,
      3,
    ],
  },
  {
    name: 'PRODUCT B',
    data: [
      -3,
      -4,
      -3,
      -2,
      -3,
    ],
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  
  return {
    chart: {
      type: 'bar',
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false },
    },
    series: [
      {
        name: 'PRODUCT A',
        data: [
          4,
          3,
          6,
          4,
          3,
        ],
      },
      {
        name: 'PRODUCT B',
        data: [
          -3,
          -4,
          -3,
          -2,
          -3,
        ],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        barHeight: '100%',
        borderRadius: 5,
        startingShape: 'rounded',
        endingShape: 'rounded',
      },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 1,
      lineCap: 'round',
      colors: [currentTheme.surface],
    },
    legend: { show: false },
    colors: [
      `rgba(${ hexToRgb(currentTheme.primary) },1)`,
      `rgba(${ hexToRgb(currentTheme.success) },1)`,
    ],
    grid: {
      show: false,
      padding: {
        top: -41,
        right: -5,
        left: -3,
        bottom: -15,
      },
    },
    xaxis: {
      categories: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1441,
        options: { plotOptions: { bar: { columnWidth: '40%' } } },
      },
      {
        breakpoint: 1300,
        options: { plotOptions: { bar: { columnWidth: '50%' } } },
      },
      {
        breakpoint: 1279,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '20%',
            },
          },
        },
      },
      {
        breakpoint: 1025,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 7,
              columnWidth: '25%',
            },
          },
          chart: { height: 110 },
        },
      },
      {
        breakpoint: 960,
        options: { plotOptions: { bar: { borderRadius: 6 } } },
      },
      {
        breakpoint: 782,
        options: { plotOptions: { bar: { columnWidth: '30%' } } },
      },
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 12,
              columnWidth: '20%',
            },
          },
          chart: { height: 160 },
        },
      },
      {
        breakpoint: 426,
        options: { plotOptions: { bar: { borderRadius: 8 } } },
      },
      {
        breakpoint: 376,
        options: { plotOptions: { bar: { borderRadius: 6 } } },
      },
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <h5 class="text-h5">
          Sessions
        </h5>
        <p class="mb-0 text-sm text-disabled">
          This Month
        </p>
      </div>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="75"
      />

      <div class="d-flex align-center justify-space-between mt-4">
        <h4 class="text-h4">
          45.1k
        </h4>
        <p class="mb-0 text-sm text-success">
          +12.6%
        </p>
      </div>
    </VCardText>
  </VCard>
</template>
