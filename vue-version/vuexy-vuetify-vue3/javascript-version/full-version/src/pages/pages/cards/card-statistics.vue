<script setup>
import { useTheme } from 'vuetify'
import CardStatistics from '@/views/pages/cards/card-statistics/CardStatistics.vue'
import CardStatisticsAverageDailySales from '@/views/pages/cards/card-statistics/CardStatisticsAverageDailySales.vue'
import CardStatisticsDailyTraffic from '@/views/pages/cards/card-statistics/CardStatisticsDailyTraffic.vue'
import CardStatisticsExpensesRadialBarCharts from '@/views/pages/cards/card-statistics/CardStatisticsExpensesRadialBarCharts.vue'
import CardStatisticsGeneratedLeads from '@/views/pages/cards/card-statistics/CardStatisticsGeneratedLeads.vue'
import CardStatisticsImpressionLineCharts from '@/views/pages/cards/card-statistics/CardStatisticsImpressionLineCharts.vue'
import CardStatisticsOrderBarCharts from '@/views/pages/cards/card-statistics/CardStatisticsOrderBarCharts.vue'
import CardStatisticsRevenueGrowth from '@/views/pages/cards/card-statistics/CardStatisticsRevenueGrowth.vue'
import CardStatisticsSalesAreaCharts from '@/views/pages/cards/card-statistics/CardStatisticsSalesAreaCharts.vue'
import CardStatisticsSalesOverview from '@/views/pages/cards/card-statistics/CardStatisticsSalesOverview.vue'
import CardStatisticsSessionsBarWithGapCharts from '@/views/pages/cards/card-statistics/CardStatisticsSessionsBarWithGapCharts.vue'
import CardStatisticsTotalProfitLineCharts from '@/views/pages/cards/card-statistics/CardStatisticsTotalProfitLineCharts.vue'
import CardStatisticsTransactions from '@/views/pages/cards/card-statistics/CardStatisticsTransactions.vue'

const vuetifyTheme = useTheme()
const currentTheme = vuetifyTheme.current.value.colors

const statisticsHorizontal = [
  {
    title: 'CPU Usage',
    color: 'primary',
    icon: 'tabler-cpu',
    stats: '86%',
  },
  {
    title: 'Memory Usage',
    color: 'success',
    icon: 'tabler-server',
    stats: '1.24gb',
  },
  {
    title: 'Downtime Ratio',
    color: 'error',
    icon: 'tabler-chart-pie-2',
    stats: '0.2%',
  },
  {
    title: 'Total Profit',
    color: 'warning',
    icon: 'tabler-alert-octagon',
    stats: '128',
  },
]

const statisticsVertical = [
  {
    title: 'Subscribers Gained',
    color: 'primary',
    icon: 'tabler-users',
    stats: '92.6k',
    height: 90,
    series: [{
      data: [
        200,
        60,
        300,
        140,
        230,
        120,
        400,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Quarterly Sales',
    color: 'error',
    icon: 'tabler-shopping-cart',
    stats: '36.5%',
    height: 90,
    series: [{
      data: [
        200,
        300,
        160,
        250,
        130,
        400,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.error],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Order Received',
    color: 'warning',
    icon: 'tabler-box',
    stats: '97.5k',
    height: 90,
    series: [{
      data: [
        350,
        500,
        310,
        460,
        280,
        400,
        300,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.warning],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
  {
    title: 'Revenue Generated',
    color: 'success',
    icon: 'tabler-credit-card',
    stats: '97.5k',
    height: 90,
    series: [{
      data: [
        300,
        350,
        330,
        380,
        340,
        400,
        380,
      ],
    }],
    chartOptions: {
      chart: {
        height: 90,
        type: 'area',
        parentHeightOffset: 0,
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      tooltip: { enabled: false },
      markers: {
        colors: 'transparent',
        strokeColors: 'transparent',
      },
      grid: { show: false },
      colors: [currentTheme.success],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.6,
          opacityTo: 0.1,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      xaxis: {
        show: true,
        lines: { show: false },
        labels: { show: false },
        stroke: { width: 0 },
        axisBorder: { show: false },
      },
      yaxis: {
        stroke: { width: 0 },
        show: false,
      },
    },
  },
]

const statisticsVerticalSimple = [
  {
    title: 'Orders',
    color: 'error',
    stats: '97.8k',
    icon: 'tabler-briefcase',
  },
  {
    title: 'Review',
    color: 'success',
    stats: '3.4k',
    icon: 'tabler-message-dots',
  },
]

const simpleStatisticsDemoCards = [
  {
    icon: 'tabler-credit-card',
    color: 'error',
    title: 'Total Profit',
    subTitle: 'Last week',
    stat: '1.28k',
    change: '-12.2%',
  },
  {
    icon: 'tabler-credit-card',
    color: 'success',
    title: 'Total Sales',
    subTitle: 'Last week',
    stat: '$4,673',
    change: '+25.2%',
  },
]
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Transition Card  -->
    <VCol
      cols="12"
      md="8"
    >
      <CardStatisticsTransactions />
    </VCol>

    <!-- 👉 Vertical Simple Cards -->
    <VCol
      v-for="statistics in statisticsVerticalSimple"
      :key="statistics.title"
      md="2"
      cols="6"
    >
      <CardStatisticsVerticalSimple v-bind="statistics" />
    </VCol>

    <!-- 👉 Order Bar Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsOrderBarCharts />
    </VCol>

    <!-- 👉 Total Sales Area Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsSalesAreaCharts />
    </VCol>

    <!-- 👉 Total Profit Line Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsTotalProfitLineCharts />
    </VCol>

    <!-- 👉 Sessions Bar Chart with Gaps -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsSessionsBarWithGapCharts />
    </VCol>

    <!-- 👉 Total Revenue Radial Bar Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsExpensesRadialBarCharts />
    </VCol>

    <!-- 👉 Total Revenue Line Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsImpressionLineCharts />
    </VCol>

    <!-- 👉 Horizontal Cards -->
    <VCol
      v-for="statistics in statisticsHorizontal"
      :key="statistics.title"
      cols="12"
      sm="6"
      md="3"
    >
      <CardStatisticsHorizontal v-bind="statistics" />
    </VCol>

    <!-- 👉 Vertical Cards -->
    <VCol
      v-for="statistics in statisticsVertical"
      :key="statistics.title"
      cols="12"
      sm="6"
      md="3"
    >
      <CardStatisticsVertical v-bind="statistics" />
    </VCol>

    <!-- 👉 Average Daily Sales -->
    <VCol
      cols="12"
      sm="6"
      lg="3"
    >
      <CardStatisticsAverageDailySales />
    </VCol>

    <!-- 👉 Sales Overview -->
    <VCol
      cols="12"
      sm="6"
      lg="3"
    >
      <CardStatisticsSalesOverview />
    </VCol>

    <!-- 👉 Daily Traffic -->
    <VCol
      cols="12"
      sm="6"
      lg="3"
    >
      <CardStatisticsDailyTraffic />
    </VCol>

    <!-- 👉 Statistics -->
    <VCol
      cols="12"
      sm="6"
      lg="3"
    >
      <CardStatistics />
    </VCol>

    <!-- 👉 Total profit basic card -->
    <VCol
      v-for="demo in simpleStatisticsDemoCards"
      :key="demo.title"
      cols="12"
      sm="6"
      md="2"
    >
      <VCard>
        <VCardText>
          <VAvatar
            :color="demo.color"
            variant="tonal"
            rounded
            size="42"
          >
            <VIcon :icon="demo.icon" />
          </VAvatar>

          <h5 class="text-h5 mt-3">
            {{ demo.title }}
          </h5>
          <p class="text-sm text-disabled mt-1 mb-0">
            {{ demo.subTitle }}
          </p>
          <p class="mt-1 mb-2">
            {{ demo.stat }}
          </p>
          <VChip
            :color="demo.color"
            label
          >
            {{ demo.change }}
          </VChip>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Revenue Growth -->
    <VCol
      cols="12"
      md="4"
    >
      <CardStatisticsRevenueGrowth />
    </VCol>

    <!-- 👉 Generated Leads -->
    <VCol
      cols="12"
      md="4"
    >
      <CardStatisticsGeneratedLeads />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";
</style>
