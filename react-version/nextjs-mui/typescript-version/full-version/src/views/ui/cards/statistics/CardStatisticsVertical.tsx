// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Type Imports
import { CardStatsVerticalProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const CardStatisticsVertical = ({ data }: { data: CardStatsVerticalProps[] }) => {
  const renderData = data
    ? data.map((item: CardStatsVerticalProps, index: number) => (
        <Grid item xs={6} key={index}>
          <CardStatsVertical {...item} />
        </Grid>
      ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatisticsVertical
