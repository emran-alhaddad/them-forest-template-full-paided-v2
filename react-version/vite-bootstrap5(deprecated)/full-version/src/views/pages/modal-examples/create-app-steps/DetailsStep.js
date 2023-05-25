// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap'

// ** Icons Imports
import { Briefcase, ShoppingCart, Award, ArrowLeft, ArrowRight } from 'react-feather'

const DetailsStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5>Application Name</h5>
      <Input placeholder='Vuexy Admin' />
      <h5 className='mt-2 pt-1'>Category</h5>
      <ListGroup flush>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='crmRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-info me-1'>
              <Briefcase className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>CRM Application</h5>
                <span>Scales with Any Business</span>
              </div>
              <span>
                <Input type='radio' id='crmRadio' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='ecommPlatform' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-success me-1'>
              <ShoppingCart className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Ecommerce Platforms</h5>
                <span>Grow Your Business With App</span>
              </div>
              <span>
                <Input defaultChecked type='radio' id='ecommPlatform' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='learningPlatform' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-danger me-1'>
              <Award className='font-medium-5' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Online Learning Platform</h5>
                <span>Start learning today</span>
              </div>
              <span>
                <Input type='radio' id='learningPlatform' name='categoryRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
      </ListGroup>
      <div className='d-flex justify-content-between mt-2'>
        <Button color='secondary' outline disabled>
          <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
          <div className='align-middle d-sm-inline-block d-none'>Previous</div>
        </Button>
        <Button color='primary' onClick={() => stepper.next()}>
          <div className='align-middle d-sm-inline-block d-none'>Next</div>
          <ArrowRight size={14} className='rotate-rtl align-middle ms-sm-50 ms-0' />
        </Button>
      </div>
    </Fragment>
  )
}

export default DetailsStep
