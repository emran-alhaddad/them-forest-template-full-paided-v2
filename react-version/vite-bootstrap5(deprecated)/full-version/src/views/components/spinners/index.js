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
import SpinnerFlex from './SpinnerFlex'
import SpinnerFloat from './SpinnerFloat'
import SpinnerSizes from './SpinnerSizes'
import SpinnerGrow from './SpinnerGrowing'
import SpinnerBorder from './SpinnerBorder'
import SpinnerColors from './SpinnerColors'
import SpinnerButtons from './SpinnerButtons'
import SpinnerGrowColors from './SpinnerGrowingColored'
import SpinnerTextAlignment from './SpinnerTextAlignment'

// ** Source Code
import {
  spinnerFlex,
  spinnerFloat,
  spinnerSizes,
  spinnerBorder,
  spinnerButton,
  spinnerColors,
  spinnerGrowing,
  spinnerGrowColors,
  spinnerTextAlignment
} from './SpinnerSourceCode'

const Spinners = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Spinners' data={[{ title: 'Components' }, { title: 'Spinners' }]} />
      <Row className='match-height'>
        <Col md='6' sm='12'>
          <Card title='Border Spinner' code={spinnerBorder}>
            <CardText>
              Use <code>Spinner</code> tag to create a bordered spinner.
            </CardText>
            <SpinnerBorder />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Colors' code={spinnerColors}>
            <CardText className='mb-0'>
              Use <code>color</code> attribute to create a colored spinner.
            </CardText>
            <SpinnerColors />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Growing Spinner' code={spinnerGrowing}>
            <CardText>
              Use <code>type="grow"</code> with spinner tag to create a growing spinner.
            </CardText>
            <SpinnerGrow />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Colored Growing Spinners' code={spinnerGrowColors}>
            <CardText className='mb-0'>
              Use <code>color</code> and <code>type</code> attribute to create a colored growing spinner.
            </CardText>
            <SpinnerGrowColors />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Flex' code={spinnerFlex}>
            <CardText>
              Use Flexbox utilities to place spinners.Use <code>.d-flex</code> and <code>.justify-content-[side]</code>.
            </CardText>
            <SpinnerFlex />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Float' code={spinnerFloat}>
            <CardText>
              Use <code>.float-[side]</code> with spinner tag to change spinner's position.
            </CardText>
            <SpinnerFloat />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Text Alignment' code={spinnerTextAlignment}>
            <CardText>
              You can also use <code>.text-[side]</code> as a wrapper to spinner tag to change spinner's position.
            </CardText>
            <SpinnerTextAlignment />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Sizes' code={spinnerSizes}>
            <CardText className='mb-0'>
              Use prop <code>size="sm"</code> for Small spinner or use <code>style</code> prop for custom size.
            </CardText>
            <SpinnerSizes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Buttons' code={spinnerButton}>
            <SpinnerButtons />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Spinners
