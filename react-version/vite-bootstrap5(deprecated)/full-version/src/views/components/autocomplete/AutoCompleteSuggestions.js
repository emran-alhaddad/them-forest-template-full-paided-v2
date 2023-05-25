// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import AutoComplete from '@components/autocomplete'

const AutoCompleteDefaultSuggestions = () => {
  // ** State
  const [suggestions] = useState([
    {
      title: 'React.js'
    },
    {
      title: 'Angular.js'
    },
    {
      title: 'Javascript'
    },
    {
      title: 'Vue.js'
    },
    {
      title: 'HTML'
    },
    {
      title: 'CSS'
    },
    {
      title: 'SCSS'
    },
    {
      title: 'PHP'
    },
    {
      title: 'Laravel'
    }
  ])

  return (
    <AutoComplete
      filterKey='title'
      suggestionLimit={4}
      placeholder="Type 'a'"
      className='form-control'
      suggestions={suggestions}
      defaultSuggestions={true}
    />
  )
}
export default AutoCompleteDefaultSuggestions
