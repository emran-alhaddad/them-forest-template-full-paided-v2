// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Custom Components
import AutoComplete from '@components/autocomplete'

const AutoCompleteAjax = () => {
  // ** State
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    axios.get('/api/autocomplete/data').then(response => setSuggestions(response.data.autoComplete))
  }, [])

  return suggestions.length ? (
    <AutoComplete
      suggestions={suggestions}
      className='form-control'
      filterKey='title'
      suggestionLimit={4}
      placeholder='Search for any of the top 250 IMDB movies'
    />
  ) : null
}
export default AutoCompleteAjax
