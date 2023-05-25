// ** React Imports
import { useState } from 'react'

// ** Custom Components
import AutoComplete from '@components/autocomplete'

const AutoCompleteBasic = () => {
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
      suggestions={suggestions}
      className='form-control'
    />
  )
}
export default AutoCompleteBasic
