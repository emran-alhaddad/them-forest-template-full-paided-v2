// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Collapse, Button } from 'reactstrap'

// ** Images
import collapseImg from '@src/assets/images/slider/08.jpg'

const CollapseHorizontal = () => {
  // ** States
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
