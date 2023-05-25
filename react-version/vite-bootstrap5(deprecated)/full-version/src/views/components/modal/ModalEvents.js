// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalEvents = () => {
  // ** States
  const [modalOpened, setModalOpened] = useState(false)
  const [modalClosed, setModalClosed] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='on-opened-modal'>
        <Button color='primary' outline onClick={() => setModalOpened(!modalOpened)}>
          On Opened
        </Button>
        <Modal
          isOpen={modalOpened}
          onOpened={() => alert('On Opened Event Fired')}
          toggle={() => setModalOpened(!modalOpened)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalOpened(!modalOpened)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love dragée candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalOpened(!modalOpened)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='on-closed-modal'>
        <Button color='primary' outline onClick={() => setModalClosed(!modalClosed)}>
          On Closed
        </Button>
        <Modal
          isOpen={modalClosed}
          onClosed={() => alert('On Closed Event Fired')}
          toggle={() => setModalClosed(!modalClosed)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalClosed(!modalClosed)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love dragée candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalClosed(!modalClosed)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default ModalEvents
