// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverControlled = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <Fragment>
      <Button color='primary' outline id='controlledPopover'>
        Controlled
      </Button>
      <Popover
        placement='top'
        isOpen={popoverOpen}
        target='controlledPopover'
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverHeader>Controlled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    </Fragment>
  )
}
export default PopoverControlled
