// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteMediumSize = () => {
  return (
    <div>
      <CustomAutocomplete
        options={top100Films}
        id='autocomplete-size-medium'
        defaultValue={top100Films[13]}
        getOptionLabel={option => option.title || ''}
        renderInput={params => (
          <CustomTextField {...params} size='medium' label='Size medium' placeholder='Favorites' />
        )}
      />
      <CustomAutocomplete
        multiple
        sx={{ mt: 5 }}
        options={top100Films}
        defaultValue={[top100Films[13]]}
        id='autocomplete-size-medium-multi'
        getOptionLabel={option => option.title || ''}
        renderInput={params => (
          <CustomTextField {...params} size='medium' label='Size medium' placeholder='Favorites' />
        )}
      />
    </div>
  )
}

export default AutocompleteMediumSize
