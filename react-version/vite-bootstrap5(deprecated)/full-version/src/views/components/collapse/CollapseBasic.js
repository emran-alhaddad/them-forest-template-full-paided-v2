// ** React Imports
import { useState } from 'react'
// ** Reactstrap Imports
import { Collapse, Button } from 'reactstrap'

// ** Image
import collapseImg from '@src/assets/images/slider/04.jpg'

const CollapseBasic = () => {
  // ** States
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
