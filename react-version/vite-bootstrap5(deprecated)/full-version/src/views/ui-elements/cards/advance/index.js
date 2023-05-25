// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import CardJob from './CardJob'
import CardChat from './CardChat'
import CardMedal from './CardMedal'
import CardMeetup from './CardMeetup'
import CardPayment from './CardPayment'
import CardProfile from './CardProfile'
import CardBusiness from './CardBusiness'
import CardAppDesign from './CardAppDesign'
import CardUserTimeline from './CardUserTimeline'
import CardBrowserState from './CardBrowserState'
import CardTransactions from './CardTransactions'
import CardEmployeesTasks from './CardEmployeesTask'
import CardCongratulations from './CardCongratulations'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

const Cards = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** Vars
  const trackBgColor = '#e9ecef'
  return (
    <Fragment>
      <Breadcrumbs title='Advanced Cards' data={[{ title: 'Cards' }, { title: 'Advanced Card' }]} />
      <Row className='match-height'>
        <Col md='6' lg='7' sm='12'>
          <CardCongratulations />
        </Col>
        <Col md='6' lg='5' sm='12'>
          <CardMedal />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='4' md='6' sm='12'>
          <CardEmployeesTasks colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardMeetup />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardProfile />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardJob />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardTransactions />
        </Col>
        <Col lg='4' md='6' sm='12'>
          <CardPayment />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8'>
          <CardUserTimeline />
        </Col>
        <Col lg='4' md='6'>
          <CardChat />
        </Col>
        <Col lg='4' md='6'>
          <CardBusiness />
        </Col>
        <Col lg='4' md='6'>
          <CardBrowserState colors={colors} trackBgColor={trackBgColor} />
        </Col>
        <Col lg='4' md='6'>
          <CardAppDesign />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Cards
