<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [
  {
    data: [0, 25, 10, 40, 25, 55],
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    chart: {
      height: 90,
      type: 'line',
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`,
      strokeDashArray: 6,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: -18,
        left: -4,
        right: 7,
        bottom: -10,
      },
    },
    colors: [currentTheme.info],
    stroke: {
      width: 2,
    },
    tooltip: {
      enabled: false,
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    markers: {
      size: 3.5,
      fillColor: currentTheme.info,
      strokeColors: 'transparent',
      strokeWidth: 3.2,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 5,
          fillColor: currentTheme.surface,
          strokeColor: currentTheme.info,
          size: 5,
          shape: 'circle',
        },
      ],
      hover: {
        size: 5.5,
      },
    },
    responsive: [
      {
        breakpoint: 960,
        options: {
          chart: {
            height: 110,
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div class="pb-2">
        <h5 class="text-h5">
          Profit
        </h5>
        <span class="text-sm text-disabled">Last Month</span>
      </div>

      <VueApexCharts
        type="line"
        :options="chartOptions"
        :series="series"
        :height="90"
      />

      <div class="d-flex align-center justify-space-between mt-3">
        <h4 class="text-h4 text-center font-weight-medium">
          624k
        </h4>
        <span class="text-sm text-success">
          +8.24%
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
