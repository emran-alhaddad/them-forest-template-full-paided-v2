// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Type Imports
import { CardStatsWithAreaChartProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import
import CardStatsWithAreaChart from 'src/@core/components/card-statistics/card-stats-with-area-chart'

const CardStatisticsWithAreaChart = ({ data }: { data: CardStatsWithAreaChartProps[] }) => {
  const renderData = data
    ? data.map((item: CardStatsWithAreaChartProps, index: number) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CardStatsWithAreaChart {...item} />
        </Grid>
      ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatisticsWithAreaChart
