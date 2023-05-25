// ** Reactstrap Imports
import { Row, Col, AccordionBody, AccordionItem, AccordionHeader, UncontrolledAccordion } from 'reactstrap'

const PricingFaqs = ({ data }) => {
  return (
    <div className='pricing-faq'>
      <h3 className='text-center'>FAQ's</h3>
      <p className='text-center mb-0'>Let us help answer the most common questions.</p>
      <Row className='mt-75 mb-2'>
        <Col className='mx-auto' sm='12' lg={{ size: 10, offset: 2 }}>
          <UncontrolledAccordion className='accordion-margin mt-2' defaultOpen='0'>
            {data.map((r, index) => {
              return (
                <AccordionItem key={index + 1}>
                  <AccordionHeader tag='h2' targetId={String(index + 1)}>
                    {r.question}
                  </AccordionHeader>
                  <AccordionBody accordionId={String(index + 1)}>{r.ans}</AccordionBody>
                </AccordionItem>
              )
            })}
          </UncontrolledAccordion>
        </Col>
      </Row>
    </div>
  )
}

export default PricingFaqs
