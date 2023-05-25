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
import { Plus, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Card Images
import visaIcon from '@src/assets/images/icons/payments/visa.png'
import jcbCC from '@src/assets/images/icons/payments/jcb-cc.png'
import amexCC from '@src/assets/images/icons/payments/amex-cc.png'
import uatpCC from '@src/assets/images/icons/payments/uatp-cc.png'
import visaCC from '@src/assets/images/icons/payments/visa-cc.png'
import dinersCC from '@src/assets/images/icons/payments/diners-cc.png'
import maestroCC from '@src/assets/images/icons/payments/maestro-cc.png'
import discoverCC from '@src/assets/images/icons/payments/discover-cc.png'
import mastercardIcon from '@src/assets/images/icons/payments/mastercard.png'
import americanExIcon from '@src/assets/images/icons/payments/american-ex.png'
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
  },
  {
    cardCvc: '3845',
    expiryDate: '08/20',
    badgeColor: 'error',
    cardStatus: 'Expired',
    name: 'Lester Jennings',
    imgAlt: 'American Express card',
    cardNumber: '3700 000000 00002',
    imgSrc: americanExIcon
  }
]

const PaymentMethods = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [cardType, setCardType] = useState('')
  const [selected, setSelected] = useState(null)

  // ** Hooks
  const {
    reset,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({ cardNumber: '' })

  const selectedCondition = selected !== null

  const openEditModal = card => {
    setValue('cardNumber', card.cardNumber)
    setSelected(card)
    setShow(true)
  }

  const openAddModal = () => {
    setSelected(null)
    setShow(true)
  }

  const onSubmit = data => {
    if (data.cardNumber && data.cardNumber.length > 0) {
      setShow(show)
    } else {
      setError('cardNumber', {
        type: 'manual'
      })
    }
  }

  const onModalClosed = () => {
    reset()
    setCardType('')
    setSelected(null)
    setShow(false)
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Payment Methods</CardTitle>
          <Button color='primary' size='sm' onClick={openAddModal}>
            <Plus className='me-50' size={14} />
            <span>Add Card</span>
          </Button>
        </CardHeader>
        <CardBody>
          <div className='added-cards'>
            {data.map((card, index) => {
              const isLastCard = index === data.length - 1
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
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered' onClosed={onModalClosed}>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <h1 className='text-center mb-1'>{selectedCondition ? 'Edit' : 'Add New'} Card</h1>
          <p className='text-center'>
            {selectedCondition ? 'Edit your saved card details' : 'Add card for future billing'}
          </p>
          <Row tag={Form} className='gy-1 gx-2 mt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Label className='form-label' for='credit-card'>
                Card Number
              </Label>
              <InputGroup className='input-group-merge'>
                <Controller
                  name='cardNumber'
                  control={control}
                  render={({ field }) => (
                    <Cleave
                      {...field}
                      id='credit-card'
                      placeholder='1356 3215 6548 7898'
                      className={classnames('form-control', { 'is-invalid': errors.cardNumber })}
                      options={{
                        creditCard: true,
                        onCreditCardTypeChanged: type => {
                          setCardType(type)
                        }
                      }}
                    />
                  )}
                />
                {cardType !== '' && cardType !== 'unknown' ? (
                  <InputGroupText className='cursor-pointer p-25'>
                    <img height='24' alt='card-type' src={cardsObj[cardType]} />
                  </InputGroupText>
                ) : null}
              </InputGroup>
              {errors.cardNumber && <FormFeedback className='d-block'>Please enter a valid card number</FormFeedback>}
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
                  <Label className='fw-bolder ms-1' for='save-card'>
                    Save Card for future billing?
                  </Label>
                </div>
              </div>
            </Col>
            <Col className='text-center mt-1' xs={12}>
              <Button className='mt-1 me-1' color='primary'>
                Submit
              </Button>
              <Button className='mt-1' color='secondary' outline onClick={onModalClosed}>
                Cancel
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default PaymentMethods
