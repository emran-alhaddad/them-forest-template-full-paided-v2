<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [45, 58, 30, 50]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const labelSuccessColor = `rgba(${hexToRgb(currentTheme.success)},0.2)`
  const headingColor = `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`

  const chartColors = {
    donut: {
      series1: currentTheme.success,
      series2: '#28c76fb3',
      series3: '#28c76f80',
      series4: labelSuccessColor,
    },
  }

  return {
    chart: {
      parentHeightOffset: 0,
      type: 'donut',
    },
    labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
    colors: [
      chartColors.donut.series1,
      chartColors.donut.series2,
      chartColors.donut.series3,
      chartColors.donut.series4,
    ],
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
      formatter(val: string) {
        return `${parseInt(val)}%`
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: false,
    },
    grid: {
      padding: {
        top: 15,
        right: -20,
        left: -20,
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            value: {
              fontSize: '1.375rem',
              fontFamily: 'Public Sans',
              color: headingColor,
              fontWeight: 600,
              offsetY: -15,
              formatter(val: string) {
                return `${parseInt(val)}%`
              },
            },
            name: {
              offsetY: 20,
              fontFamily: 'Public Sans',
            },
            total: {
              show: true,
              showAlways: true,
              color: currentTheme.success,
              fontSize: '.8125rem',
              label: 'Total',
              fontFamily: 'Public Sans',
              formatter() {
                return '184'
              },
            },
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between">
      <div class="d-flex flex-column">
        <div class="mb-auto">
          <h6 class="text-h5 text-no-wrap">
            Generated Leads
          </h6>
          <span class="text-sm">Monthly Report</span>
        </div>

        <div>
          <h5 class="text-h3 mb-1">
            4,350
          </h5>
          <div>
            <VIcon
              icon="tabler-chevron-up"
              size="16"
              color="success"
              class="me-2"
            />
            <span class="text-success">15.8% </span>
          </div>
        </div>
      </div>
      <div>
        <VueApexCharts
          :options="chartOptions"
          :series="series"
          :height="147"
          :width="130"
        />
      </div>
    </VCardText>
  </VCard>
</template>
