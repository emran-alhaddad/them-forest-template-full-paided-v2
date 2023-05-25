// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Label, Input, FormFeedback, Row, Col } from 'reactstrap'

const InputState = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Input Validation State</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText>
          Use attribute <code>valid/invalid</code> with input tag to indicate input state.
        </CardText>
        <Row>
          <Col md='6' sm='12' className='mb-md-6 mb-1'>
            <Label className='form-label' for='validState'>
              Valid State
            </Label>
            <Input type='text' id='validState' name='validState' valid />
            <FormFeedback valid>Sweet! That name is available.</FormFeedback>
          </Col>
          <Col md='6' sm='12'>
            <Label className='form-label' for='invalidState'>
              Invalid State
            </Label>
            <Input type='text' id='invalidState' name='invalidState' invalid />
            <FormFeedback>Oh no! That name is already taken.</FormFeedback>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputState
