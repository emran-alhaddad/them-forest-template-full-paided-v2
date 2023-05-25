// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectControlledUncontrolled = () => {
  // ** State
  const [value, setValue] = useState('')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <div className='demo-space-x'>
      <CustomTextField
        select
        defaultValue=''
        label='Controlled'
        id='select-controlled'
        SelectProps={{ value, onChange: e => handleChange(e) }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField select defaultValue='' label='Uncontrolled' id='select-uncontrolled'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
    </div>
  )
}

export default SelectControlledUncontrolled
