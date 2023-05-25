// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerDateTime = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())

  return (
    <Fragment>
      <Label className='form-label' for='date-time-picker'>
        Date & Time
      </Label>
      <Flatpickr
        value={picker}
        data-enable-time
        id='date-time-picker'
        className='form-control'
        onChange={date => setPicker(date)}
      />
    </Fragment>
  )
}

export default PickerDateTime
