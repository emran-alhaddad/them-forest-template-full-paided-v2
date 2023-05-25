// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import format from 'date-fns/format'
import DatePicker from 'react-datepicker'

// ** Types
import { DateType } from 'src/types/forms/reactDatepickerTypes'

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const offeredItemsArray = [
  'Apple iPhone 12 Pro Max (256GB)',
  'Apple iPhone 12 Pro (512GB)',
  'Apple iPhone 12 Mini (256GB)',
  'Apple iPhone 11 Pro Max (256GB)',
  'Apple iPhone 11 (64GB)',
  'OnePlus Nord CE 56 (128GB)'
]

const CustomInput = forwardRef((props: PickerProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`

  return <CustomTextField fullWidth inputRef={ref} label={props.label || ''} {...props} value={value} />
})

const StepDealDetails = () => {
  // ** State
  const [endDate, setEndDate] = useState<DateType>(null)
  const [startDate, setStartDate] = useState<DateType>(null)
  const [offeredItems, setOfferedItems] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof offeredItems>) => {
    const {
      target: { value }
    } = event
    setOfferedItems(typeof value === 'string' ? value.split(',') : value)
  }

  const handleDateChange = (dates: any) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Deal Title' placeholder='Black Friday sale, 25% off' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField fullWidth label='Deal Code' placeholder='25PEROFF' />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          fullWidth
          multiline
          minRows={4}
          label='Deal Description'
          sx={{ '&, & .MuiInputBase-root': { height: '100%' } }}
          placeholder='To sell or distribute something as a business deal'
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomTextField
          select
          fullWidth
          sx={{ mb: 5 }}
          label='Offered Items'
          SelectProps={{
            multiple: true,
            value: offeredItems,
            onChange: e => handleChange(e as SelectChangeEvent<typeof offeredItems>),
            renderValue: selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {(selected as string[]).map(value => (
                  <CustomChip rounded key={value} label={value} skin='light' />
                ))}
              </Box>
            )
          }}
        >
          {offeredItemsArray.map(reg => (
            <MenuItem key={reg} value={reg}>
              {reg}
            </MenuItem>
          ))}
        </CustomTextField>
        <CustomTextField select fullWidth id='select-cart-condition' label='Cart Condition' defaultValue=''>
          <MenuItem value='all'>Cart must contain all selected Downloads</MenuItem>
          <MenuItem value='any'>Cart needs one or more of the selected Downloads</MenuItem>
        </CustomTextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <DatePicker
          selectsRange
          endDate={endDate}
          selected={startDate}
          startDate={startDate}
          id='date-range-picker'
          onChange={handleDateChange}
          shouldCloseOnSelect={false}
          customInput={
            <CustomInput label='Deal Duration' start={startDate as Date | number} end={endDate as Date | number} />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component='fieldset'>
          <FormLabel
            component='legend'
            sx={{
              fontWeight: 500,
              lineHeight: '21px',
              letterSpacing: '0.1px',
              fontSize: theme => theme.typography.body2.fontSize
            }}
          >
            Notify Users
          </FormLabel>
          <FormGroup aria-label='position' row>
            <FormControlLabel value='email' label='Email' control={<Checkbox />} />
            <FormControlLabel value='sms' label='SMS' control={<Checkbox />} />
            <FormControlLabel control={<Checkbox />} value='push-notification' label='Push Notification' />
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default StepDealDetails
