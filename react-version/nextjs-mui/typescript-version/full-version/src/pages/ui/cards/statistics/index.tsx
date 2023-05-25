// ** Next Imports
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Third Party Components
import axios from 'axios'

// ** Type Import
import { CardStatsType } from 'src/@fake-db/types'

// ** Demo Components Imports
import CardStatisticsOrder from 'src/views/ui/cards/statistics/CardStatisticsOrder'
import CardStatisticsSales from 'src/views/ui/cards/statistics/CardStatisticsSales'
import CardStatisticsSquare from 'src/views/ui/cards/statistics/CardStatisticsSquare'
import CardStatisticsProfit from 'src/views/ui/cards/statistics/CardStatisticsProfit'
import CardStatisticsExpenses from 'src/views/ui/cards/statistics/CardStatisticsExpenses'
import CardStatisticsSessions from 'src/views/ui/cards/statistics/CardStatisticsSessions'
import CardStatisticsVertical from 'src/views/ui/cards/statistics/CardStatisticsVertical'
import CardStatisticsHorizontal from 'src/views/ui/cards/statistics/CardStatisticsHorizontal'
import CardStatisticsImpression from 'src/views/ui/cards/statistics/CardStatisticsImpression'
import CardStatisticsStatistics from 'src/views/ui/cards/statistics/CardStatisticsStatistics'
import CardStatisticsOrderVisits from 'src/views/ui/cards/statistics/CardStatisticsOrderVisits'
import CardStatisticsRevenueGrowth from 'src/views/ui/cards/statistics/CardStatisticsRevenueGrowth'
import CardStatisticsWithAreaChart from 'src/views/ui/cards/statistics/CardStatisticsWithAreaChart'
import CardStatisticsGeneratedLeads from 'src/views/ui/cards/statistics/CardStatisticsGeneratedLeads'
import CardStatisticsAvgDailyTraffic from 'src/views/ui/cards/statistics/CardStatisticsAvgDailyTraffic'
import CardStatisticsAverageDailySales from 'src/views/ui/cards/statistics/CardStatisticsAverageDailySales'
import CardStatisticsSubscribersOrders from 'src/views/ui/cards/statistics/CardStatisticsSubscribersOrders'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardStatistics = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <CardStatisticsStatistics />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardStatisticsSquare data={apiData.statsSquare} />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsOrder />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsSales />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsProfit />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsSessions />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsExpenses />
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <CardStatisticsImpression />
        </Grid>
        <Grid item xs={12}>
          <CardStatisticsHorizontal data={apiData.statsHorizontal} />
        </Grid>
        <Grid item xs={12}>
          <CardStatisticsWithAreaChart data={apiData.statsWithAreaChart} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsAverageDailySales />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsOrderVisits />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsAvgDailyTraffic />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <CardStatisticsSubscribersOrders />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardStatisticsVertical data={apiData.statsVertical} />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardStatisticsRevenueGrowth />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardStatisticsGeneratedLeads />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

export default CardStatistics
