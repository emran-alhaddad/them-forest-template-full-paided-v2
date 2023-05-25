// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ChevronLeft, ChevronRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Input, Row, Col, Button } from 'reactstrap'

const PersonalInfo = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header mb-2'>
        <h2 className='fw-bolder mb-75'>Personal Information</h2>
        <span>Enter Your Information.</span>
      </div>
      <Row>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='firstName'>
            First Name
          </Label>
          <Input id='firstName' name='firstName' placeholder='John' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='lastName'>
            Last Name
          </Label>
          <Input id='lastName' name='lastName' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='mobileNumber'>
            Mobile Number
          </Label>
          <Input type='number' id='mobileNumber' name='mobileNumber' placeholder='(472) 765-3654' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='pincode'>
            PIN code
          </Label>
          <Input type='number' id='pincode' name='pincode' placeholder='657482' />
        </Col>
        <Col sm='12' className='mb-1'>
          <Label className='form-label' for='address'>
            Address
          </Label>
          <Input id='address' name='address' />
        </Col>
        <Col sm={12} className='mb-1'>
          <Label className='form-label' for='area-sector'>
            Area, Street, Sector, Village
          </Label>
          <Input id='area-sector' name='area-sector' placeholder='Area, Street, Sector, Village' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='town-city'>
            Town/City
          </Label>
          <Input id='town-city' name='town-city' placeholder='Town/City' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='country'>
            Country
          </Label>
          <Input type='number' id='country' name='country' placeholder='United Kingdom' />
        </Col>
      </Row>
      <div className='d-flex justify-content-between mt-2'>
        <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
          <ChevronLeft size={14} className='align-middle me-sm-25 me-0'></ChevronLeft>
          <span className='align-middle d-sm-inline-block d-none'>Previous</span>
        </Button>
        <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
          <span className='align-middle d-sm-inline-block d-none'>Next</span>
          <ChevronRight size={14} className='align-middle ms-sm-25 ms-0'></ChevronRight>
        </Button>
      </div>
    </Fragment>
  )
}

export default PersonalInfo
