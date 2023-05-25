export const accordionUncontrolled = (
  <pre>
    <code className='language-jsx'>{`import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionUncontrolled = () => {
  return (
    <UncontrolledAccordion defaultOpen='1'>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          <strong>This is the second item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  )
}

export default AccordionUncontrolled
`}</code>
  </pre>
)

export const accordionControlled = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionBasic = () => {
  const [open, setOpen] = useState('1')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          <strong>This is the first item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          <strong>This is the second item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionBasic`}</code>
  </pre>
)

export const accordionWithoutArrow = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionWithoutArrow = () => {
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
`}</code>
  </pre>
)

export const accordionBorder = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionBorder = () => {
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
          <strong>This is the third item's accordion body.</strong> You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
          <code>&lt;AccordionBody&gt;</code>, though the transition does limit overflow.
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
`}</code>
  </pre>
)

export const accordionMargin = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionMargin = () => {
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion className='accordion-margin' open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon
          muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu.
          Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes
          sugar plum jelly beans tiramisu icing cheesecake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice
          biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi
          bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé
          cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate
          candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert
          gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='4'>Accordion Item 4</AccordionHeader>
        <AccordionBody accordionId='4'>
          Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant.
          Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans
          brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll.
          Tootsie roll sweet cupcake.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}
export default AccordionMargin`}</code>
  </pre>
)

export const accordionHover = (
  <pre>
    <code className='language-jsx'>{`import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const AccordionHover = () => {
  const [open, setOpen] = useState('')

  const toggle = id => {
    open === id ? setOpen() : setOpen(id)
  }

  return (
    <Accordion open={open} toggle={toggle}>
      <AccordionItem onMouseEnter={() => toggle('1')} onMouseLeave={() => toggle('1')}>
        <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        <AccordionBody accordionId='1'>
          Gummi bears toffee soufflé jelly carrot cake pudding sweet roll bear claw. Sweet roll gingerbread wafer
          liquorice cake tiramisu. Gummi bears caramels bonbon icing croissant lollipop topping lollipop danish.
          Marzipan tootsie roll bonbon toffee icing lollipop cotton candy pie gummies. Gingerbread bear claw chocolate
          cake bonbon. Liquorice marzipan cotton candy liquorice tootsie roll macaroon marzipan danish.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('2')} onMouseLeave={() => toggle('2')}>
        <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        <AccordionBody accordionId='2'>
          Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('3')} onMouseLeave={() => toggle('3')}>
        <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        <AccordionBody accordionId='3'>
          Soufflé sugar plum bonbon lemon drops candy canes icing brownie. Dessert tart dessert apple pie. Muffin wafer
          cookie. Soufflé fruitcake lollipop chocolate bar. Muffin gummi bears marzipan sesame snaps gummi bears topping
          toffee. Cupcake bonbon muffin. Cake caramels candy lollipop cheesecake bonbon soufflé apple pie cake.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem onMouseEnter={() => toggle('4')} onMouseLeave={() => toggle('4')}>
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
export default AccordionHover
`}</code>
  </pre>
)
