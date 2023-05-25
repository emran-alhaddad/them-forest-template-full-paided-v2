// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import InputAdornment from '@mui/material/InputAdornment'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CustomInput = forwardRef((props, ref) => {
  return <CustomTextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsTabs = () => {
  // ** States
  const [value, setValue] = useState('personal-info')
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  const handleTabsChange = (event, newValue) => {
    setValue(newValue)
  }

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          variant='scrollable'
          scrollButtons={false}
          onChange={handleTabsChange}
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}`, '& .MuiTab-root': { py: 3.5 } }}
        >
          <Tab value='personal-info' label='Personal Info' />
          <Tab value='account-details' label='Account Details' />
          <Tab value='social-links' label='Social Links' />
        </TabList>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <TabPanel sx={{ p: 0 }} value='personal-info'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='First Name' placeholder='Leonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Last Name' placeholder='Carter' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField select fullWidth label='Country' id='form-layouts-tabs-select' defaultValue=''>
                    <MenuItem value='UK'>UK</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='Australia'>Australia</MenuItem>
                    <MenuItem value='Germany'>Germany</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    select
                    fullWidth
                    defaultValue=''
                    label='Language'
                    id='form-layouts-tabs-multiple-select'
                    SelectProps={{
                      multiple: true,
                      value: language,
                      onChange: e => handleSelectChange(e)
                    }}
                  >
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='French'>French</MenuItem>
                    <MenuItem value='Spanish'>Spanish</MenuItem>
                    <MenuItem value='Portuguese'>Portuguese</MenuItem>
                    <MenuItem value='Italian'>Italian</MenuItem>
                    <MenuItem value='German'>German</MenuItem>
                    <MenuItem value='Arabic'>Arabic</MenuItem>
                  </CustomTextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    selected={date}
                    showYearDropdown
                    showMonthDropdown
                    id='form-layouts-tabs-date'
                    placeholderText='MM-DD-YYYY'
                    customInput={<CustomInput />}
                    onChange={date => setDate(date)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth type='number' label='Phone No.' placeholder='123-456-7890' />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='account-details'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Username' placeholder='carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Password'
                    value={values.password}
                    id='form-layouts-tabs-password'
                    onChange={handlePasswordChange('password')}
                    type={values.showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowPassword}
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                          >
                            <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    value={values.password2}
                    label='Confirm Password'
                    id='form-layouts-tabs-password-2'
                    onChange={handleConfirmChange('password2')}
                    type={values.showPassword2 ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            aria-label='toggle password visibility'
                            onClick={handleClickShowConfirmPassword}
                          >
                            <Icon fontSize='1.25rem' icon={values.showPassword2 ? 'tabler:eye' : 'tabler:eye-off'} />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel sx={{ p: 0 }} value='social-links'>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Twitter' placeholder='https://twitter.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Facebook' placeholder='https://facebook.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Google+' placeholder='https://plus.google.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='LinkedIn' placeholder='https://linkedin.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Instagram' placeholder='https://instagram.com/carterLeonard' />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField fullWidth label='Quora' placeholder='https://quora.com/carterLeonard' />
                </Grid>
              </Grid>
            </TabPanel>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button type='submit' sx={{ mr: 2 }} variant='contained'>
              Submit
            </Button>
            <Button type='reset' variant='tonal' color='secondary'>
              Reset
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
  )
}

export default FormLayoutsTabs
