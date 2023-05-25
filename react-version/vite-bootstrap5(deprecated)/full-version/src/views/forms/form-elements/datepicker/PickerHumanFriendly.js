// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const PickerHumanFriendly = () => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='hf-picker'>
        Human Friendly
      </Label>
      <Flatpickr
        value={picker}
        id='hf-picker'
        className='form-control'
        onChange={date => setPicker(date)}
        options={{
          altInput: true,
          altFormat: 'F j, Y',
          dateFormat: 'Y-m-d'
        }}
      />
    </Fragment>
  )
}

export default PickerHumanFriendly
