// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Button, Row, Col } from 'reactstrap'

const ButtonBlock = () => {
  return (
    <Fragment>
      <Row>
        <Col className='d-grid mb-1 mb-lg-0' lg={6} md={12}>
          <Button.Ripple color='primary'>Block Level Button</Button.Ripple>
        </Col>
        <Col lg={6} md={12}>
          <Button.Ripple block outline color='primary'>
            Block Level Button
          </Button.Ripple>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ButtonBlock
