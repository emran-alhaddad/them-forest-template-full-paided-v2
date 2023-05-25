import { InputGroup, InputGroupText, Row, Col, Input, Label } from 'reactstrap'

const InputGroupCbAndRadio = () => {
  return (
    <Row>
      <Label for='col-cb'>Input Group with Checkbox</Label>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='checkbox' id='exampleCustomCheckbox' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='checkbox' id='exampleCustomCheckbox' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Label for='col-radio'>Input Group with Radio</Label>
      <Col className='mb-md-0 mb-1' md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='radio' name='inputGroupExampleRadio' id='exampleCustomRadio' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
      <Col md='6' sm='12'>
        <InputGroup>
          <InputGroupText>
            <div className='form-check'>
              <Input type='radio' name='inputGroupExampleRadio' id='exampleCustomRadio' />
            </div>
          </InputGroupText>
          <Input type='text' placeholder='Message' />
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupCbAndRadio
