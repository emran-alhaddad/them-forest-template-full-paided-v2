// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Component Import
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const CardStatisticsVertical = ({ data }) => {
  const renderData = data
    ? data.map((item, index) => (
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
