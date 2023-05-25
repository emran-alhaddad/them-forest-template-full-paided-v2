// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const StepPersonalDetails = ({ handleNext, handlePrev }) => {
  return (
    <>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h3' sx={{ mb: 1.5 }}>
          Personal Information
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Enter Your Personal Information</Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth placeholder='john' label='First Name' />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            label='Mobile'
            placeholder='202 555 0111'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth type='number' label='Pincode' placeholder='689421' />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <CustomTextField fullWidth label='Address' placeholder='7777, Mendez Plains, Florida' />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <CustomTextField fullWidth label='Landmark' placeholder='Mendez Plains' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField fullWidth label='City' placeholder='Miami' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField select fullWidth label='State' defaultValue='New York'>
            <MenuItem value='New York'>New York</MenuItem>
            <MenuItem value='California'>California</MenuItem>
            <MenuItem value='Florida'>Florida</MenuItem>
            <MenuItem value='Washington'>Washington</MenuItem>
            <MenuItem value='Texas'>Texas</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(6)} !important` }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button color='secondary' variant='tonal' onClick={handlePrev} sx={{ '& svg': { mr: 2 } }}>
              <Icon fontSize='1.125rem' icon='tabler:arrow-left' />
              Previous
            </Button>
            <Button variant='contained' onClick={handleNext} sx={{ '& svg': { ml: 2 } }}>
              Next
              <Icon fontSize='1.125rem' icon='tabler:arrow-right' />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default StepPersonalDetails
