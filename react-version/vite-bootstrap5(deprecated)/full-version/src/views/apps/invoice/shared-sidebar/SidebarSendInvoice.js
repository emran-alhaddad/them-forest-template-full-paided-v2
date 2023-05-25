// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Icons Imports
import { Link } from 'react-feather'

// ** Reactstrap Imports
import { Form, Input, Label, Badge, Button } from 'reactstrap'

const SidebarSendInvoice = ({ open, toggleSidebar }) => {
  return (
    <Sidebar
      size='lg'
      open={open}
      title='Send Invoice'
      headerClassName='mb-1'
      contentClassName='p-0'
      bodyClassName='pb-sm-0 pb-3'
      toggleSidebar={toggleSidebar}
    >
      <Form>
        <div className='mb-1'>
          <Label for='invoice-from' className='form-label'>
            From
          </Label>
          <Input id='invoice-from' defaultValue='shelbyComapny@email.com' placeholder='company@email.com' />
        </div>
        <div className='mb-1'>
          <Label for='invoice-to' className='form-label'>
            To
          </Label>
          <Input id='invoice-to' defaultValue='qConsolidated@email.com' placeholder='company@email.com' />
        </div>
        <div className='mb-1'>
          <Label for='invoice-subject' className='form-label'>
            Subject
          </Label>
          <Input
            id='invoice-subject'
            defaultValue='Invoice of purchased Admin Templates'
            placeholder='Invoice regarding goods'
          />
        </div>
        <div className='mb-1'>
          <Label for='invoice-message' className='form-label'>
            Message
          </Label>
          <Input
            type='textarea'
            cols='3'
            rows='11'
            id='invoice-message'
            defaultValue={`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`}
          />
        </div>
        <div className='mb-1'>
          <Badge color='light-primary'>
            <Link className='me-50' size={14} />
            <span className='align-middle'>Invoice Attached</span>
          </Badge>
        </div>
        <div className='d-flex flex-wrap mt-2'>
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

export default SidebarSendInvoice
