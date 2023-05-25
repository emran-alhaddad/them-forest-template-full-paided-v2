// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'

// ** Type Imports
import { CustomRadioIconsData, CustomRadioIconsProps } from 'src/@core/components/custom-radio/types'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'

interface IconType {
  icon: CustomRadioIconsProps['icon']
  iconProps: CustomRadioIconsProps['iconProps']
}

const data: CustomRadioIconsData[] = [
  {
    value: 'builder',
    isSelected: true,
    content: 'List property as Builder, list your project and get highest reach.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        I am the Builder
      </Typography>
    )
  },
  {
    value: 'owner',
    content: 'Submit property as an Individual. Lease, Rent or Sell at the best price.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        I am the Owner
      </Typography>
    )
  },
  {
    value: 'broker',
    content: 'Earn highest commission by listing your clients properties at the best price.',
    title: (
      <Typography variant='h6' sx={{ mb: 1 }}>
        I am the Broker
      </Typography>
    )
  }
]

const StepPersonalDetails = () => {
  const initialIconSelected: string = data.filter(item => item.isSelected)[
    data.filter(item => item.isSelected).length - 1
  ].value

  // ** States
  const [showValues, setShowValues] = useState<boolean>(false)
  const [selectedRadio, setSelectedRadio] = useState<string>(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons: IconType[] = [
    {
      icon: 'tabler:building',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:diamond',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:briefcase',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    }
  ]

  const handleTogglePasswordView = () => {
    setShowValues(!showValues)
  }

  const handleRadioChange = (prop: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio((prop.target as HTMLInputElement).value)
    }
  }

  return (
    <>
      <Grid container sx={{ mb: 6 }} spacing={4}>
        {data.map((item, index) => (
          <CustomRadioIcons
            key={index}
            data={data[index]}
            name='custom-radios'
            icon={icons[index].icon}
            selected={selectedRadio}
            gridProps={{ sm: 4, xs: 12 }}
            handleChange={handleRadioChange}
            iconProps={icons[index].iconProps}
          />
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='First Name' placeholder='John' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='Last Name' placeholder='Doe' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='Username' placeholder='john.doe' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            fullWidth
            label='Password'
            placeholder='············'
            type={showValues ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleTogglePasswordView}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <Icon fontSize='1.25rem' icon={showValues ? 'tabler:eye' : 'tabler:eye-off'} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth type='email' label='Email' placeholder='john.doe@email.com' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            fullWidth
            label='Contact'
            placeholder='202 555 0111'
            InputProps={{
              startAdornment: <InputAdornment position='start'>US (+1)</InputAdornment>
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StepPersonalDetails
