// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardText, CardBody, Input, Label, Row, Col } from 'reactstrap'

const InputSizes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Horizontal form label sizing</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          Be sure to use <code>size="sm"</code> or <code>size="lg"</code> with your <code>&lt;Label&gt;</code> or{' '}
          <code>&lt;legend&gt;</code> to correctly follow the size of input size.
        </CardText>
        <Row>
          <Col sm='12'>
            <Row className='mb-1'>
              <Label sm='3' size='lg' className='form-label' for='input-large-horizontal'>
                Large
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-large-horizontal' bsSize='lg' placeholder='Large Input' />
              </Col>
            </Row>
            <Row className='mb-1'>
              <Label sm='3' className='form-label' for='input-default-horizontal'>
                Default
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-default-horizontal' placeholder='Default Input' />
              </Col>
            </Row>
            <Row>
              <Label sm='3' size='sm' className='form-label' for='input-small-horizontal'>
                Small
              </Label>
              <Col sm='9'>
                <Input type='text' id='input-small-horizontal' bsSize='sm' placeholder='Small Input' />
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputSizes
