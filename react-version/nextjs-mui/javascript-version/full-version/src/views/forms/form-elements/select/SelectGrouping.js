// ** MUI Imports
import MenuItem from '@mui/material/MenuItem'
import ListSubheader from '@mui/material/ListSubheader'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectGrouping = () => {
  return (
    <div className='demo-space-x'>
      <CustomTextField select defaultValue='' label='Grouping' id='select-grouping-default'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <ListSubheader>Category 1</ListSubheader>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <ListSubheader>Category 2</ListSubheader>
        <MenuItem value={3}>Option 3</MenuItem>
        <MenuItem value={4}>Option 4</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        defaultValue=''
        label='Grouping'
        id='select-grouping-native'
        SelectProps={{ native: true }}
      >
        <option aria-label='None' value='' />
        <optgroup label='Category 1'>
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
        </optgroup>
        <optgroup label='Category 2'>
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </optgroup>
      </CustomTextField>
    </div>
  )
}

export default SelectGrouping
