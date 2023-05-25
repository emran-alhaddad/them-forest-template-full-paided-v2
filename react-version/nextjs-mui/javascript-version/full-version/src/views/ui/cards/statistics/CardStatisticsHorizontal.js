// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CardStatsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

const CardStatisticsHorizontal = ({ data }) => {
  const renderData = data
    ? data.map((item, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <CardStatsHorizontal {...item} />
        </Grid>
      ))
    : null

  return (
    <Grid container spacing={6}>
      {renderData}
    </Grid>
  )
}

export default CardStatisticsHorizontal
