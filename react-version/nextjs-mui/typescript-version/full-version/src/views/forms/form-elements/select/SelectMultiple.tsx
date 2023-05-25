// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Custom Component Import
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from 'src/@core/components/mui/text-field'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const SelectMultiple = () => {
  // ** State
  const [personName, setPersonName] = useState<string[]>([])
  const [personNameNative, setPersonNameNative] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string[])
  }

  const handleChangeMultipleNative = (event: ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target
    const value: string[] = []
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setPersonNameNative(value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > *': { maxWidth: 500, mt: theme => `${theme.spacing(4)} !important` }
      }}
    >
      <CustomTextField
        select
        fullWidth
        label='Default'
        id='select-multiple-default'
        SelectProps={{ MenuProps, multiple: true, value: personName, onChange: e => handleChange(e) }}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        label='Checkbox'
        id='select-multiple-checkbox'
        SelectProps={{
          MenuProps,
          multiple: true,
          value: personName,
          onChange: e => handleChange(e),
          renderValue: selected => (selected as unknown as string[]).join(', ')
        }}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={personName.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        label='Chip'
        id='select-multiple-chip'
        SelectProps={{
          MenuProps,
          multiple: true,
          value: personName,
          onChange: e => handleChange(e),
          renderValue: selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {(selected as unknown as string[]).map(value => (
                <CustomChip key={value} label={value} sx={{ m: 0.75 }} skin='light' color='primary' />
              ))}
            </Box>
          )
        }}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        label='Placeholder'
        id='select-multiple-placeholder'
        SelectProps={{
          MenuProps,
          multiple: true,
          displayEmpty: true,
          value: personName,
          onChange: e => handleChange(e),
          inputProps: { 'aria-label': 'Without label' },
          renderValue: selected => {
            if ((selected as unknown as string[]).length === 0) {
              return <em>Placeholder</em>
            }

            return (selected as unknown as string[]).join(', ')
          }
        }}
      >
        <MenuItem disabled value=''>
          <em>Placeholder</em>
        </MenuItem>
        {names.map(name => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </CustomTextField>
      <CustomTextField
        select
        fullWidth
        label='Native'
        id='select-multiple-native'
        SelectProps={{
          MenuProps,
          native: true,
          multiple: true,
          value: personNameNative, // @ts-ignore
          onChange: e => handleChangeMultipleNative(e)
        }}
      >
        {names.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </CustomTextField>
    </Box>
  )
}

export default SelectMultiple
