// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import NumberInputSize from './NumberInputSize'
import NumberInputBasic from './NumberInputBasic'
import NumberInputMinMax from './NumberInputMinMax'
import NumberInputFormat from './NumberInputFormat'
import NumberInputColors from './NumberInputColors'
import NumberInputDecimal from './NumberInputDecimal'
import NumberInputControlled from './NumberInputControlled'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'

const NumberInput = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Number Input' data={[{ title: 'Form Elements' }, { title: 'Number Input' }]} />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <NumberInputBasic />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputControlled />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputDecimal />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputMinMax />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputSize />
        </Col>
        <Col md='6' sm='12'>
          <NumberInputFormat />
        </Col>
        <Col xs='12'>
          <NumberInputColors />
        </Col>
      </Row>
    </Fragment>
  )
}
export default NumberInput
