// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import BasicTimeline from './BasicTimeline'
import IconsTimeline from './IconsTimeline'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const Timeline = () => {
  return (
    <Fragment>
      <BreadCrumbs title='Timeline' data={[{ title: 'Components' }, { title: 'Timeline' }]} />
      <Row>
        <Col lg='6'>
          <BasicTimeline />
        </Col>
        <Col lg='6'>
          <IconsTimeline />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Timeline
