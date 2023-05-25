// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Smile } from 'react-feather'

const ToastEmoji = () => {
  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Smile size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Emoji</h5>
          <p className='mb-50'>Add any emoji instead of an icon.</p>
          <Button color='primary' onClick={() => toast('Good Job!', { icon: '👏' })}>
            Emoji
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastEmoji
