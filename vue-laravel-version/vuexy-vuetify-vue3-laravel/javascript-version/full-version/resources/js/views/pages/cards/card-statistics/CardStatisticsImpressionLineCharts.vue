<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const series = [{
  data: [
    200,
    200,
    500,
    500,
    300,
    300,
    100,
    100,
    450,
    450,
    650,
    650,
  ],
}]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  
  return {
    chart: {
      height: 90,
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    tooltip: { enabled: false },
    markers: { strokeColor: 'transparent' },
    colors: [currentTheme.error],
    stroke: { width: 3 },
    grid: { padding: { bottom: -10 } },
    responsive: [
      {
        breakpoint: 1200,
        options: { chart: { height: 110 } },
      },
      {
        breakpoint: 768,
        options: { chart: { height: 90 } },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText>
      <div>
        <h5 class="text-h5">
          Impression
        </h5>
        <span class="text-sm text-disabled">This Week</span>
      </div>

      <VueApexCharts
        :options="chartOptions"
        :series="series"
        :height="90"
      />

      <div class="d-flex align-center justify-space-between mt-4">
        <h4 class="text-h4 text-center">
          26.1k
        </h4>
        <span class="text-sm text-error">
          -24.5%
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
