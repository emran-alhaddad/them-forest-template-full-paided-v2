// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import SwitchIcons from './SwitchIcons'
import SwitchColors from './SwitchColors'
import SwitchReactstrap from './SwitchBasic'

const Switch = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Switch' data={[{ title: 'Form Elements' }, { title: 'Switch' }]} />
      <Row>
        <Col sm='12'>
          <SwitchReactstrap />
        </Col>
        <Col sm='12'>
          <SwitchColors />
        </Col>
        <Col sm='12'>
          <SwitchIcons />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Switch
