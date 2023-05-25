// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Demo Components
import TabsEnd from './TabsEnd'
import TabsBasic from './TabsBasic'
import TabsIcons from './TabsIcons'
import TabsFilled from './TabsFilled'
import TabsCentered from './TabsCentered'
import TabsJustified from './TabsJustified'
import TabsVerticalLeft from './TabsVerticalLeft'
import TabsVerticalRight from './TabsVerticalRight'

// ** Source Code
import {
  tabsEnd,
  tabsBasic,
  tabsFilled,
  tabsCentered,
  tabsJustified,
  tabsVerticalLeft,
  tabsVerticalRight
} from './TabSourceCode'

const Tabs = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs title='Tabs' data={[{ title: 'Components' }, { title: 'Tabs' }]} />
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Basic Tabs' code={tabsBasic}>
            <TabsBasic />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Tabs with icons' code={tabsBasic}>
            <TabsIcons />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Vertical Left Tabs' code={tabsVerticalLeft}>
            <TabsVerticalLeft />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Vertical Right Tabs' code={tabsVerticalRight}>
            <TabsVerticalRight />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Filled' code={tabsFilled}>
            <TabsFilled />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Justified' code={tabsJustified}>
            <TabsJustified />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Centered' code={tabsCentered}>
            <TabsCentered />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='End' code={tabsEnd}>
            <TabsEnd />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Tabs
