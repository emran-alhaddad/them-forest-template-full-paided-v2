// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import RadioBasic from './RadioBasic'
import RadioColors from './RadioColors'

const Radio = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Radio' data={[{ title: 'Form Elements' }, { title: 'Radio' }]} />
      <Row>
        <Col sm='12'>
          <RadioBasic />
        </Col>
        <Col sm='12'>
          <RadioColors />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Radio
