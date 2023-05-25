// ** React Imports
import { Fragment } from 'react'

const DividerPosition = () => {
  return (
    <Fragment>
      <div className='divider divider-start'>
        <div className='divider-text'>Start</div>
      </div>

      <div className='divider divider-start-center'>
        <div className='divider-text'>Start Center</div>
      </div>

      <div className='divider'>
        <div className='divider-text'>Center(Default)</div>
      </div>

      <div className='divider divider-end-center'>
        <div className='divider-text'>End Center</div>
      </div>

      <div className='divider divider-end'>
        <div className='divider-text'>End</div>
      </div>
    </Fragment>
  )
}
export default DividerPosition
