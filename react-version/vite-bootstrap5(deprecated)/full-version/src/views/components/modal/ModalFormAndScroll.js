// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

const ModalForm = () => {
  // ** States
  const [formModal, setFormModal] = useState(false)
  const [firstModal, setFirstModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div>
        <Button color='primary' outline onClick={() => setFormModal(!formModal)}>
          Login Form
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Login Form</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
              <Label className='form-label' for='email'>
                Email:
              </Label>
              <Input type='email' id='email' placeholder='Email Address' />
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='password'>
                Password:
              </Label>
              <Input type='password' id='password' placeholder='Password' />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setFormModal(!formModal)}>
              Login
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setScrollModal(!scrollModal)}>
          Scrolling Long Content
        </Button>
        <Modal isOpen={scrollModal} toggle={() => setScrollModal(!scrollModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setScrollModal(!scrollModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollModal(!scrollModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
          Scrolling Content Inside Modal
        </Button>
        <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
          <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake soufflé halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setFirstModal(!firstModal)}>
          Toggle Between Modals
        </Button>
        <Modal isOpen={firstModal} toggle={() => setFirstModal(!firstModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFirstModal(!firstModal)}>Modal 1 </ModalHeader>
          <ModalBody>Show a second modal and hide this one with the button below.</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setSecondModal(!secondModal)}>
              Open second modal
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={secondModal} toggle={() => setSecondModal(!secondModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setSecondModal(!secondModal)}>Modal 2 </ModalHeader>
          <ModalBody>Hide this modal and show the first with the button below.</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setSecondModal(!secondModal)}>
              Back to first
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalForm
