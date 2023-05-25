// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  InputGroup,
  InputGroupText
} from 'reactstrap'

// ** Icons Imports
import { User, Mail, Smartphone, Lock } from 'react-feather'

const HorizontalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Horizontal Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row className='mb-1'>
            <Label sm='3' for='nameIcons'>
              First Name
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupText>
                  <User size={15} />
                </InputGroupText>
                <Input type='text' name='name' id='nameIcons' placeholder='First Name' />
              </InputGroup>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='EmailIcons'>
              Email
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupText>
                  <Mail size={15} />
                </InputGroupText>
                <Input type='email' name='Email' id='EmailIcons' placeholder='Email' />
              </InputGroup>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='mobileIcons'>
              Mobile
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupText>
                  <Smartphone size={15} />
                </InputGroupText>
                <Input type='number' name='mobile' id='mobileIcons' placeholder='Mobile' />
              </InputGroup>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Label sm='3' for='passwordIcons'>
              Password
            </Label>
            <Col sm='9'>
              <InputGroup className='input-group-merge'>
                <InputGroupText>
                  <Lock size={15} />
                </InputGroupText>
                <Input type='password' name='password' id='passwordIcons' placeholder='Password' />
              </InputGroup>
            </Col>
          </Row>

          <Row className='mb-1'>
            <Col md={{ size: 9, offset: 3 }}>
              <div className='form-check'>
                <Input type='checkbox' id='remember-me-icons' defaultChecked={false} />
                <Label for='remember-me-icons'>Remember Me</Label>
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
export default HorizontalFormIcons
