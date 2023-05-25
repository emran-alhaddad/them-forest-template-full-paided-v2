// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Third Party Components
import Prism from 'prismjs'

// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

// ** Demo Components
import DropdownFlat from './DropdownFlat'
import DropdownBasic from './DropdownBasic'
import DropdownSplit from './DropdownSplit'
import DropdownSizes from './DropdownSizes'
import DropdownOutline from './DropdownOutline'
import DropdownGradient from './DropdownGradient'
import DropdownDirections from './DropdownDirections'
import DropdownVariations from './DropdownVariations'
import DropdownControlled from './DropdownControlled'
import DropdownUncontrolled from './DropdownUncontrolled'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Source Code
import {
  dropdownFlat,
  dropdownBasic,
  dropdownSizes,
  dropdownSplit,
  dropdownOutline,
  dropdownGradient,
  dropdownDirections,
  dropdownVariations,
  dropdownControlled,
  dropdownUncontrolled
} from './DropdownsSourceCode'

const Dropdowns = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Dropdowns' data={[{ title: 'Components' }, { title: 'Dropdowns' }]} />
      <Row>
        <Col md='6' sm='12'>
          <Card title='Controlled Dropdown' code={dropdownControlled}>
            <CardText>If you want to use controlled dropdown you'll have to manage state for it.</CardText>
            <DropdownControlled />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Uncontrolled Dropdown' code={dropdownUncontrolled}>
            <CardText>With uncontrolled dropdown you won't have to manage state.</CardText>
            <DropdownUncontrolled />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Basic' code={dropdownBasic}>
            <DropdownBasic />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Split' code={dropdownSplit}>
            <CardText className='mb-0'>
              Use class <code>.dropdown-toggle-split</code> and add a split button within your dropdown to create a
              dropdownSplit
            </CardText>
            <DropdownSplit />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Outline' code={dropdownOutline}>
            <CardText className='mb-0'>
              Use <code>.outline</code> attribute with button to create outline dropdown.
            </CardText>
            <DropdownOutline />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Flat' code={dropdownFlat}>
            <CardText className='mb-0'>
              Use class <code>color="flat-*"</code> to create a flat dropdown.
            </CardText>
            <DropdownFlat />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Gradient' code={dropdownGradient}>
            <CardText className='mb-0'>
              Use class <code>btn-gradient-*</code> to create a gradient dropdown.
            </CardText>
            <DropdownGradient />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Sizes' code={dropdownSizes}>
            <CardText className='mb-0'>
              Use class <code>.btn-[lg/sm]</code> to create a small or large dropdown.
            </CardText>
            <DropdownSizes />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Directions' code={dropdownDirections}>
            <CardText className='mb-0'>
              You can use drop from different direction to use drop from <code>bottom right</code> use right prop with
              your dropdown-menu. for drop directions use <code>direction=[up/start/end]</code>
            </CardText>
            <DropdownDirections />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Variations' code={dropdownVariations}>
            <CardText>
              To create a dropdown with groups you can use prop <code>header</code> for the header of groups and for
              separation of group you can use prop <code>divider</code>.
            </CardText>
            <CardText className='mb-0'>
              To create a dropdown with icons use class <code>.dropdown-icon-wrapper</code> with your dropdown.
            </CardText>
            <DropdownVariations />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Dropdowns
