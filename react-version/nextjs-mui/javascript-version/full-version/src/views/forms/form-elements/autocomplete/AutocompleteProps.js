// ** MUI Import
import Box from '@mui/material/Box'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteProps = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CustomAutocomplete
        sx={{ width: 250 }}
        disableCloseOnSelect
        options={top100Films}
        id='autocomplete-disableCloseOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='disableCloseOnSelect' />}
      />
      <CustomAutocomplete
        clearOnEscape
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-clearOnEscape'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='clearOnEscape' />}
      />
      <CustomAutocomplete
        disableClearable
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-disableClearable'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='disableClearable' />}
      />
      <CustomAutocomplete
        openOnFocus
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-openOnFocus'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='openOnFocus' />}
      />
      <CustomAutocomplete
        autoHighlight
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-autoHighlight'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='autoHighlight' />}
      />
      <CustomAutocomplete
        autoSelect
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-autoSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='autoSelect' />}
      />
      <CustomAutocomplete
        blurOnSelect
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-blurOnSelect'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='blurOnSelect' />}
      />
      <CustomAutocomplete
        clearOnBlur
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-clearOnBlur'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='clearOnBlur' />}
      />
      <CustomAutocomplete
        sx={{ width: 250 }}
        options={top100Films}
        selectOnFocus={false}
        id='autocomplete-selectOnFocus'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='selectOnFocus={false}' />}
      />
    </Box>
  )
}

export default AutocompleteProps
