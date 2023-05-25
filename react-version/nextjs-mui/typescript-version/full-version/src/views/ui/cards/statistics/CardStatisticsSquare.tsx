// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Type Imports
import { CardStatsSquareProps } from 'src/@core/components/card-statistics/types'

// ** Custom Component Import
import CardStatsSquare from 'src/@core/components/card-statistics/card-stats-square'

const CardStatisticsSquare = ({ data }: { data: CardStatsSquareProps[] }) => {
  const renderData = data
    ? data.map((item: CardStatsSquareProps, index: number) => (
        <Grid item xs={6} key={index}>
          <CardStatsSquare {...item} />
        </Grid>
      ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatisticsSquare
