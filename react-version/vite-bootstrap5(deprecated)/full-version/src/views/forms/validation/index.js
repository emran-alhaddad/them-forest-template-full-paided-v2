// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import BasicHookForm from './BasicHookForm'
import ValidationSchema from './ValidationSchema'
import AsyncValidationForm from './AsyncValidation'
import ValidationThirdPartyComponents from './ValidationThirdPartyComponents'

const ReactHookForm = () => {
  return (
    <Fragment>
      <Breadcrumbs title='React Hook Form' data={[{ title: 'Form' }, { title: 'React Hook Form' }]} />
      <Row className='match-height'>
        <Col lg='6' md='12'>
          <BasicHookForm />
        </Col>
        <Col lg='6' md='12'>
          <ValidationThirdPartyComponents />
        </Col>
        <Col lg='6' md='12'>
          <ValidationSchema />
        </Col>
        <Col lg='6' md='12'>
          <AsyncValidationForm />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ReactHookForm
