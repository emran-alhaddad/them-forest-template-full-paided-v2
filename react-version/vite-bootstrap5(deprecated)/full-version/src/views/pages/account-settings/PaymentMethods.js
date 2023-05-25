// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Modal,
  Badge,
  Label,
  Input,
  Button,
  CardBody,
  CardTitle,
  ModalBody,
  CardHeader,
  InputGroup,
  ModalHeader,
  FormFeedback,
  InputGroupText
} from 'reactstrap'

// ** Third Party Components
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Card Images
import jcbCC from '@src/assets/images/icons/payments/jcb-cc.png'
import visaIcon from '@src/assets/images/icons/payments/visa.png'
import amexCC from '@src/assets/images/icons/payments/amex-cc.png'
import uatpCC from '@src/assets/images/icons/payments/uatp-cc.png'
import visaCC from '@src/assets/images/icons/payments/visa-cc.png'
import dinersCC from '@src/assets/images/icons/payments/diners-cc.png'
import maestroCC from '@src/assets/images/icons/payments/maestro-cc.png'
import discoverCC from '@src/assets/images/icons/payments/discover-cc.png'
import mastercardIcon from '@src/assets/images/icons/payments/mastercard.png'
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

const data = [
  {
    cardCvc: '587',
    name: 'Tom McBride',
    expiryDate: '12/24',
    imgAlt: 'Mastercard',
    badgeColor: 'primary',
    cardStatus: 'Primary',
    cardNumber: '5577 0000 5577 9865',
    imgSrc: mastercardIcon
  },
  {
    cardCvc: '681',
    imgAlt: 'Visa card',
    expiryDate: '02/24',
    name: 'Mildred Wagner',
    cardNumber: '4532 3616 2070 5678',
    imgSrc: visaIcon
  }
]

const PaymentMethods = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [cardType, setCardType] = useState('')
  const [selected, setSelected] = useState(null)
  const [modalCardType, setModalCardType] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { cardInput: '' } })

  const onSubmit = data => {
    if (data.cardInput.length <= 0) {
      setError('cardInput', {
        type: 'manual',
        message: 'Please Enter Valid Card Number'
      })
    }
  }

  const selectedCondition = selected !== null

  const openEditModal = card => {
    setSelected(card)
    setShow(true)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>Payment Methods</CardTitle>
        </CardHeader>
        <CardBody className='my-1 py-25'>
          <Row className='gx-4'>
            <Col lg='6'>
              <Row tag={Form} className='gx-2 gy-1' onSubmit={handleSubmit(onSubmit)}>
                <Col xs={12}>
                  <div className='form-check mb-1'>
                    <Input
                      type='radio'
                      value='card'
                      id='card-radio'
                      name='payment-method-radio'
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <Label className='form-check-label' for='card-radio'>
                      Credit/Debit/ATM Card
                    </Label>
                  </div>
                  <div className='form-check mb-1'>
                    <Input
                      type='radio'
                      value='paypal'
                      id='paypal-radio'
                      name='payment-method-radio'
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                    />
                    <Label className='form-check-label' for='paypal-radio'>
                      PayPal account
                    </Label>
                  </div>
                </Col>
                {paymentMethod === 'card' && (
                  <Fragment>
                    <Col xs={12}>
                      <Label className='form-label' for='credit-card'>
                        Card Number
                      </Label>
                      <InputGroup>
                        <Controller
                          id='credit-card'
                          name='cardInput'
                          control={control}
                          placeholder='1356 3215 6548 7898'
                          render={({ field }) => (
                            <Cleave
                              {...field}
                              name='cardInput'
                              className={classnames('form-control', { 'is-invalid': errors.cardInput })}
                              options={{ creditCard: true, onCreditCardTypeChanged: type => setCardType(type) }}
                            />
                          )}
                        />
                        {cardType !== '' && cardType !== 'unknown' ? (
                          <InputGroupText>
                            <img height='24' alt='card-type' src={cardsObj[cardType]} />
                          </InputGroupText>
                        ) : null}
                      </InputGroup>
                      {errors.cardInput ? (
                        <FormFeedback className='d-block'>{errors.cardInput.message}</FormFeedback>
                      ) : null}
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
                    <Col className='mt-2 pt-1' xs={12}>
                      <Button type='submit' className='me-1' color='primary'>
                        Submit
                      </Button>
                      <Button color='secondary' outline>
                        Cancel
                      </Button>
                    </Col>
                  </Fragment>
                )}
              </Row>
            </Col>
            <Col lg='6' className='mt-2 mt-lg-0'>
              <h6 className='fw-bolder mb-2'>My Cards</h6>
              <div className='added-cards'>
                {data.map((card, index) => {
                  const isLastCard = index === data[data.length - 1]
                  return (
                    <div
                      key={index}
                      className={classnames('cardMaster rounded border p-2', {
                        'mb-1': !isLastCard
                      })}
                    >
                      <div className='d-flex justify-content-between flex-sm-row flex-column'>
                        <div className='card-information'>
                          <img src={card.imgSrc} alt={card.imgAlt} className='mb-1 img-fluid' />
                          <div className='d-flex align-items-center mb-50'>
                            <h6 className='mb-0'>{card.name}</h6>
                            {index === 0 && (
                              <Badge color='light-primary' className='ms-50'>
                                Primary
                              </Badge>
                            )}
                          </div>
                          <span className='card-number '>
                            **** **** **** {card.cardNumber.substring(card.cardNumber.length - 4)}
                          </span>
                        </div>
                        <div className='d-flex flex-column text-start text-lg-end'>
                          <div className='d-flex order-sm-0 order-1 mt-1 mt-sm-0'>
                            <Button outline color='primary' className='me-75' onClick={() => openEditModal(card)}>
                              Edit
                            </Button>
                            <Button outline>Delete</Button>
                          </div>
                          <span className='mt-2'>Card expires at {card.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered'
        onClosed={() => setModalCardType('')}
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <h1 className='text-center mb-1'>{selectedCondition ? 'Edit' : 'Add New'} Card</h1>
          <p className='text-center'>
            {selectedCondition ? 'Edit your saved card details' : 'Add card for future billing'}
          </p>
          <Form tag={Row} className='gy-1 gx-2 mt-75'>
            <Col xs={12}>
              <Label className='form-label' for='credit-card'>
                Card Number
              </Label>
              <InputGroup>
                <Cleave
                  id='credit-card'
                  className='form-control'
                  value={selectedCondition ? selected.cardNumber : ''}
                  placeholder='1356 3215 6548 7898'
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged: type => {
                      setModalCardType(type)
                    }
                  }}
                />
                {cardType !== '' && cardType !== 'unknown' ? (
                  <InputGroupText>
                    <img height='24' alt='card-type' src={cardsObj[modalCardType]} />
                  </InputGroupText>
                ) : null}
              </InputGroup>
            </Col>
            <Col md={6}>
              <Label className='form-label' for='card-name'>
                Name On Card
              </Label>
              <Input id='card-name' placeholder='John Doe' defaultValue={selectedCondition ? selected.name : ''} />
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
                value={selectedCondition ? selected.expiryDate : ''}
              />
            </Col>
            <Col xs={6} md={3}>
              <Label className='form-label' for='cvv'>
                CVV
              </Label>
              <Cleave
                id='cvv'
                placeholder='654'
                className='form-control'
                options={{ blocks: [3] }}
                value={selectedCondition ? selected.cardCvc : ''}
              />
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
            <Col className='text-center mt-1' xs={12}>
              <Button className='me-1' color='primary' onClick={() => setShow(!show)}>
                Submit
              </Button>
              <Button color='secondary' outline onClick={() => setShow(!show)}>
                Cancel
              </Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default PaymentMethods
