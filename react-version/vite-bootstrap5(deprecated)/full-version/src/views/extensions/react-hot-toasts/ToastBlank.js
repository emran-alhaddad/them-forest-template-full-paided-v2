// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Square } from 'react-feather'

const ToastBlank = () => {
  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Square size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Blank</h5>
          <p className='mb-50'>The most basic variant does not have an icon.</p>
          <Button color='primary' onClick={() => toast('Blank Toast')}>
            Blank
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastBlank
