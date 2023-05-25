// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import DndClone from './DndClone'
import DndCards from './DndCards'
import DndHandle from './DndHandle'
import DndMultiple from './DndMultiple'
import DndListGroup from './DndListGroup'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

// ** Styles
import '@styles/react/libs/drag-and-drop/drag-and-drop.scss'

const DragAndDrop = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Sortablejs'
        subTitle='Sortablejs wrapper for React'
        link='https://github.com/SortableJS/react-sortablejs'
      />
      <Row>
        <Col sm='12'>
          <DndCards />
        </Col>
        <Col sm='12'>
          <DndListGroup />
        </Col>
        <Col sm='12'>
          <DndMultiple />
        </Col>
        <Col sm='12'>
          <DndClone />
        </Col>
        <Col sm='12'>
          <DndHandle />
        </Col>
      </Row>
    </Fragment>
  )
}

export default DragAndDrop
