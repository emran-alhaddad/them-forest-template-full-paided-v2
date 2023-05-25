// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CardStatsSquare from 'src/@core/components/card-statistics/card-stats-square'

const CardStatisticsSquare = ({ data }) => {
  const renderData = data
    ? data.map((item, index) => (
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
