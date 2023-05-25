// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import ReactSelect from './SelectReact'
import SelectSizing from './SelectSizing'
import Selectoptions from './SelectOptions'
import SelectReactstrap from './SelectReactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const Select = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Select' data={[{ title: 'Form Elements' }, { title: 'Select' }]} />
      <Row>
        <Col sm='12'>
          <ReactSelect />
        </Col>
        <Col sm='12'>
          <Selectoptions />
        </Col>
        <Col md='6' sm='12'>
          <SelectReactstrap />
        </Col>
        <Col md='6' sm='12'>
          <SelectSizing />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Select
