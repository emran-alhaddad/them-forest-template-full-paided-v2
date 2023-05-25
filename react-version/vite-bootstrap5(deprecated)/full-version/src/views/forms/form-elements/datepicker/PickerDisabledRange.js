// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerRangeDisabled = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='disabled-picker'>
        Disabled Range
      </Label>
      <Flatpickr
        value={picker}
        id='disabled-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          dateFormat: 'Y-m-d',
          disable: [
            {
              from: new Date(),
              // eslint-disable-next-line no-mixed-operators
              to: new Date(new Date().getTime() + 120 * 60 * 60 * 1000)
            }
          ]
        }}
      />
    </Fragment>
  )
}

export default PickerRangeDisabled
