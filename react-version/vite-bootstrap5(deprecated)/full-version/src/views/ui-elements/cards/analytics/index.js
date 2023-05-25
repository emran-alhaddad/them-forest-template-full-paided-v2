// ** React Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import Sales from './Sales'
import Sales2 from './Sales2'
import Revenue from './Revenue'
import Earnings from './Earnings'
import Customers from './Customers'
import AvgSession from './AvgSessions'
import GoalOverview from './GoalOverview'
import ProductOrders from './ProductOrders'
import RevenueReport from './RevenueReport'
import SupportTracker from './SupportTracker'
import SessionByDevice from './SessionByDevice'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsCards = () => {
  // ** Context
  const context = useContext(ThemeColors)
  return (
    <Fragment>
      <Breadcrumbs title='Analytics Cards' data={[{ title: 'Cards' }, { title: 'Analytics Actions' }]} />
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <SupportTracker primary={context.colors.primary.main} danger={context.colors.danger.main} />
        </Col>
        <Col lg='6' sm='12'>
          <AvgSession primary={context.colors.primary.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <RevenueReport primary={context.colors.primary.main} warning={context.colors.warning.main} />
        </Col>
        <Col lg='4' sm='12'>
          <GoalOverview success={context.colors.success.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <Revenue primary={context.colors.primary.main} />
        </Col>
        <Col lg='4' sm='12'>
          <Sales primary={context.colors.primary.main} info={context.colors.info.main} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='8' sm='12'>
          <Row className='match-height'>
            <Col sm='12'>
              <Sales2 primary={context.colors.primary.main} />
            </Col>
            <Col md='6' sm='12'>
              <SessionByDevice
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
            <Col md='6' sm='12'>
              <Customers
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
          </Row>
        </Col>
        <Col lg='4' sm='12'>
          <Row className='match-height'>
            <Col sm='12'>
              <ProductOrders
                primary={context.colors.primary.main}
                warning={context.colors.warning.main}
                danger={context.colors.danger.main}
              />
            </Col>
            <Col sm='12'>
              <Earnings success={context.colors.success.main} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AnalyticsCards
