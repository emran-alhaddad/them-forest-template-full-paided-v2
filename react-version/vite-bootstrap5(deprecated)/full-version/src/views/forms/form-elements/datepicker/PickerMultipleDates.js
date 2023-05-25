// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerMultipleDates = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='multi-dates-picker'>
        Multiple Dates
      </Label>
      <Flatpickr
        value={picker}
        id='multi-dates-picker'
        className='form-control'
        options={{ mode: 'multiple' }}
        onChange={date => setPicker(date)}
      />
    </Fragment>
  )
}

export default PickerMultipleDates
