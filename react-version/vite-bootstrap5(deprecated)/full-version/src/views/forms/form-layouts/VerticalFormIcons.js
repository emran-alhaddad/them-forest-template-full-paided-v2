// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Input,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  InputGroup,
  InputGroupText
} from 'reactstrap'

// ** Icons Imports
import { User, Mail, Smartphone, Lock } from 'react-feather'

const VerticalFormIcons = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Vertical Form with Icons</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm='12'>
              <Label className='form-label' for='nameVerticalIcons'>
                First Name
              </Label>
              <InputGroup className='input-group-merge mb-1'>
                <InputGroupText>
                  <User size={15} />
                </InputGroupText>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='First Name' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label className='form-label' for='EmailVerticalIcons'>
                Email
              </Label>
              <InputGroup className='input-group-merge mb-1'>
                <InputGroupText>
                  <Mail size={15} />
                </InputGroupText>
                <Input type='email' name='Email' id='EmailVerticalIcons' placeholder='Email' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label className='form-label' for='IconsMobile'>
                Mobile
              </Label>
              <InputGroup className='input-group-merge mb-1'>
                <InputGroupText>
                  <Smartphone size={15} />
                </InputGroupText>
                <Input type='number' name='mobile' id='IconsMobile' placeholder='Mobile' />
              </InputGroup>
            </Col>
            <Col sm='12'>
              <Label className='form-label' for='IconsPassword'>
                Password
              </Label>
              <InputGroup className='input-group-merge mb-1'>
                <InputGroupText>
                  <Lock size={15} />
                </InputGroupText>
                <Input type='password' name='password' id='IconsPassword' placeholder='Password' />
              </InputGroup>
            </Col>
            <Col sm='12' className='mb-1'>
              <div className='form-check'>
                <Input type='checkbox' id='remember-me-vertical-icons' defaultChecked={false} />
                <Label className='form-check-label' for='remember-me-vertical-icons'>
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
export default VerticalFormIcons
