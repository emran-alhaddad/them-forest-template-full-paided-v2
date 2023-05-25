// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

// ** Reactstrap Imports
import { Form, Input, Label, Button } from 'reactstrap'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'

const SidebarAddPayment = ({ open, toggleSidebar }) => {
  // ** States
  const [picker, setPicker] = useState(new Date())

  return (
    <Sidebar
      size='lg'
      open={open}
      title='Add Payment'
      headerClassName='mb-1'
      contentClassName='p-0'
      toggleSidebar={toggleSidebar}
    >
      <Form>
        <div className='mb-1'>
          <Input id='balance' defaultValue='Invoice Balance: 5000.00' disabled />
        </div>
        <div className='mb-1'>
          <Label for='amount' className='form-label'>
            Payment Amount
          </Label>
          <Input type='number' id='amount' placeholder='$1000' />
        </div>
        <div className='mb-1'>
          <Label for='payment-amount' className='form-label'>
            Payment Date
          </Label>
          <Flatpickr id='payment-amount' value={picker} onChange={date => setPicker(date)} className='form-control' />
        </div>
        <div className='mb-1'>
          <Label for='payment-method' className='form-label'>
            Payment Method
          </Label>
          <Input type='select' id='payment-method' defaultValue=''>
            <option value='' disabled>
              Select payment method
            </option>
            <option value='Cash'>Cash</option>
            <option value='Bank Transfer'>Bank Transfer</option>
            <option value='Debit'>Debit</option>
            <option value='Credit'>Credit</option>
            <option value='Paypal'>Paypal</option>
          </Input>
        </div>
        <div className='mb-1'>
          <Label for='payment-note' className='form-label'>
            Internal Payment Note
          </Label>
          <Input type='textarea' rows='5' id='payment-note' placeholder='Internal Payment Note' />
        </div>
        <div className='d-flex flex-wrap mb-0'>
          <Button className='me-1' color='primary' onClick={toggleSidebar}>
            Send
          </Button>
          <Button color='secondary' outline onClick={toggleSidebar}>
            Cancel
          </Button>
        </div>
      </Form>
    </Sidebar>
  )
}

export default SidebarAddPayment
