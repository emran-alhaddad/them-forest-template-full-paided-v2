// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

// ** Third Party Components
import Prism from 'prismjs'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Demo Components
import CollapseBasic from './CollapseBasic'
import CollapseHorizontal from './CollapseHorizontal'
import CollapseMultipleTargets from './CollapseMultipleTargets'

// ** Source Code
import { collapseBasic, collapseHorizontal, collapseMultipleTargets } from './CollapseSourceCode'

const Collapse = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Collapse' data={[{ title: 'Components' }, { title: 'Collapse' }]} />
      <Row>
        <Col sm='12'>
          <Card title='Collapse Basic' code={collapseBasic}>
            <CollapseBasic />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Multiple Target' code={collapseMultipleTargets}>
            <CollapseMultipleTargets />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Horizontal' code={collapseHorizontal}>
            <CardText>
              Use props <code>horizontal</code> to create horizontal collapse
            </CardText>
            <CollapseHorizontal />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Collapse
