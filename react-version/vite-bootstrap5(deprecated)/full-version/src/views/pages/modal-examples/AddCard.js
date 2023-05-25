// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Modal,
  Label,
  Input,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  InputGroup,
  ModalHeader,
  FormFeedback,
  InputGroupText
} from 'reactstrap'

// ** Third Party Components
import classnames from 'classnames'
import Cleave from 'cleave.js/react'
import { Check, X, CreditCard } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

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

const defaultValues = {
  cardNumber: ''
}

const AddCardExample = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [cardType, setCardType] = useState('')

  // ** Hooks
  const {
    reset,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (data.cardNumber.length) {
      clearErrors()
    } else {
      setError('cardNumber', { type: 'manual' })
    }
  }

  return (
    <Fragment>
      <Card>
        <CardBody className='text-center'>
          <CreditCard className='font-large-2 mb-1' />
          <CardTitle tag='h5'>Add New Card</CardTitle>
          <CardText>Quickly collect the credit card details, built in input mask and form validation support.</CardText>
          <Button color='primary' onClick={() => setShow(true)}>
            Show
          </Button>
        </CardBody>
      </Card>
      <Modal
        isOpen={show}
        toggle={() => setShow(!show)}
        className='modal-dialog-centered'
        onClosed={() => setCardType('')}
      >
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <h1 className='text-center mb-1'>Add New Card</h1>
          <p className='text-center'>Add card for future billing</p>
          <Row tag='form' className='gy-1 gx-2 mt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Label className='form-label' for='credit-card'>
                Card Number
              </Label>

              <InputGroup>
                <Controller
                  name='cardNumber'
                  control={control}
                  render={({ field }) => {
                    return (
                      <Cleave
                        {...field}
                        id='cardNumber'
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='1356 3215 6548 7898'
                        className={classnames('form-control', {
                          'is-invalid': errors.cardNumber
                        })}
                        options={{
                          creditCard: true,
                          onCreditCardTypeChanged: type => {
                            setCardType(type)
                          }
                        }}
                      />
                    )
                  }}
                />

                {cardType !== '' && cardType !== 'unknown' ? (
                  <InputGroupText className='p-25'>
                    <span className='add-card-type'>
                      <img height='24' alt='card-type' src={cardsObj[cardType]} />
                    </span>
                  </InputGroupText>
                ) : null}
              </InputGroup>
              {errors.cardNumber && <FormFeedback className='d-block'>Please enter valid card number</FormFeedback>}
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
            <Col className='text-center mt-1' xs={12}>
              <Button type='submit' className='me-1' color='primary'>
                Submit
              </Button>
              <Button
                color='secondary'
                outline
                onClick={() => {
                  setShow(!show)
                  reset()
                }}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default AddCardExample
