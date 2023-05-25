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
import DividerText from './DividerText'
import DividerIcons from './DividerIcons'
import DividerStyle from './DividerStyle'
import DividerColors from './DividerColors'
import DividerDefault from './DividerDefault'
import DividerPosition from './DividerPosition'

// ** Source Code
import {
  dividerIcon,
  dividerText,
  dividerStyle,
  dividerColors,
  dividerDefault,
  dividerPosition
} from './DividerSourceCode'

const Divider = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <Fragment>
      <BreadCrumbs title='Divider' data={[{ title: 'Components' }, { title: 'Divider' }]} />
      <Row>
        <Col sm='12'>
          <Card title='Default' code={dividerDefault}>
            <CardText>
              You can add a line to divide your section using <code>&lt;hr /&gt;</code> tag.
            </CardText>
            <DividerDefault />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Text' code={dividerText}>
            <CardText>
              Use class <code>.divider</code> as wrapper for <code>.divider-text</code> to create a divider text
            </CardText>
            <DividerText />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Position' code={dividerPosition}>
            <CardText>
              Use class <code>.divider-[start | start-center | end | end-center]</code> with <code>.divider</code> to
              set text position.
            </CardText>
            <DividerPosition />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Colors' code={dividerColors}>
            <CardText>
              Use class <code>.divider-[primary | secondary | success | danger | warnings | info | dark]</code> with{' '}
              <code>.divider</code> to set text position.
            </CardText>
            <DividerColors />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Icons' code={dividerIcon}>
            <DividerIcons />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Style' code={dividerStyle}>
            <CardText>
              use class <code>.divider-[dotted | dashed]</code> to change divider style. solid is default style you
              don't have to add any class for it.
            </CardText>
            <DividerStyle />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Divider
