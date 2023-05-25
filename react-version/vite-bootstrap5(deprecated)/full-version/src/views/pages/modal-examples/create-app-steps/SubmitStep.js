// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Icons Imports
import { ArrowLeft, Check } from 'react-feather'

// ** Images
import illustration from '@src/assets/images/illustration/pricing-Illustration.svg'

const SubmitStep = ({ stepper }) => {
  return (
    <div className='text-center'>
      <h3>Submit 🥳</h3>
      <p>Submit your app to kickstart your project</p>
      <img src={illustration} alt='illustration' height='218' />
      <div className='d-flex justify-content-between mt-3'>
        <Button color='primary' onClick={() => stepper.previous()}>
          <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
          <div className='align-middle d-sm-inline-block d-none'>Previous</div>
        </Button>
        <Button
          color='success'
          onClick={() => {
            alert('Submitted..!!')
          }}
        >
          <div className='align-middle d-sm-inline-block d-none'>Submit</div>
          <Check size={14} className='align-middle ms-sm-50 ms-0' />
        </Button>
      </div>
    </div>
  )
}

export default SubmitStep
