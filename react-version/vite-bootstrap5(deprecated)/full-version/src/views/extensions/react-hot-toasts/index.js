// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import ToastBlank from './ToastBlank'
import ToastError from './ToastError'
import ToastEmoji from './ToastEmoji'
import ToastThemed from './ToastThemed'
import ToastCustom from './ToastCustom'
import ToastSuccess from './ToastSuccess'
import ToastPromise from './ToastPromise'
import ToastMultiLine from './ToastMultiLine'
import ToastCustomPosition from './ToastCustomPosition'

// ** Custom Components
import ExtensionsHeader from '@components/extensions-header'

const ReactHotToast = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title='React Hot Toast'
        subTitle='Smoking hot React notifications.'
        link='https://github.com/timolins/react-hot-toast'
      />

      <Row className='match-height'>
        <Col xs={12} sm={6} lg={4}>
          <ToastBlank />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastMultiLine />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastSuccess />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastError />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastPromise />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastEmoji />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastThemed />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastCustom />
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <ToastCustomPosition />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ReactHotToast
