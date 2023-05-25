// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Third Party Components
import Prism from 'prismjs'

// ** Custom Components
import Card from '@components/card-snippet'
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
import InputGroupBasic from './InputGroupBasic'
import InputGroupSizes from './InputGroupSizes'
import InputGroupMerged from './InputGroupMerged'
import InputGroupButtons from './InputGroupButtons'
import InputCbAndRadio from './InputGroupCbAndRadio'
import InputGroupDropdown from './InputGroupDropdown'

// ** Source Code
import {
  inputGroupBasic,
  inputGroupSizes,
  inputGroupMerged,
  inputGroupCBRadio,
  inputGroupButtons,
  inputGroupDropdowns
} from './InputGroupSourceCode'

const InputGroups = () => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Fragment>
      <Breadcrumbs title='Input Groups' data={[{ title: 'Form Elements' }, { title: 'InputGroups' }]} />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Basic' code={inputGroupBasic}>
            <InputGroupBasic />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Merged' code={inputGroupMerged}>
            <InputGroupMerged />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Sizing' code={inputGroupSizes}>
            <InputGroupSizes />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Checkbox & Radio' code={inputGroupCBRadio}>
            <InputCbAndRadio />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Input Group with Buttons' code={inputGroupButtons}>
            <InputGroupButtons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Input Group Dropdowns' code={inputGroupDropdowns}>
            <InputGroupDropdown />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default InputGroups
