// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import AddCardExample from './AddCard'
import EditUserExample from './EditUser'
import ReferEarnExample from './ReferEarn'
import CreateAppExample from './CreateApp'
import PricingExample from './PricingModal'
import ShareProjectExample from './ShareProject'
import AddNewAddressExample from './AddNewAddress'
import AuthenticationExample from './Authentication'

const ModalExamples = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Modal Examples' data={[{ title: 'Pages' }, { title: 'Modal Examples' }]} />
      <Row className='match-height'>
        <Col md='4'>
          <ShareProjectExample />
        </Col>
        <Col md='4'>
          <AddCardExample />
        </Col>
        <Col md='4'>
          <PricingExample />
        </Col>
        <Col md='4'>
          <ReferEarnExample />
        </Col>
        <Col md='4'>
          <AddNewAddressExample />
        </Col>
        <Col md='4'>
          <CreateAppExample />
        </Col>
        <Col md='4'>
          <AuthenticationExample />
        </Col>
        <Col md='4'>
          <EditUserExample />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ModalExamples
