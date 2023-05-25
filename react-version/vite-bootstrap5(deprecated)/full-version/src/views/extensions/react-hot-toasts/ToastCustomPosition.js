// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Grid } from 'react-feather'

const ToastCustomPosition = () => {
  const handleClick = () => {
    return toast.success('Always at the bottom.', {
      position: 'bottom-right'
    })
  }

  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Grid size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Custom Position</h5>
          <p className='mb-50'>You can change the toast's position as you like.</p>
          <Button color='primary' onClick={handleClick}>
            Position
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastCustomPosition
