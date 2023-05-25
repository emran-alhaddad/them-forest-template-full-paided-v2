// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { styled, useTheme } from '@mui/material/styles'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

const data = [
  {
    isSelected: true,
    value: 'percentage',
    content: 'Create a deal which offer uses some % off (i.e 5% OFF) on total.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        Percentage
      </Typography>
    )
  },
  {
    value: 'flat-amount',
    content: 'Create a deal which offer uses flat $ off (i.e $5 OFF) on the total.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        Flat Amount
      </Typography>
    )
  },
  {
    value: 'prime-member',
    content: 'Create prime member only deal to encourage the prime members.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        Prime Member
      </Typography>
    )
  }
]
const regionArray = ['Asia', 'Europe', 'Africa', 'Australia', 'North America', 'South America']

const ImgWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 4, 0, 4)
  },
  [theme.breakpoints.up('sm')]: {
    height: 250,
    padding: theme.spacing(5, 5, 0, 5)
  },
  '& img': {
    height: 'auto',
    maxWidth: '100%'
  }
}))

const StepDealType = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** States
  const [region, setRegion] = useState([])
  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons = [
    {
      icon: 'tabler:discount-check',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:credit-card',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:diamond',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    }
  ]

  const handleChange = event => {
    const {
      target: { value }
    } = event
    setRegion(typeof value === 'string' ? value.split(',') : value)
  }

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
        <Grid item xs={12} sx={{ mb: 2 }}>
          <ImgWrapper>
            <img width={650} alt='illustration' src={`/images/pages/create-deal-type-${theme.palette.mode}.png`} />
          </ImgWrapper>
        </Grid>
        {data.map((item, index) => (
          <CustomRadioIcons
            key={index}
            data={data[index]}
            icon={icons[index].icon}
            selected={selectedRadio}
            name='custom-radios-deal'
            gridProps={{ sm: 4, xs: 12 }}
            handleChange={handleRadioChange}
            iconProps={icons[index].iconProps}
          />
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            fullWidth
            type='number'
            label='Discount'
            placeholder='25'
            helperText='Enter the discount percentage. 10 = 10%'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            select
            fullWidth
            label='Region'
            helperText='Select applicable regions for the deal.'
            SelectProps={{
              multiple: true,
              value: region,
              onChange: e => handleChange(e),
              renderValue: selected => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selected.map(value => (
                    <CustomChip rounded key={value} label={value} skin='light' />
                  ))}
                </Box>
              )
            }}
          >
            {regionArray.map(reg => (
              <MenuItem key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </CustomTextField>
        </Grid>
      </Grid>
    </>
  )
}

export default StepDealType
