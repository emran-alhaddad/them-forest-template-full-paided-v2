// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CardWidgetsSales from 'src/views/ui/cards/widgets/CardWidgetsSales'
import CardWidgetsTotalEarning from 'src/views/ui/cards/widgets/CardWidgetsTotalEarning'
import CardWidgetsRevenueReport from 'src/views/ui/cards/widgets/CardWidgetsRevenueReport'
import CardWidgetsProjectStatus from 'src/views/ui/cards/widgets/CardWidgetsProjectStatus'
import CardWidgetsEarningReports from 'src/views/ui/cards/widgets/CardWidgetsEarningReports'
import CardWidgetsSupportTracker from 'src/views/ui/cards/widgets/CardWidgetsSupportTracker'
import CardWidgetsEarningReportsWithTabs from 'src/views/ui/cards/widgets/CardWidgetsEarningReportsWithTabs'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const CardWidgets = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <CardWidgetsEarningReports />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWidgetsSupportTracker />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWidgetsSales />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWidgetsRevenueReport />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardWidgetsProjectStatus />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardWidgetsEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardWidgetsTotalEarning />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CardWidgets
