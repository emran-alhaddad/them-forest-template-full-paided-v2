// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteMultipleValues = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CustomAutocomplete
        multiple
        sx={{ width: 325 }}
        options={top100Films}
        filterSelectedOptions
        defaultValue={[top100Films[13]]}
        id='autocomplete-multiple-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='filterSelectedOptions' placeholder='Favorites' />}
      />
      <CustomAutocomplete
        freeSolo
        multiple
        sx={{ width: 325 }}
        id='autocomplete-multiple-filled'
        defaultValue={[top100Films[13].title]}
        options={top100Films.map(option => option.title)}
        renderInput={params => (
          <CustomTextField {...params} variant='filled' label='freeSolo' placeholder='Favorites' />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => <Chip label={option} {...getTagProps({ index })} key={index} />)
        }
      />
      <CustomAutocomplete
        readOnly
        multiple
        sx={{ width: 325 }}
        options={top100Films}
        id='autocomplete-multiple-standard'
        getOptionLabel={option => option.title || ''}
        defaultValue={[top100Films[12], top100Films[13]]}
        renderInput={params => <CustomTextField {...params} label='readOnly' placeholder='Favorites' />}
      />
    </Box>
  )
}

export default AutocompleteMultipleValues
