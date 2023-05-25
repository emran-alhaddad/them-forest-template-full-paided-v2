// ** Reactstrap Imports
import { Button, Spinner } from 'reactstrap'

const SpinnerButton = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline disabled>
        <Spinner size='sm' />
      </Button>

      <Button color='primary' outline disabled>
        <Spinner size='sm' />
        <span className='ms-50'>Loading...</span>
      </Button>

      <Button color='primary' outline disabled>
        <Spinner size='sm' type='grow' />
      </Button>

      <Button color='primary' outline disabled>
        <Spinner size='sm' type='grow' />
        <span className='ms-50'>Loading...</span>
      </Button>
    </div>
  )
}
export default SpinnerButton
