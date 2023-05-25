// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

const Timepickers = () => {
  // ** State
  const [basic, setBasic] = useState(new Date())

  return (
    <Fragment>
      <Label className='form-label' id='timepicker'>
        Basic 24hrs
      </Label>
      <Flatpickr
        className='form-control'
        value={basic}
        id='timepicker'
        options={{
          enableTime: true,
          noCalendar: true,
          dateFormat: 'H:i',
          time_24hr: true
        }}
        onChange={date => setBasic(date)}
      />
    </Fragment>
  )
}

export default Timepickers
