// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

const CreditCardMask = () => {
  const options = { creditCard: true }

  return (
    <Fragment>
      <Label for='credit-card'>Credit Card</Label>
      <Cleave className='form-control' placeholder='0000 0000 0000 0000' options={options} id='credit-card' />
    </Fragment>
  )
}

export default CreditCardMask
