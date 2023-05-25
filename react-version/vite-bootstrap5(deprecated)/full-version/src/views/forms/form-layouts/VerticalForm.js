// ** Reactstrap Imports
import { Row, Col, Form, Card, Label, Input, Button, CardBody, CardTitle, CardHeader } from 'reactstrap'

const VerticalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='nameVertical'>
                First Name
              </Label>
              <Input type='text' name='name' id='nameVertical' placeholder='First Name' />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='EmailVertical'>
                Email
              </Label>
              <Input type='email' name='Email' id='EmailVertical' placeholder='Email' />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='mobileVertical'>
                Mobile
              </Label>
              <Input type='number' name='mobile' id='mobileVertical' placeholder='Mobile' />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='passwordVertical'>
                Password
              </Label>
              <Input type='password' name='password' id='passwordVertical' placeholder='Password' />
            </Col>
            <Col sm='12' className='mb-1'>
              <div className='form-check'>
                <Input type='checkbox' id='remember-me-vertical' defaultChecked={false} />
                <Label className='form-check-label' for='remember-me-vertical'>
                  Remember Me
                </Label>
              </div>
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default VerticalForm
