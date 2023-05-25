// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import { ChevronLeft, Check } from 'react-feather'

// ** Reactstrap Imports
import { Label, Input, Row, Col, Button, InputGroup } from 'reactstrap'

const Billing = ({ stepper }) => {
  return (
    <Fragment>
      <div className='content-header mb-2'>
        <h2 className='fw-bolder mb-75'>Select Plan</h2>
        <span>Select plan as per your requirement.</span>
      </div>
      <Row className='custom-options-checkable gx-3 gy-2'>
        <Col md='4'>
          <Input type='radio' id='basicPlan' name='plans' className='custom-option-item-check' />
          <Label for='basicPlan' className='custom-option-item text-center p-1'>
            <span className='custom-option-item-title h3 fw-bolder'>Basic</span>
            <span className='d-block m-75'>A simple start for everyone</span>
            <span className='plan-price'>
              <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
              <span className='pricing-value fw-bolder text-primary me-25'>0</span>
              <sub className='pricing-duration text-body font-medium-1 fw-bold'>/ month</sub>
            </span>
          </Label>
        </Col>
        <Col md='4'>
          <Input type='radio' id='stdPlan' name='plans' className='custom-option-item-check' defaultChecked />
          <Label for='stdPlan' className='custom-option-item text-center p-1'>
            <span className='custom-option-item-title h3 fw-bolder'>Standard</span>
            <span className='d-block m-75'>For small to medium businesses</span>
            <span className='plan-price'>
              <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
              <span className='pricing-value fw-bolder text-primary me-25'>99</span>
              <sub className='pricing-duration text-body font-medium-1 fw-bold'>/ month</sub>
            </span>
          </Label>
        </Col>
        <Col md='4'>
          <Input type='radio' id='enterprisePlan' name='plans' className='custom-option-item-check' />
          <Label for='enterprisePlan' className='custom-option-item text-center p-1'>
            <span className='custom-option-item-title h3 fw-bolder'>Enterprise</span>
            <span className='d-block m-75'>Solution for big organizations</span>
            <span className='plan-price'>
              <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
              <span className='pricing-value fw-bolder text-primary me-25'>499</span>
              <sub className='pricing-duration text-body font-medium-1 fw-bold'>/ month</sub>
            </span>
          </Label>
        </Col>
      </Row>
      <div className='content-header my-2 py-1'>
        <h2 className='fw-bolder mb-75'>Payment Information</h2>
        <span>Enter your card Information</span>
      </div>
      <Row className='gx-2 mb-1'>
        <Col sm={12} className='mb-1'>
          <Label className='form-label' for='credit-card'>
            Card Number
          </Label>
          <InputGroup className='input-group-merge'>
            <Cleave
              id='credit-card'
              name='cardNumber'
              className='form-control'
              placeholder='1356 3215 6548 7898'
              options={{
                creditCard: true
              }}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Label className='form-label' for='card-name'>
            Name On Card
          </Label>
          <Input id='card-name' placeholder='John Doe' />
        </Col>
        <Col xs={6} md={3}>
          <Label className='form-label' for='exp-date'>
            Exp. Date
          </Label>
          <Cleave
            id='exp-date'
            placeholder='MM/YY'
            className='form-control'
            options={{ delimiter: '/', blocks: [2, 2] }}
          />
        </Col>
        <Col xs={6} md={3} className='mb-1'>
          <Label className='form-label' for='cvv'>
            CVV
          </Label>
          <Cleave id='cvv' placeholder='654' className='form-control' options={{ blocks: [3] }} />
        </Col>
      </Row>
      <div className='d-flex justify-content-between mt-2'>
        <Button color='secondary' className='btn-prev' outline onClick={() => stepper.previous()}>
          <ChevronLeft size={14} className='align-middle me-sm-25 me-0'></ChevronLeft>
          <span className='align-middle d-sm-inline-block d-none'>Previous</span>
        </Button>
        <Button color='success' className='btn-next' onClick={() => alert('Submitted!!!!')}>
          <span className='align-middle d-sm-inline-block d-none'>Submit</span>
          <Check size={14} className='align-middle ms-sm-25 ms-0'></Check>
        </Button>
      </div>
    </Fragment>
  )
}

export default Billing
