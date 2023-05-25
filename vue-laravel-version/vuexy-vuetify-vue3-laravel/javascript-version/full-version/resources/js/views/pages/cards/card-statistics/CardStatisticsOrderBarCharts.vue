<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const series = [{
  name: '2020',
  data: [
    60,
    50,
    20,
    45,
    50,
    30,
    70,
  ],
}]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const backgroundColor = currentTheme.background
  
  return {
    chart: {
      height: 90,
      parentHeightOffset: 0,
      type: 'bar',
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    plotOptions: {
      bar: {
        barHeight: '100%',
        columnWidth: '30px',
        startingShape: 'rounded',
        endingShape: 'rounded',
        borderRadius: 4,
        colors: {
          backgroundBarColors: [
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
            backgroundColor,
          ],
          backgroundBarRadius: 4,
        },
      },
    },
    colors: [currentTheme.primary],
    grid: {
      show: false,
      padding: {
        top: -30,
        left: -16,
        bottom: 0,
        right: -6,
      },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      categories: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: false },
    },
    yaxis: { labels: { show: false } },
    responsive: [
      {
        breakpoint: 1441,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '40%',
              borderRadius: 4,
            },
          },
        },
      },
      {
        breakpoint: 1368,
        options: { plotOptions: { bar: { columnWidth: '48%' } } },
      },
      {
        breakpoint: 1264,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '30%',
              colors: { backgroundBarRadius: 6 },
            },
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%',
              borderRadius: 6,
            },
          },
        },
      },
      {
        breakpoint: 883,
        options: { plotOptions: { bar: { columnWidth: '40%' } } },
      },
      {
        breakpoint: 768,
        options: { plotOptions: { bar: { columnWidth: '25%' } } },
      },
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: { borderRadius: 9 },
            colors: { backgroundBarRadius: 9 },
          },
        },
      },
      {
        breakpoint: 479,
        options: {
          plotOptions: {
            bar: { borderRadius: 6 },
            colors: { backgroundBarRadius: 9 },
          },
          grid: {
            padding: {
              right: -15,
              left: -15,
            },
          },
        },
      },
      {
        breakpoint: 376,
        options: { plotOptions: { bar: { borderRadius: 6 } } },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div class="pb-4">
        <h5 class="text-h5">
          Order
        </h5>
        <span class="text-sm text-disabled">Last week</span>
      </div>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="90"
      />

      <div class="d-flex align-center justify-space-between">
        <h4 class="text-h4 text-center">
          124k
        </h4>
        <span class="text-sm text-success">
          +12.6%
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
