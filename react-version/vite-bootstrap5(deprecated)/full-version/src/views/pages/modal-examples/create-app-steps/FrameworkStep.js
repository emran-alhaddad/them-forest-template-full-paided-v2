// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Images
import vueLogo from '@src/assets/images/icons/technology/vue.png'
import laravelLogo from '@src/assets/images/icons/technology/laravel.png'
import angularLogo from '@src/assets/images/icons/technology/angular.png'
import reactNativeLogo from '@src/assets/images/icons/technology/react.png'

const FrameworkStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5>Select Framework</h5>
      <ListGroup flush>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='reactNative' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-info me-1'>
              <img src={reactNativeLogo} alt='reactNative' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>React Native</h5>
                <span>Create truly native apps</span>
              </div>
              <span>
                <Input defaultChecked type='radio' id='reactNative' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='angularRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-danger me-1'>
              <img src={angularLogo} alt='angularLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Angular</h5>
                <span>Most suited to your application</span>
              </div>
              <span>
                <Input type='radio' id='angularRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='vueRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-success me-1'>
              <img src={vueLogo} alt='vueLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Vue</h5>
                <span>Progressive framework</span>
              </div>
              <span>
                <Input type='radio' id='vueRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='laravelRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-warning me-1'>
              <img src={laravelLogo} alt='laravelLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Laravel</h5>
                <span>PHP web framework</span>
              </div>
              <span>
                <Input type='radio' id='laravelRadio' name='frameworkRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
      </ListGroup>
      <div className='d-flex justify-content-between mt-2'>
        <Button color='primary' onClick={() => stepper.previous()}>
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

export default FrameworkStep
