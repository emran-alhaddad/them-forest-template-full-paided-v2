// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    value: 'sale',
    isSelected: true,
    title: (
      <Typography sx={{ mb: 1 }} variant='h6'>
        Sell the property
      </Typography>
    ),
    content: (
      <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
        Post your property for sale.
        <br />
        Unlimited free listing.
      </Typography>
    )
  },
  {
    value: 'rent',
    title: (
      <Typography sx={{ mb: 1 }} variant='h6'>
        Rent the property
      </Typography>
    ),
    content: (
      <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
        Post your property for rent.
        <br />
        Unlimited free listing.
      </Typography>
    )
  }
]

const StepPropertyDetails = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** State
  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons = [
    {
      icon: 'tabler:home',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:wallet',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    }
  ]

  const handleRadioChange = prop => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio(prop.target.value)
    }
  }

  return (
    <>
      <Grid container sx={{ mb: 6 }} spacing={4}>
        {data.map((item, index) => (
          <CustomRadioIcons
            key={index}
            data={data[index]}
            icon={icons[index].icon}
            selected={selectedRadio}
            name='custom-radios-property'
            gridProps={{ sm: 6, xs: 12 }}
            handleChange={handleRadioChange}
            iconProps={icons[index].iconProps}
          />
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CustomTextField select fullWidth defaultValue='' label='Property Type'>
            <MenuItem value='Residential'>Residential</MenuItem>
            <MenuItem value='Commercial'>Commercial</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            fullWidth
            type='number'
            label='Zip Code'
            placeholder='99950'
            aria-describedby='validation-zip-code'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField select fullWidth label='Country' defaultValue='UK' SelectProps={{ displayEmpty: true }}>
            <MenuItem value='UK'>UK</MenuItem>
            <MenuItem value='USA'>USA</MenuItem>
            <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Australia'>Australia</MenuItem>
            <MenuItem value='Germany'>Germany</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='State' placeholder='California' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='City' placeholder='Los Angeles' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='Landmark' placeholder='Nr. Hard Rock Cafe' />
        </Grid>
        <Grid item xs={12}>
          <CustomTextField fullWidth multiline minRows={2} label='Address' placeholder='12, Business Park' />
        </Grid>
      </Grid>
    </>
  )
}

export default StepPropertyDetails
