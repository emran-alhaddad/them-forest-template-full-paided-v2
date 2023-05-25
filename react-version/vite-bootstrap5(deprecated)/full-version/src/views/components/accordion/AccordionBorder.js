// ** React Imports
import { useState } from 'react'

// ** Reactstrap Imports
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionBorder = () => {
  // ** State
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-border' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Gummi bears toffee soufflé jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer
          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.
          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate
          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Marzipan candy apple pie icing. Sweet roll pudding dragée icing icing cookie pie fruitcake caramels. Bonbon
          candy canes candy canes. Dragée jelly beans chocolate bar dragée biscuit fruitcake gingerbread toffee apple
          pie. Gingerbread donut powder ice cream sesame snaps jelly beans oat cake. Candy wafer pudding dragée gummies.
          Carrot cake macaroon cake sesame snaps caramels.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionBorder
