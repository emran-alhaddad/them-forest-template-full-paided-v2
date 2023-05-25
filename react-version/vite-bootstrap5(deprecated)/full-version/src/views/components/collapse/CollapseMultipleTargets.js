// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Row, Col, Collapse, Button } from 'reactstrap'

// ** Images
import collapseImg1 from '@src/assets/images/slider/06.jpg'
import collapseImg2 from '@src/assets/images/slider/08.jpg'

const CollapseMultipleTargets = () => {
  // ** States
  const [firstCollapse, setFirstCollapse] = useState(false)
  const [secondCollapse, setSecondCollapse] = useState(false)

  const toggleFirstCollapse = () => setFirstCollapse(!firstCollapse)
  const toggleSecondCollapse = () => setSecondCollapse(!secondCollapse)
  const toggleBothCollapses = () => {
    setFirstCollapse(!firstCollapse)
    setSecondCollapse(!secondCollapse)
  }

  return (
    <div>
      <div className='demo-inline-spacing mb-2'>
        <Button color='primary' onClick={toggleFirstCollapse}>
          Toggle First Collapse
        </Button>
        <Button color='primary' onClick={toggleSecondCollapse}>
          Toggle Second Collapse
        </Button>
        <Button color='primary' onClick={toggleBothCollapses}>
          Toggle Both Collapse
        </Button>
      </div>
      <Row>
        <Col lg={6}>
          <Collapse isOpen={firstCollapse}>
            <div className='d-flex p-1 border'>
              <img className='me-2' src={collapseImg1} alt='collapse-img-1' height='125' />
              <span>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
              </span>
            </div>
          </Collapse>
        </Col>
        <Col lg={6}>
          <Collapse isOpen={secondCollapse}>
            <div className='d-flex p-1 border'>
              <img className='me-2' src={collapseImg2} alt='collapse-img-2' height='125' />
              <span>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum.It is a long established fact that a reader
                content.
              </span>
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  )
}

export default CollapseMultipleTargets
