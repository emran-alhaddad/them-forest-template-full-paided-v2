// ** MUI Import
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectCustom = () => {
  return (
    <div className='demo-space-x'>
      <CustomTextField select defaultValue='' label='Default' id='custom-select'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField select defaultValue='' label='Native' id='custom-select-native' SelectProps={{ native: true }}>
        <option aria-label='None' value='' />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </CustomTextField>
    </div>
  )
}

export default SelectCustom
