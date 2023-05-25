// ** React Imports
import { useState } from 'react'

// ** Custom Components
import Repeater from '@components/repeater'

// ** Third Party Components
import { X, Plus } from 'react-feather'
import { SlideDown } from 'react-slidedown'

// ** Reactstrap Imports
import { Row, Col, Card, CardHeader, CardBody, CardText, Form, Label, Input, Button } from 'reactstrap'
const RepeatingForm = () => {
  // ** State
  const [count, setCount] = useState(1)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const deleteForm = e => {
    e.preventDefault()
    const slideDownWrapper = e.target.closest('.react-slidedown'),
      form = e.target.closest('form')
    if (slideDownWrapper) {
      slideDownWrapper.remove()
    } else {
      form.remove()
    }
  }

  return (
    <Card>
      <CardHeader>
        <h4 className='card-title'>With Animation</h4>
      </CardHeader>
      <CardBody>
        <CardText>
          Use we're using <code>react-slidedown</code> component for slidedown animation. Refer this{' '}
          <a href='https://github.com/frankwallis/react-slidedown' target='_blank' rel='noopener noreferrer'>
            link
          </a>{' '}
          for more info.
        </CardText>
        <Repeater count={count}>
          {i => {
            const Tag = i === 0 ? 'div' : SlideDown
            return (
              <Tag key={i}>
                <Form>
                  <Row className='justify-content-between align-items-center'>
                    <Col md={4} className='mb-md-0 mb-1'>
                      <Label className='form-label' for={`animation-item-name-${i}`}>
                        Item Name
                      </Label>
                      <Input type='text' id={`animation-item-name-${i}`} placeholder='Vuexy Admin Template' />
                    </Col>
                    <Col md={2} className='mb-md-0 mb-1'>
                      <Label className='form-label' for={`animation-cost-${i}`}>
                        Cost
                      </Label>
                      <Input type='number' id={`animation-cost-${i}`} placeholder='32' />
                    </Col>
                    <Col md={2} className='mb-md-0 mb-1'>
                      <Label className='form-label' for={`animation-quantity-${i}`}>
                        Quantity
                      </Label>
                      <Input type='number' id={`animation-quantity-${i}`} placeholder='1' />
                    </Col>
                    <Col md={2} className='mb-md-0 mb-1'>
                      <Label className='form-label' for={`animation-price-${i}`}>
                        Price
                      </Label>
                      <input
                        readOnly
                        disabled
                        value='$32'
                        placeholder='$32'
                        id={`animation-price-${i}`}
                        className='form-control-plaintext'
                      />
                    </Col>
                    <Col md={2}>
                      <Button color='danger' className='text-nowrap px-1' onClick={deleteForm} outline>
                        <X size={14} className='me-50' />
                        <span>Delete</span>
                      </Button>
                    </Col>
                    <Col sm={12}>
                      <hr />
                    </Col>
                  </Row>
                </Form>
              </Tag>
            )
          }}
        </Repeater>
        <Button className='btn-icon' color='primary' onClick={increaseCount}>
          <Plus size={14} />
          <span className='align-middle ms-25'>Add New</span>
        </Button>
      </CardBody>
    </Card>
  )
}

export default RepeatingForm
