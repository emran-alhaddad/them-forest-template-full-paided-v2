// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap'

// ** Icons Components
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Images
import sqlLogo from '@src/assets/images/icons/database.png'
import amazonLogo from '@src/assets/images/icons/amazon.png'
import googleLogo from '@src/assets/images/icons/google.png'

const DatabaseStep = ({ stepper }) => {
  return (
    <Fragment>
      <h5>Database Name</h5>
      <Input placeholder='app.database' />
      <h5 className='mt-2 pt-1'>Select Database Engine</h5>
      <ListGroup flush>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='firebaseRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-danger me-1'>
              <img src={googleLogo} alt='googleLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>Firebase</h5>
                <span>Cloud Firestore</span>
              </div>
              <span>
                <Input type='radio' id='firebaseRadio' name='dbRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='amazonRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-secondary me-1'>
              <img src={amazonLogo} alt='amazonLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>DynamoDB</h5>
                <span>Amazon Fast NoSQL Database</span>
              </div>
              <span>
                <Input defaultChecked type='radio' id='amazonRadio' name='dbRadio' />
              </span>
            </span>
          </label>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <label htmlFor='mysqlRadio' className='d-flex cursor-pointer'>
            <span className='avatar avatar-tag bg-light-info me-1'>
              <img src={sqlLogo} alt='sqlLogo' height='25' />
            </span>
            <span className='d-flex align-items-center justify-content-between flex-grow-1'>
              <div className='me-1'>
                <h5 className='d-block fw-bolder'>MySQL</h5>
                <span>Basic MySQL database</span>
              </div>
              <span>
                <Input type='radio' id='mysqlRadio' name='dbRadio' />
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

export default DatabaseStep
