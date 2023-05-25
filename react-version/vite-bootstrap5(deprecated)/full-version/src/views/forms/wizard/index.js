// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import WizardModern from './WizardModern'
import WizardVertical from './WizardVertical'
import WizardHorizontal from './WizardHorizontal'
import WizardModernVertical from './WizardModernVertical'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs title='Form Wizard' data={[{ title: 'Form' }, { title: 'Form Wizard' }]} />
      <Row>
        <Col sm='12'>
          <WizardHorizontal />
        </Col>
        <Col sm='12'>
          <WizardVertical />
        </Col>
        <Col sm='12'>
          <WizardModern />
        </Col>
        <Col sm='12'>
          <WizardModernVertical />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
