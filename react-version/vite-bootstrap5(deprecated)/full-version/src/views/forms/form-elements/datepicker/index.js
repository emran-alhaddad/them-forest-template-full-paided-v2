// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from 'reactstrap'

// ** Demo Components
import PickerTime from './PickerTime'
import PickerRange from './PickerRange'
import PickerInline from './PickerInline'
import PickerDefault from './PickerDefault'
import PickerDateTime from './PickerDateTime'
import PickerMultipleDates from './PickerMultipleDates'
import PickerHumanFriendly from './PickerHumanFriendly'
import PickerDisabledRange from './PickerDisabledRange'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const Pickers = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Date & Time Picker' data={[{ title: 'Form Elements' }, { title: 'Date & Time Picker' }]} />
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Flatpickr</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <PickerDefault />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerTime />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerDateTime />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerMultipleDates />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerRange />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerHumanFriendly />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerDisabledRange />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <PickerInline />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}
export default Pickers
