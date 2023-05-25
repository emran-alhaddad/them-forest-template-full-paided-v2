// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import SweetAlertTypes from './SweetAlertTypes'
import SweetAlertBasic from './SweetAlertBasic'
import SweetAlertOptions from './SweetAlertOptions'
import SweetAlertCallback from './SweetAlertCallback'
import SweetAlertPositions from './SweetAlertPositions'
import SweetAlertAnimations from './SweetAlertAnimations'

// ** Styles
import 'animate.css/animate.css'
import '@styles/base/plugins/extensions/ext-component-sweet-alerts.scss'

const SweetAlert = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='Sweet Alerts2'
        subTitle='A React implementation of SweetAlert2'
        link='https://github.com/sweetalert2/sweetalert2-react-content'
      />
      <Row>
        <Col sm='12'>
          <SweetAlertBasic />
        </Col>
        <Col sm='12'>
          <SweetAlertPositions />
        </Col>
        <Col sm='12'>
          <SweetAlertAnimations />
        </Col>
        <Col sm='12'>
          <SweetAlertTypes />
        </Col>
        <Col sm='12'>
          <SweetAlertOptions />
        </Col>
        <Col sm='12'>
          <SweetAlertCallback />
        </Col>
      </Row>
    </Fragment>
  )
}

export default SweetAlert
