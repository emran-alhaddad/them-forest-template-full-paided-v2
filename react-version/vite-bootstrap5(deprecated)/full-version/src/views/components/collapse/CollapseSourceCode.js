export const collapseBasic = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Collapse, Button } from 'reactstrap'

import collapseImg from '@src/assets/images/slider/04.jpg'

const CollapseBasic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Button className='mb-2' color='primary' onClick={toggle}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <div className='d-flex p-1 border'>
          <img className='me-2' src={collapseImg} alt='collapse-img' height='125' />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
          </span>
        </div>
      </Collapse>
    </div>
  )
}

export default CollapseBasic
`}</code>
  </pre>
)

export const collapseMultipleTargets = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Row, Col, Collapse, Button } from 'reactstrap'

import collapseImg1 from '@src/assets/images/slider/06.jpg'
import collapseImg2 from '@src/assets/images/slider/08.jpg'

const CollapseMultipleTargets = () => {
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
`}</code>
  </pre>
)

export const collapseHorizontal = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Collapse, Button } from 'reactstrap'

import collapseImg from '@src/assets/images/slider/08.jpg'

const CollapseHorizontal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Button className='mb-2' color='primary' onClick={toggle}>
        Toggle
      </Button>
      <Collapse horizontal isOpen={isOpen}>
        <div className='p-1 d-flex width-300 border'>
          <img className='me-2' src={collapseImg} alt='collapse-img' height='100' width='100' />
          <div className='flex-grow-1'>
            This is some content from a media component. You can replace this with any content and adjust it as needed.
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default CollapseHorizontal
`}</code>
  </pre>
)
