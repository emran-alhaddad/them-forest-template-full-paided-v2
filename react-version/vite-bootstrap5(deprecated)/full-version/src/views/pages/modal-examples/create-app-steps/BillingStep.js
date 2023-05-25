// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Button, Input, Label, InputGroup, InputGroupText } from 'reactstrap'

// ** Third Party Components
import Cleave from 'cleave.js/react'
import { Check, X, ArrowLeft, ArrowRight } from 'react-feather'

// ** Images
import jcbCC from '@src/assets/images/icons/payments/jcb-cc.png'
import amexCC from '@src/assets/images/icons/payments/amex-cc.png'
import uatpCC from '@src/assets/images/icons/payments/uatp-cc.png'
import visaCC from '@src/assets/images/icons/payments/visa-cc.png'
import dinersCC from '@src/assets/images/icons/payments/diners-cc.png'
import maestroCC from '@src/assets/images/icons/payments/maestro-cc.png'
import discoverCC from '@src/assets/images/icons/payments/discover-cc.png'
import mastercardCC from '@src/assets/images/icons/payments/mastercard-cc.png'

const cardsObj = {
  jcb: jcbCC,
  uatp: uatpCC,
  visa: visaCC,
  amex: amexCC,
  diners: dinersCC,
  maestro: maestroCC,
  discover: discoverCC,
  mastercard: mastercardCC
}

const BillingStep = ({ stepper }) => {
  // ** State
  const [cardType, setCardType] = useState('')

  return (
    <Fragment>
      <h5 className='mb-1'>Billing</h5>
      <Row className='gy-1 gx-2'>
        <Col xs={12}>
          <Label for='card-number' className='form-label'>
            Card Number
          </Label>
          <InputGroup className='input-group-merge'>
            <Cleave
              id='card-number'
              className='form-control'
              placeholder='1356 3215 6548 7898'
              options={{
                creditCard: true,
                onCreditCardTypeChanged: type => {
                  setCardType(type)
                }
              }}
            />
            {cardType !== '' && cardType !== 'unknown' ? (
              <InputGroupText>
                <img height='24' alt='card-type' src={cardsObj[cardType]} />
              </InputGroupText>
            ) : null}
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
        <Col xs={6} md={3}>
          <Label className='form-label' for='cvv'>
            CVV
          </Label>
          <Cleave id='cvv' placeholder='654' className='form-control' options={{ blocks: [3] }} />
        </Col>
        <Col xs={12}>
          <div className='d-flex align-items-center'>
            <div className='form-switch w-100'>
              <Input defaultChecked type='switch' name='save-card' id='save-card' />
              <Label className='form-check-label' for='save-card'>
                <span className='switch-icon-left'>
                  <Check size={14} />
                </span>
                <span className='switch-icon-right'>
                  <X size={14} />
                </span>
              </Label>
              <Label className='form-check-label fw-bolder ms-1' for='save-card'>
                Save Card for future billing?
              </Label>
            </div>
          </div>
        </Col>
      </Row>
      <div className='d-flex justify-content-between mt-5 pt-1'>
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

export default BillingStep
