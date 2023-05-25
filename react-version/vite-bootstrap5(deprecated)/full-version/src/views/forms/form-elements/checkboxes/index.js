// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import BasicCheckbox from './CheckboxBasic'
import ColoredCheckbox from './CheckboxColors'

const Checkbox = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Checkbox' data={[{ title: 'Form Elements' }, { title: 'Checkbox' }]} />
      <Row>
        <Col sm='12'>
          <BasicCheckbox />
        </Col>
        <Col sm='12'>
          <ColoredCheckbox />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Checkbox
