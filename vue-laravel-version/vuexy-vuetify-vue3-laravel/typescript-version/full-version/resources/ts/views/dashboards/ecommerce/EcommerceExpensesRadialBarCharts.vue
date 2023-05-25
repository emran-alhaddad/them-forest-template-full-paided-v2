<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [78]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    chart: {
      sparkline: {
        enabled: true,
      },
      parentHeightOffset: 0,
      type: 'radialBar',
    },
    colors: [currentTheme.warning],
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '65%',
        },
        track: {
          strokeWidth: '45%',
          background: `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '22px',
            color: `rgba(${hexToRgb(currentTheme['on-background'])},${variableTheme['high-emphasis-opacity']})`,
            fontWeight: 600,
            offsetY: -5,
          },
        },
      },
    },
    grid: {
      show: false,
      padding: {
        bottom: 5,
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
    responsive: [
      {
        breakpoint: 1442,
        options: {
          chart: {
            height: 140,
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
              hollow: {
                size: '60%',
              },
            },
          },
        },
      },
      {
        breakpoint: 1370,
        options: {
          chart: {
            height: 120,
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            height: 150,
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
              hollow: {
                size: '70%',
              },
            },
          },
        },
      },
      {
        breakpoint: 960,
        options: {
          chart: {
            height: 250,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              },
              dataLabels: {
                value: {
                  fontSize: '18px',
                },
              },
            },
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
      <div class="mb-n2">
        <h5 class="text-h5">
          82.5k
        </h5>
        <span class="text-disabled text-sm">Expenses</span>
      </div>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        type="radialBar"
        :height="155"
      />

      <div class="text-sm text-center clamp-text text-disabled mt-3">
        $21k Expenses more than last month
      </div>
    </VCardText>
  </VCard>
</template>
