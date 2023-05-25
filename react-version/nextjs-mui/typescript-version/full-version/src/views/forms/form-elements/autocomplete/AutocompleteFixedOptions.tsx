// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Chip from '@mui/material/Chip'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

// ** Type
interface DataType {
  year: number
  title: string
}

const fixedOptions = [top100Films[6]]

const AutocompleteFixedOptions = () => {
  // ** State
  const [value, setValue] = useState<DataType[]>([...fixedOptions, top100Films[13]])

  return (
    <CustomAutocomplete
      multiple
      value={value}
      options={top100Films}
      id='autocomplete-fixed-option'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='Fixed tag' placeholder='Favorites' />}
      onChange={(event, newValue) => {
        setValue([...fixedOptions, ...newValue.filter(option => fixedOptions.indexOf(option) === -1)])
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...(getTagProps({ index }) as {})}
            disabled={fixedOptions.indexOf(option) !== -1}
            key={index}
          />
        ))
      }
    />
  )
}

export default AutocompleteFixedOptions
