// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { AlignCenter } from 'react-feather'

const ToastMultiLine = () => {
  const handleClick = () => {
    return toast(
      "This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."
    )
  }

  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <AlignCenter size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Multiline</h5>
          <p className='mb-50'>The most basic variant with longer texts.</p>
          <Button color='primary' onClick={handleClick}>
            Multiline
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastMultiLine
