// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

const NumeralFormattingMask = () => {
  const options = { numeral: true, numeralThousandsGroupStyle: 'thousand' }

  return (
    <Fragment>
      <Label for='numeral-formatting'>Numeral Formatting</Label>
      <Cleave className='form-control' placeholder='10,000' options={options} id='numeral-formatting' />
    </Fragment>
  )
}

export default NumeralFormattingMask
