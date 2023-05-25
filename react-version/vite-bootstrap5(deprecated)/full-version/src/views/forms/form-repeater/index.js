// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import RepeatingForm from './RepeatingForm'
import RepeatingFormAnimated from './RepeatingFormAnimated'

// ** Styles
import 'react-slidedown/lib/slidedown.css'

const FormRepeater = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Form Repeater' data={[{ title: 'Form' }, { title: 'Form Repeater' }]} />
      <Row>
        <Col sm={12}>
          <RepeatingForm />
        </Col>
        <Col sm={12}>
          <RepeatingFormAnimated />
        </Col>
      </Row>
    </Fragment>
  )
}

export default FormRepeater
