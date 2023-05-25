// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

// ** Source Code
import {
  accordionHover,
  accordionBorder,
  accordionMargin,
  accordionControlled,
  accordionWithoutArrow
} from './AccordionSourceCode'

// ** Demo Components
import AccordionHover from './AccordionHover'
import AccordionBorder from './AccordionBorder'
import AccordionMargin from './AccordionMargin'
import AccordionControlled from './AccordionControlled'
import AccordionUncontrolled from './AccordionUncontrolled'
import AccordionWithoutArrow from './AccordionWithoutArrow'

const Accordion = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Accordions' data={[{ title: 'Components' }, { title: 'Accordions' }]} />
      <Row>
        <Col sm='12'>
          <Card title='Uncontrolled' code={accordionControlled}>
            <CardText>You may want to open one item at a time, for that you can use accordion.</CardText>
            <AccordionUncontrolled />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Controlled' code={accordionControlled}>
            <CardText>Manage a state to control your collapse component.</CardText>
            <AccordionControlled />
          </Card>
        </Col>
        <Col sm='12'>
          <Card code={accordionWithoutArrow} title='Accordion Without Arrow'>
            <CardText>
              Use class <code>.accordion-without-arrow</code> class with <code>&lt;Accordion&gt;</code> for accordion
              without arrow.
            </CardText>
            <AccordionWithoutArrow />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Border' code={accordionBorder}>
            <CardText>
              Use class <code>.accordion-border</code> class with your accordion to create a bordered accordion.
            </CardText>
            <AccordionBorder />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Margin' code={accordionMargin}>
            <CardText>
              Use class <code>.accordion-margin</code> class with your accordion to create a accordion with margin.
            </CardText>
            <AccordionMargin />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Hover' code={accordionHover}>
            <AccordionHover />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Accordion
