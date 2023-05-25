import { Button, InputGroup, Input, Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

const InputGroupButtons = () => {
  return (
    <Row>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <Input placeholder='Button on right side' />
          <Button color='primary' outline>
            Go
          </Button>
        </InputGroup>
      </Col>
      <Col className='mb-1' md='6' sm='12'>
        <InputGroup>
          <Button color='primary' outline>
            <Search size={12} />
          </Button>
          <Input type='text' placeholder='Button on both sides' />
          <Button color='primary' outline>
            Search !
          </Button>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default InputGroupButtons
