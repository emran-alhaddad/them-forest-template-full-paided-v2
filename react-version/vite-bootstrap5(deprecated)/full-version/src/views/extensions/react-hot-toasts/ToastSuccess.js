// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { CheckCircle } from 'react-feather'

const ToastSuccess = () => {
  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <CheckCircle size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Success</h5>
          <p className='mb-50'>Creates a notification with an animated checkmark.</p>
          <Button color='success' onClick={() => toast.success('Successfully toasted!')}>
            Success
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastSuccess
