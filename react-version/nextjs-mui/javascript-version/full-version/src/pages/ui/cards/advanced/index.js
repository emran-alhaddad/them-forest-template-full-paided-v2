// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

// ** Demo Components Imports
import CardOrders from 'src/views/ui/cards/advanced/CardOrders'
import CardTransactions from 'src/views/ui/cards/advanced/CardTransactions'
import CardSourceVisits from 'src/views/ui/cards/advanced/CardSourceVisits'
import CardBrowserStates from 'src/views/ui/cards/advanced/CardBrowserStates'
import CardActiveProjects from 'src/views/ui/cards/advanced/CardActiveProjects'
import CardEarningReports from 'src/views/ui/cards/advanced/CardEarningReports'
import CardPopularProducts from 'src/views/ui/cards/advanced/CardPopularProducts'
import CardLastTransaction from 'src/views/ui/cards/advanced/CardLastTransaction'
import CardSalesByCountries from 'src/views/ui/cards/advanced/CardSalesByCountries'
import CardActivityTimeline from 'src/views/ui/cards/advanced/CardActivityTimeline'
import CardCongratulationsJohn from 'src/views/ui/cards/advanced/CardCongratulationsJohn'
import CardMonthlyCampaignState from 'src/views/ui/cards/advanced/CardMonthlyCampaignState'
import CardWebsiteAnalyticsSlider from 'src/views/ui/cards/advanced/CardWebsiteAnalyticsSlider'

const CardsAdvanced = () => {
  return (
    <KeenSliderWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6} lg={4}>
          <CardMonthlyCampaignState />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardActiveProjects />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardSourceVisits />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardSalesByCountries />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardEarningReports />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardBrowserStates />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardOrders />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardTransactions />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CardPopularProducts />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardLastTransaction />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActivityTimeline />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWebsiteAnalyticsSlider />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardCongratulationsJohn />
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

export default CardsAdvanced
