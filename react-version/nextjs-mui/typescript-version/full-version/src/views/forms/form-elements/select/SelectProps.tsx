// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectProps = () => {
  return (
    <Box
      sx={{ '& > *': { mt: theme => `${theme.spacing(6)} !important`, mr: theme => `${theme.spacing(6)} !important` } }}
    >
      <CustomTextField select defaultValue='' label='Age' id='select-helper' helperText='With label + helper text'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        label='Age'
        defaultValue=''
        id='select-autoWidth'
        helperText='Auto width'
        SelectProps={{ autoWidth: true }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField select disabled label='Age' defaultValue='' helperText='Disabled' id='select-props-disabled'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField error select defaultValue='' label='Age' id='select-error' helperText='Error'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        label='Age'
        defaultValue=''
        helperText='Read only'
        id='select-props-readOnly'
        SelectProps={{ readOnly: true }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField select required defaultValue='' label='Age' id='select-required' helperText='Required'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField
        select
        defaultValue=''
        id='select-without-label'
        helperText='Without label'
        SelectProps={{ displayEmpty: true }}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
    </Box>
  )
}

export default SelectProps
