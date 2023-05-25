// ** React Import
import { forwardRef } from 'react'

// ** MUI Import
import Paper from '@mui/material/Paper'
import Autocomplete from '@mui/material/Autocomplete'

const CustomAutocomplete = forwardRef((props, ref) => {
  return (
    // eslint-disable-next-line lines-around-comment
    // @ts-expect-error - AutocompleteProps is not compatible with PaperProps
    <Autocomplete
      {...props}
      ref={ref}
      PaperComponent={props => <Paper {...props} className='custom-autocomplete-paper' />}
    />
  )
})

export default CustomAutocomplete
