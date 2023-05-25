export const SelectControlledUncontrolledJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
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
`}</code></pre>) 

export const SelectGroupingJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
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
`}</code></pre>) 

export const SelectNativeJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const SelectNative = () => {
  return (
    <div className='demo-space-x'>
      <FormControl>
        <InputLabel htmlFor='outlined-age-native-simple'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant='filled'>
        <InputLabel htmlFor='filled-age-native-simple'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel htmlFor='age-native-simple'>Age</InputLabel>
        <Select
          native
          label='Age'
          defaultValue=''
          inputProps={{
            name: 'age',
            id: 'age-native-simple'
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectNative
`}</code></pre>) 

export const SelectCustomJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
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
`}</code></pre>) 

export const SelectSizesJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectSizes = () => {
  return (
    <div className='demo-space-x'>
      <CustomTextField select defaultValue='' label='Small' id='select-size-small'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </CustomTextField>
      <CustomTextField select size='medium' defaultValue='' label='Medium' id='select-size-default'>
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

export default SelectSizes
`}</code></pre>) 

export const SelectPropsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectProps = () => {
  return (
    <Box
      sx={{ '& > *': { mt: theme => {theme.spacing(6)} !important, mr: theme => {theme.spacing(6)} !important } }}
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
`}</code></pre>) 

export const SelectMultipleJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'

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
  const [personName, setPersonName] = useState([])
  const [personNameNative, setPersonNameNative] = useState([])

  const handleChange = event => {
    setPersonName(event.target.value)
  }

  const handleChangeMultipleNative = event => {
    const { options } = event.target
    const value = []
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
        '& > *': { maxWidth: 500, mt: theme => {theme.spacing(4)} !important }
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
          renderValue: selected => selected.join(', ')
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
              {selected.map(value => (
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
            if (selected.length === 0) {
              return <em>Placeholder</em>
            }

            return selected.join(', ')
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
          value: personNameNative,
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
`}</code></pre>) 

export const SelectWithDialogJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import MenuItem from '@mui/material/MenuItem'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const SelectWithDialog = () => {
  // ** State
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open select dialog
      </Button>
      <Dialog maxWidth='xs' fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent sx={{ pt: theme => {theme.spacing(2)} !important }}>
          <form>
            <CustomTextField select label='Age' sx={{ mr: 4 }} defaultValue='' id='select-dialog-default'>
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
              id='select-dialog-native'
              SelectProps={{ native: true }}
            >
              <option aria-label='None' value='' />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </CustomTextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button onClick={handleClose} variant='outlined'>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SelectWithDialog
`}</code></pre>) 

export const SelectVariantsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'

const SelectVariants = () => {
  return (
    <div className='demo-space-x'>
      <FormControl>
        <InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
        <Select
          label='Age'
          defaultValue=''
          id='demo-simple-select-outlined'
          labelId='demo-simple-select-outlined-label'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled'>
        <InputLabel id='demo-simple-select-filled-label'>Age</InputLabel>
        <Select label='Age' labelId='demo-simple-select-filled-label' id='demo-simple-select-filled' defaultValue=''>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='standard'>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select label='Age' labelId='demo-simple-select-label' id='demo-simple-select' defaultValue=''>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectVariants
`}</code></pre>) 

