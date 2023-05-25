// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ChevronLeft, ChevronRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Input, Row, Col, Button } from 'reactstrap'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

const AccountDetails = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header mb-2'>
        <h2 className='fw-bolder mb-75'>Account Information</h2>
        <span>Enter your username password details</span>
      </div>
      <Row>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for='username'>
            Username
          </Label>
          <Input id='username' name='username' placeholder='johndoe' />
        </Col>
        <Col md='6' className='mb-1'>
          <Label className='form-label' for={`email`}>
            Email
          </Label>
          <Input type='email' id='email' name='email' placeholder='john.doe@email.com' />
        </Col>
      </Row>
      <Row>
        <div className='form-password-toggle col-md-6 mb-1'>
          <InputPasswordToggle
            id='password'
            name='password'
            label='Password'
            htmlFor='password'
            className='input-group-merge'
          />
        </div>
        <div className='form-password-toggle col-md-6 mb-1'>
          <InputPasswordToggle
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm Password'
            htmlFor='password'
            className='input-group-merge'
          />
        </div>
      </Row>
      <Row>
        <Col sm={12} className='mb-1'>
          <Label className='form-label' for='profile-link'>
            Profile Link
          </Label>
          <Input id='profile-link' placeholder='johndoe/profile' />
        </Col>
        <Col sm={12} className='mb-1'>
          <div className='form-check form-check-inline'>
            <Input type='checkbox' id='remember-me' />
            <Label for='remember-me' className='form-check-label'>
              Remember Me
            </Label>
          </div>
        </Col>
      </Row>
      <div className='d-flex justify-content-between mt-2'>
        <Button color='secondary' className='btn-prev' outline disabled>
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

export default AccountDetails
