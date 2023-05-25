// ** React Imports
import { useState } from 'react'

// ** MUI Import
import { createFilterOptions } from '@mui/material/Autocomplete'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

interface FilmOptionType {
  year?: number
  title: string
  inputValue?: string
}

const filter = createFilterOptions<FilmOptionType>()

const AutocompleteCreatable = () => {
  // ** State
  const [value, setValue] = useState<FilmOptionType | null>(null)

  return (
    <CustomAutocomplete
      freeSolo
      clearOnBlur
      value={value}
      selectOnFocus
      handleHomeEndKeys
      sx={{ width: 250 }}
      options={top100Films}
      id='autocomplete-free-solo-with-text'
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      renderInput={params => <CustomTextField {...params} label='Free solo with text demo' />}
      getOptionLabel={option => {
        if (typeof option === 'string') {
          return option || ''
        }
        if ((option as FilmOptionType).inputValue as string) {
          return ((option as FilmOptionType).inputValue as string) || ''
        }

        return (option.title as string) || ''
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue
          })
        } else if (newValue && (newValue as any).inputValue) {
          setValue({
            title: (newValue as any).inputValue
          })
        } else {
          setValue(newValue)
        }
      }}
      filterOptions={(options: FilmOptionType[], params: any) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some((option: FilmOptionType) => inputValue === option.title)
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`
          })
        }

        return filtered
      }}
    />
  )
}

export default AutocompleteCreatable
