// ** MUI Imports
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'
import MenuItem from '@mui/material/MenuItem'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const StepDealUsage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth id='select-user-type' label='User Type' defaultValue=''>
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='registered'>Registered</MenuItem>
          <MenuItem value='unregistered'>Unregistered</MenuItem>
          <MenuItem value='prime-members'>Prime Members</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Max Users' placeholder='500' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Minimum Cart Amount' placeholder='$99' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth type='number' label='Promotion Fee' placeholder='$9' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth id='select-payment-method' label='Payment Method' defaultValue=''>
          <MenuItem value='any'>any</MenuItem>
          <MenuItem value='credit-card'>Credit Card</MenuItem>
          <MenuItem value='net-banking'>Net Banking</MenuItem>
          <MenuItem value='wallet'>Wallet</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField select fullWidth id='select-deal-status' label='Deal Status' defaultValue=''>
          <MenuItem value='active'>Active</MenuItem>
          <MenuItem value='inactive'>Inactive</MenuItem>
          <MenuItem value='suspended'>Suspended</MenuItem>
          <MenuItem value='abandoned'>Abandoned</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(2)} !important` }}>
        <FormControlLabel control={<Switch />} label='Limit this discount to a single-use per customer?' />
      </Grid>
    </Grid>
  )
}

export default StepDealUsage
