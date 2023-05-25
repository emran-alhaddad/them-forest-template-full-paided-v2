// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Styles Import
import 'react-credit-cards/es/styles-compiled.css'

const defaultValues = {
  companyName: '',
  billingEmail: ''
}

const BillingAddressCard = () => {
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = () => {
    return
  }

  return (
    <Card>
      <CardHeader title='Billing Address' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Controller
                name='companyName'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <CustomTextField
                    fullWidth
                    value={value}
                    onChange={onChange}
                    label='Company Name'
                    placeholder='Pixinvent'
                    error={Boolean(errors.companyName)}
                    {...(errors.companyName && { helperText: 'This field is required' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                control={control}
                name='billingEmail'
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <CustomTextField
                    fullWidth
                    type='email'
                    value={value}
                    onChange={onChange}
                    label='Billing Email'
                    placeholder='john.doe@example.com'
                    error={Boolean(errors.billingEmail)}
                    {...(errors.billingEmail && { helperText: 'This field is required' })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='TAX ID' placeholder='Enter TAX ID' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='VAT Number' placeholder='Enter VAT Number' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                fullWidth
                type='number'
                label='Phone Number'
                placeholder='202 555 0111'
                InputProps={{ startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment> }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField select fullWidth label='Country' defaultValue='australia'>
                <MenuItem value='australia'>Australia</MenuItem>
                <MenuItem value='canada'>Canada</MenuItem>
                <MenuItem value='france'>France</MenuItem>
                <MenuItem value='united-kingdom'>United Kingdom</MenuItem>
                <MenuItem value='united-states'>United States</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={12}>
              <CustomTextField fullWidth label='Billing Address' placeholder='Billing Address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth label='State' placeholder='California' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField fullWidth type='number' label='Zip Code' placeholder='231465' />
            </Grid>
            <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
              <Button type='submit' variant='contained' sx={{ mr: 4 }}>
                Save Changes
              </Button>
              <Button variant='tonal' color='secondary'>
                Discard
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default BillingAddressCard
