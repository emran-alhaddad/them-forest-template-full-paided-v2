export const AutocompleteCheckboxesJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
import Checkbox from '@mui/material/Checkbox'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteCheckboxes = () => {
  return (
    <CustomAutocomplete
      multiple
      disableCloseOnSelect
      options={top100Films}
      id='autocomplete-checkboxes'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='Checkboxes' placeholder='Favorites' />}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox checked={selected} sx={{ mr: 2 }} />
          {option.title}
        </li>
      )}
    />
  )
}

export default AutocompleteCheckboxes
`}</code></pre>) 

export const AutocompleteAsynchronousRequestJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Import
import CircularProgress from '@mui/material/CircularProgress'

// ** Third Party Imports
import axios from 'axios'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

const sleep = (delay = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const AutocompleteAsynchronousRequest = () => {
  // ** States
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0
  useEffect(() => {
    let active = true
    if (!loading) {
      return undefined
    }

    const fetchData = async () => {
      const response = await axios.get('/forms/autocomplete')
      await sleep(1000)
      const top100Films = await response.data
      if (active) {
        setOptions(Object.keys(top100Films).map(key => top100Films[key]))
      }
    }
    fetchData()

    return () => {
      active = false
    }
  }, [loading])
  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <CustomAutocomplete
      open={open}
      options={options}
      loading={loading}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      id='autocomplete-asynchronous-request'
      getOptionLabel={option => option.title || ''}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      renderInput={params => (
        <CustomTextField
          {...params}
          label='Asynchronous'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? <CircularProgress size={20} /> : null}
                {params.InputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      )}
    />
  )
}

export default AutocompleteAsynchronousRequest
`}</code></pre>) 

export const AutocompleteCreatableJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Import
import { createFilterOptions } from '@mui/material/Autocomplete'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const filter = createFilterOptions()

const AutocompleteCreatable = () => {
  // ** State
  const [value, setValue] = useState(null)

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
        if (option.inputValue) {
          return option.inputValue || ''
        }

        return option.title || ''
      }}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue
          })
        } else if (newValue && newValue.inputValue) {
          setValue({
            title: newValue.inputValue
          })
        } else {
          setValue(newValue)
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some(option => inputValue === option.title)
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: Add "{inputValue}"
          })
        }

        return filtered
      }}
    />
  )
}

export default AutocompleteCreatable
`}</code></pre>) 

export const AutocompleteCustomJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
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
`}</code></pre>) 

export const AutocompleteCustomFilterJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
import { createFilterOptions } from '@mui/material/Autocomplete'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title
})

const AutocompleteCustomFilter = () => {
  return (
    <CustomAutocomplete
      options={top100Films}
      filterOptions={filterOptions}
      id='autocomplete-custom-filter'
      getOptionLabel={option => option.title || ''}
      renderInput={params => <CustomTextField {...params} label='Custom filter' />}
    />
  )
}

export default AutocompleteCustomFilter
`}</code></pre>) 

export const AutocompleteCustomInputJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Import
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

const options = ['Option 1', 'Option 2']

const AutocompleteCustomInput = () => {
  return (
    <CustomAutocomplete
      options={options}
      id='autocomplete-custom-input'
      renderInput={params => (
        <div ref={params.InputProps.ref}>
          <input type='text' {...params.inputProps} />
        </div>
      )}
      sx={{
        display: 'inline-block',
        '& input': {
          width: 200,
          backgroundColor: 'background.paper',
          color: theme => theme.palette.getContrastText(theme.palette.background.paper)
        }
      }}
    />
  )
}

export default AutocompleteCustomInput
`}</code></pre>) 

export const AutocompleteFixedOptionsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Chip from '@mui/material/Chip'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const fixedOptions = [top100Films[6]]

const AutocompleteFixedOptions = () => {
  // ** State
  const [value, setValue] = useState([...fixedOptions, top100Films[13]])

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
            {...getTagProps({ index })}
            disabled={fixedOptions.indexOf(option) !== -1}
            key={index}
          />
        ))
      }
    />
  )
}

export default AutocompleteFixedOptions
`}</code></pre>) 

export const AutocompleteGroupedJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteGrouped = () => {
  const options = top100Films.map(option => {
    const firstLetter = option.title[0].toUpperCase()

    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option
    }
  })

  return (
    <CustomAutocomplete
      sx={{ width: 250 }}
      id='autocomplete-grouped'
      groupBy={option => option.firstLetter}
      getOptionLabel={option => option.title || ''}
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      renderInput={params => <CustomTextField {...params} label='With categories' />}
    />
  )
}

export default AutocompleteGrouped
`}</code></pre>) 

export const AutocompleteFreeSoloJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteFreeSolo = () => {
  return (
    <CustomAutocomplete
      freeSolo
      sx={{ width: 250 }}
      id='autocomplete-free-solo'
      options={top100Films.map(option => option.title)}
      renderInput={params => <CustomTextField {...params} label='Free Solo' />}
    />
  )
}

export default AutocompleteFreeSolo
`}</code></pre>) 

export const AutocompleteLimitTagsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteLimitTags = () => {
  return (
    <CustomAutocomplete
      multiple
      limitTags={2}
      options={top100Films}
      id='autocomplete-limit-tags'
      getOptionLabel={option => option.title || ''}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={params => <CustomTextField {...params} label='limitTags' placeholder='Favorites' />}
    />
  )
}

export default AutocompleteLimitTags
`}</code></pre>) 

export const AutocompleteControlledUncontrolledJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteControlledUncontrolled = () => {
  // ** State
  const [value, setValue] = useState(null)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CustomAutocomplete
        value={value}
        sx={{ width: 250 }}
        options={top100Films}
        onChange={handleChange}
        id='autocomplete-controlled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Controlled' />}
      />
      <CustomAutocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-uncontrolled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <CustomTextField {...params} label='Uncontrolled' />}
      />
    </Box>
  )
}

export default AutocompleteControlledUncontrolled
`}</code></pre>) 

export const AutocompleteDisabledOptionsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) => {index < 20 ? '0' : ''}{Math.floor(index / 2)}:{index % 2 === 0 ? '00' : '30'}
)

const AutocompleteDisabledOptions = () => {
  return (
    <CustomAutocomplete
      sx={{ width: 250 }}
      options={timeSlots}
      id='autocomplete-disabled-options'
      renderInput={params => <CustomTextField {...params} label='Disabled options' />}
      getOptionDisabled={option => option === timeSlots[0] || option === timeSlots[2]}
    />
  )
}

export default AutocompleteDisabledOptions
`}</code></pre>) 

export const AutocompleteCountryJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
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
            src={https://flagcdn.com/w20/{option.code.toLowerCase()}.png}
            srcSet={https://flagcdn.com/w40/{option.code.toLowerCase()}.png 2x}
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
`}</code></pre>) 

export const AutocompleteMultipleValuesJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
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
`}</code></pre>) 

export const AutocompletePropsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Import
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
`}</code></pre>) 

export const AutocompleteMediumSizeJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** Custom Component Imports
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
`}</code></pre>) 

export const AutocompleteVariantsJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

// ** Data
import { top100Films } from 'src/@fake-db/autocomplete'

const AutocompleteVariants = () => {
  return (
    <Box className='demo-space-x' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Autocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-outlined'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' />}
      />
      <Autocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-filled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='filled' />}
      />
      <Autocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-default'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Combo box' variant='standard' />}
      />
      <Autocomplete
        disabled
        sx={{ width: 250 }}
        options={top100Films}
        id='autocomplete-disabled'
        getOptionLabel={option => option.title || ''}
        renderInput={params => <TextField {...params} label='Disabled' />}
      />
    </Box>
  )
}

export default AutocompleteVariants
`}</code></pre>) 

