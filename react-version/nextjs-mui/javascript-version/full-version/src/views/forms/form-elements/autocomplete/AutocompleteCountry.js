// ** MUI Import
import Box from '@mui/material/Box'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { countries } from 'src/@fake-db/autocomplete'

const AutocompleteCountry = () => {
  return (
    <CustomAutocomplete
      autoHighlight
      sx={{ width: 250 }}
      id='autocomplete-country-select'
      options={countries}
      getOptionLabel={option => option.label || ''}
      renderOption={(props, option) => (
        <Box component='li' sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
          <img
            alt=''
            width='20'
            loading='lazy'
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={params => (
        <CustomTextField
          {...params}
          label='Choose a country'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
        />
      )}
    />
  )
}

export default AutocompleteCountry
