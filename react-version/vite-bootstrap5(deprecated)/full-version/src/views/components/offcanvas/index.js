// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Source Code
import { offCanvasPlacement, offCanvasOptions } from './OffCanvasSourceCode'

// ** Demo Components
import OffCanvasOptions from './OffCanvasOptions'
import OffCanvasPlacement from './OffCanvasPlacement'

const OffCanvas = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Offcanvas' data={[{ title: 'Components' }, { title: 'OffCanvas' }]} />
      <Row className='match-height'>
        <Col sm='12'>
          <Card title='Placement' code={offCanvasPlacement}>
            <OffCanvasPlacement />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Options' code={offCanvasOptions}>
            <OffCanvasOptions />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default OffCanvas
