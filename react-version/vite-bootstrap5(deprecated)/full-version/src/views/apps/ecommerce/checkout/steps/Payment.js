// ** Icon Imports
import { PlusCircle } from 'react-feather'

// ** Reactstrap Imports
import { Row, Col, Form, Label, Input, Button, Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const Payment = () => {
  return (
    <Form
      className='list-view product-checkout'
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <div className='payment-type'>
        <Card>
          <CardHeader className='flex-column align-items-start'>
            <CardTitle tag='h4'>Payment options</CardTitle>
            <CardText className='text-muted mt-25'>Be sure to click on correct payment option</CardText>
          </CardHeader>
          <CardBody>
            <h6 className='card-holder-name my-75'>John Doe</h6>
            <div className='form-check mb-2'>
              <Input defaultChecked id='us-card' type='radio' name='paymentMethod' />
              <Label className='form-check-label' htmlFor='us-card'>
                US Unlocked Debit Card 12XX XXXX XXXX 0000
              </Label>
            </div>
            <Row className='customer-cvv mt-1 row-cols-lg-auto'>
              <Col xs={3} className='d-flex align-items-center'>
                <Label className='mb-50' for='card-holder-cvv'>
                  Enter CVV:
                </Label>
              </Col>
              <Col xs={4} className='p-0'>
                <Input className='input-cvv mb-50' id='card-holder-cvv' />
              </Col>
              <Col xs={3}>
                <Button className='btn-cvv mb-50' color='primary'>
                  Continue
                </Button>
              </Col>
            </Row>
            <hr className='my-2' />
            <ul className='other-payment-options list-unstyled'>
              <li className='py-50'>
                <div className='form-check'>
                  <Input type='radio' name='paymentMethod' id='credit-card' />
                  <Label className='form-label' for='credit-card'>
                    Credit / Debit / ATM Card
                  </Label>
                </div>
              </li>
              <li className='py-50'>
                <div className='form-check'>
                  <Input type='radio' name='paymentMethod' id='payment-net-banking' />
                  <Label className='form-label' for='payment-net-banking'>
                    Net Banking
                  </Label>
                </div>
              </li>
              <li className='py-50'>
                <div className='form-check'>
                  <Input type='radio' name='paymentMethod' id='payment-emi' />
                  <Label className='form-label' for='payment-emi'>
                    EMI (Easy Installment)
                  </Label>
                </div>
              </li>
              <li className='py-50'>
                <div className='form-check'>
                  <Input type='radio' name='paymentMethod' id='payment-cod' />
                  <Label className='form-label' for='payment-cod'>
                    Cash On Delivery
                  </Label>
                </div>
              </li>
            </ul>
            <hr className='my-2' />
            <div className='gift-card mb-25'>
              <CardText>
                <PlusCircle className='me-50' size={21} />
                <span className='align-middle'>Add Gift Card</span>
              </CardText>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className='amount-payable checkout-options'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>Price Details</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className='list-unstyled price-details'>
              <li className='price-detail'>
                <div className='details-title'>Price of 3 items</div>
                <div className='detail-amt'>
                  <strong>$699.30</strong>
                </div>
              </li>
              <li className='price-detail'>
                <div className='details-title'>Delivery Charges</div>
                <div className='detail-amt discount-amt text-success'>Free</div>
              </li>
            </ul>
            <hr />
            <ul className='list-unstyled price-details'>
              <li className='price-detail'>
                <div className='details-title'>Amount Payable</div>
                <div className='detail-amt fw-bolder'>$699.30</div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </Form>
  )
}

export default Payment
