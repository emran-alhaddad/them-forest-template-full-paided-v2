// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Reactstrap Components
import { InputGroup, InputGroupText, Label } from 'reactstrap'

const PhoneMask = () => {
  const options = { phone: true, phoneRegionCode: 'US' }
  return (
    <Fragment>
      <Label for='phone-number'>Phone Number</Label>
      <InputGroup className='input-group-merge'>
        <InputGroupText>US (+1)</InputGroupText>
        <Cleave className='form-control' placeholder='1 234 567 8900' options={options} id='phone-number' />
      </InputGroup>
    </Fragment>
  )
}

export default PhoneMask
