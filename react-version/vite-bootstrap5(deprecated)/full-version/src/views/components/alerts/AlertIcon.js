// ** Reactstrap Imports
import { Alert } from 'reactstrap'

// ** Icons Imports
import { Star } from 'react-feather'

const AlertIcon = () => {
  return (
    <div className='demo-spacing-0'>
      <Alert color='primary'>
        <div className='alert-body d-flex align-items-center'>
          <Star size={15} />
          <span className='ms-50'>
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
          </span>
        </div>
      </Alert>
    </div>
  )
}
export default AlertIcon
