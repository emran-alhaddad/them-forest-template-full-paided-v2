// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionWithoutArrow = () => {
  // ** State
  const [open, setOpen] = useState('1')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-without-arrow' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi
          bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears
          marshmallow pastry pie.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream
          halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot
          cake. Fruitcake chocolate chupa chups.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread
          marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake dragée caramels. Ice cream
          wafer danish cookie caramels muffin.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon
          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie claw candy canes muffin cupcake candy
          caramels tiramisu.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionWithoutArrow
