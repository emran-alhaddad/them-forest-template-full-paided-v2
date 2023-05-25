// ** React Imports
import { useState, Fragment } from 'react'

// ** Third Party Components
import Rating from 'react-rating'
import { Star } from 'react-feather'

const RatingsHover = ({ filledColor, dir }) => {
  // ** State
  const [value, setValue] = useState(0)

  const onHover = rate => {
    if (rate !== undefined) {
      setValue(rate)
    }
  }

  return (
    <Fragment>
      <Rating
        direction={dir}
        id='ratings-hover'
        initialRating={value}
        onHover={rate => onHover(rate)}
        onChange={rate => setValue(rate)}
        emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
        fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
      />
      <div className='counter-wrapper mt-1'>
        <span className='fw-bold'>Ratings: {value}</span>
      </div>
    </Fragment>
  )
}

export default RatingsHover
