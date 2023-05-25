// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'

const HorizontalForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Horizontal Form</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row className='mb-1'>
            <Label sm='3' for='name'>
              First Name
            </Label>
            <Col sm='9'>
              <Input type='text' name='name' id='name' placeholder='First Name' />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='Email'>
              Email
            </Label>
            <Col sm='9'>
              <Input type='email' name='Email' id='Email' placeholder='Email' />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='mobile'>
              Mobile
            </Label>
            <Col sm='9'>
              <Input type='number' name='mobile' id='mobile' placeholder='Mobile' />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='password'>
              Password
            </Label>
            <Col sm='9'>
              <Input type='password' name='password' id='password' placeholder='Password' />
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col sm={{ size: 9, offset: 3 }}>
              <div className='form-check'>
                <Input type='checkbox' id='remember-me' defaultChecked={false} />
                <Label for='remember-me'>Remember Me</Label>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className='d-flex' md={{ size: 9, offset: 3 }}>
              <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                Submit
              </Button>
              <Button outline color='secondary' type='reset'>
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default HorizontalForm
