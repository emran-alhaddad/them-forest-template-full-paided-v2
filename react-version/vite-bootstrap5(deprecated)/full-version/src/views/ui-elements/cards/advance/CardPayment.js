// ** Third Party Components
import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Form, Label, Input, Button, Row, Col } from 'reactstrap'

const CardPayment = () => {
  return (
    <Card className='card-payment'>
      <CardHeader>
        <CardTitle tag='h4'>Pay Amount</CardTitle>
        <CardTitle className='text-primary' tag='h4'>
          $455.60
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form className='form' onSubmit={e => e.preventDefault()}>
          <Row>
            <Col sm='12' className='mb-2'>
              <Label className='form-label' for='payment-card-number'>
                Card Number
              </Label>
              <Cleave
                className='form-control'
                placeholder='2133 3244 4567 8921'
                options={{ creditCard: true }}
                id='payment-card-number'
              />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='payment-expiry'>
                Expiry
              </Label>
              <Cleave
                className='form-control'
                placeholder='MM / YY'
                options={{ date: true, delimiter: '/', datePattern: ['Y', 'm'] }}
                id='payment-expiry'
              />
            </Col>
            <Col sm='6' className='mb-2'>
              <Label className='form-label' for='payment-cvv'>
                CVV / CVC
              </Label>
              <Input type='number' placeholder='123' id='payment-cvv' />
            </Col>
            <Col sm='12' className='mb-2'>
              <Label className='form-label' for='payment-input-name'>
                Input Name
              </Label>
              <Input placeholder='Curtis Stone' id='payment-input-name' />
            </Col>
            <Col className='d-grid' sm='12'>
              <Button color='primary'>Make Payment</Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}

export default CardPayment
