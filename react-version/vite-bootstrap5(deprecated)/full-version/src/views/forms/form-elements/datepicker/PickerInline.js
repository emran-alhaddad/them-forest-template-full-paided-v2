// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerInline = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='inline-picker'>
        Inline
      </Label>
      <Flatpickr
        className='form-control'
        value={picker}
        options={{ inline: true }}
        onChange={date => setPicker(date)}
      />
    </Fragment>
  )
}

export default PickerInline
