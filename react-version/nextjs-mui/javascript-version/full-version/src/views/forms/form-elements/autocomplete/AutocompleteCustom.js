// ** MUI Import
import Box from '@mui/material/Box'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteCustom = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CustomAutocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-custom'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Default' />}
      />
      <CustomAutocomplete
        disabled
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-custom-disabled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Disabled' />}
      />
      <CustomAutocomplete
        readOnly
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-custom-readOnly'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='readOnly' />}
      />
    </Box>
  )
}

export default AutocompleteCustom
