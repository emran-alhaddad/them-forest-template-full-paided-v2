// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowDown, Star, Check, XCircle, Clock } from 'react-feather'

const DividerIcon = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>
          <ArrowDown size={15} />
        </div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>
          <Star size={15} />
        </div>
      </div>

      <div className='divider'>
        <div className='divider-text'>
          <Check size={15} />
        </div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>
          <XCircle size={15} />
        </div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>
          <Clock size={15} />
        </div>
      </div>
    </Fragment>
  )
}
export default DividerIcon
