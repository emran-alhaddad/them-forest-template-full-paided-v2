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
import AutoCompleteAjax from './AutoCompleteAjax'
import AutoCompleteBasic from './AutoCompleteBasic'
import AutoCompleteRender from './AutoCompleteRender'
import AutoCompleteSections from './AutoCompleteSections'
import AutoCompleteSearchLimit from './AutoCompleteLimit'
import AutoCompleteSuggestions from './AutoCompleteSuggestions'

// ** Source Code
import {
  ajaxExample,
  basicExample,
  sectionExample,
  searchLimitExample,
  customRenderExample,
  defaultSuggestionsExample
} from './AutoCompleteSourceCode'

const AutoComplete = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs title='Auto Complete' data={[{ title: 'Components' }, { title: 'Auto Complete' }]} />
      <Row>
        <Col xl='6' lg='12'>
          <Card title='Basic' code={basicExample}>
            <AutoCompleteBasic />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Sections' code={sectionExample}>
            <AutoCompleteSections />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Ajax' code={ajaxExample}>
            <AutoCompleteAjax />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Custom Render' code={customRenderExample}>
            <AutoCompleteRender />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Default Suggestions' code={defaultSuggestionsExample}>
            <AutoCompleteSuggestions />
          </Card>
        </Col>
        <Col xl='6' lg='12'>
          <Card title='Search Limit' code={searchLimitExample}>
            <AutoCompleteSearchLimit />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default AutoComplete
