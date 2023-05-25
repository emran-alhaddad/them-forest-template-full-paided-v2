// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import TextareaDefault from './TextareaDefault'
import TextareaCounter from './TextareaCounter'
import TextareaFloatingLabel from './TextareaFloatingLabel'

const Textarea = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Textarea' data={[{ title: 'Form Elements' }, { title: 'Textarea' }]} />
      <Row>
        <Col sm='12'>
          <TextareaDefault />
        </Col>
        <Col sm='12'>
          <TextareaFloatingLabel />
        </Col>
        <Col sm='12'>
          <TextareaCounter />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Textarea
