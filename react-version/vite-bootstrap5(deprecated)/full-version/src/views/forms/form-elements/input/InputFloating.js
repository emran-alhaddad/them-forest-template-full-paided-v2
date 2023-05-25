// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Row, Col } from 'reactstrap'

const InputFloating = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Floating Label Inputs</CardTitle>
      </CardHeader>

      <CardBody>
        <CardText className='mb-3'>
          For Floating Label Inputs, need to use <code>.form-floating</code> class & add attribute <code>disabled</code>{' '}
          for disabled Floating Label Input.
        </CardText>
        <Row>
          <Col md='6' sm='12'>
            <div className='form-floating'>
              <Input type='text' id='floatingInput' placeholder='Label Placeholder' />
              <label htmlFor='floatingInput'>Label Placeholder</label>
            </div>
          </Col>
          <Col md='6' sm='12'>
            <div className='form-floating'>
              <Input type='text' id='squareInputDisabled' placeholder='Label Placeholder' disabled />
              <label htmlFor='squareInputDisabled'>Label Placeholder</label>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
export default InputFloating
