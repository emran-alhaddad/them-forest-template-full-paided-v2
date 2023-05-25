// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerRange = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='range-picker'>
        Range
      </Label>
      <Flatpickr
        value={picker}
        id='range-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          mode: 'range',
          defaultDate: ['2020-02-01', '2020-02-15']
        }}
      />
    </Fragment>
  )
}

export default PickerRange
