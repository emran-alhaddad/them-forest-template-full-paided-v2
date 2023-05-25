// ** React Imports
import { useState } from 'react'
import classnames from 'classnames'

// ** Custom Components
import AutoComplete from '@components/autocomplete'

// ** Images
import img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'

const AutoCompleteRender = () => {
  // ** State
  const [suggestions] = useState([
    {
      name: 'Jake Shelton',
      img: img1
    },
    {
      name: 'Edith Baldwin',
      img: img2
    },
    {
      name: 'Jennifer Wolfe',
      img: img3
    },
    {
      name: 'Emily Washington',
      img: img4
    },
    {
      name: 'Heather Green',
      img: img6
    },
    {
      name: 'Brian Moore',
      img: img5
    }
  ])

  return (
    <AutoComplete
      filterKey='name'
      placeholder="Type 'a'"
      className='form-control'
      suggestions={suggestions}
      customRender={(suggestion, i, filteredData, activeSuggestion, onSuggestionItemClick, onSuggestionItemHover) => (
        <li
          key={i}
          onMouseEnter={() => onSuggestionItemHover(filteredData.indexOf(suggestion))}
          className={classnames('suggestion-item', {
            active: filteredData.indexOf(suggestion) === activeSuggestion
          })}
          onClick={e => {
            onSuggestionItemClick(null, e)
          }}
        >
          <img src={suggestion.img} alt={suggestion.name} height='32' width='32' className='me-1' />
          <span>{suggestion.name}</span>
        </li>
      )}
    />
  )
}
export default AutoCompleteRender
