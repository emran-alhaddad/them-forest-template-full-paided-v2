// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'

// ** Third Party Components
import toast from 'react-hot-toast'
import { Clock } from 'react-feather'

const ToastPromise = () => {
  const handleClick = () => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('foo')
        } else {
          reject('fox')
        }
      }, 1000)
    })

    return toast.promise(myPromise, {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching'
    })
  }

  return (
    <Card>
      <CardBody>
        <div className='d-flex text-center align-items-center flex-column'>
          <Clock size='32' className='mb-1' />
          <h5 className='mb-1 fw-bolder'>Promise</h5>
          <p className='mb-50'>Update automatically when promise resolves / fails.</p>
          <Button color='primary' onClick={handleClick}>
            Promise
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default ToastPromise
