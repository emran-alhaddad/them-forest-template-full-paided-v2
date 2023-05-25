// ** React Imports
import { Fragment } from 'react'

// ** Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow
} from 'swiper'

// ** Demo Components
import SwiperCube from './3DEffect'
import SwiperRows from './SwiperRows'
import SwiperFade from './SwiperFade'
import SwiperLazy from './SwiperLazyload'
import SwiperGallery from './SwiperGallery'
import SwiperVirtual from './SwiperVirtual'
import SwiperDefault from './SwiperDefault'
import SwiperAutoplay from './SwiperAutoplay'
import SwiperProgress from './SwiperProgress'
import SwiperCoverflow from './SwiperCoverflow'
import SwiperResponsive from './SwiperResponsive'
import SwiperNavigation from './SwiperNavigation'
import SwiperPagination from './SwiperPagination'
import SwiperMultiSlides from './SwiperMultiSlides'
import CenterSlidesStyle1 from './CenteredSlidesStyle1'
import CenterSlidesStyle2 from './CenteredSlidesStyle2'
import ExtensionsHeader from '@components/extensions-header'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/swiper/swiper.scss'

// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

const Slider = () => {
  // ** Hooks
  const [isRtl] = useRTL()

  return (
    <Fragment>
      <ExtensionsHeader
        title='Swiper'
        subTitle='Swiper is the most modern free mobile touch slider'
        link='https://swiperjs.com/'
      />
      <Row>
        <Col sm='12'>
          <SwiperDefault isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperNavigation isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperPagination isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperProgress isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperMultiSlides isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperRows isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <CenterSlidesStyle1 isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <CenterSlidesStyle2 isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperFade isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperCube isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperCoverflow isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperAutoplay isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperGallery isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperLazy isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperResponsive isRtl={isRtl} />
        </Col>
        <Col sm='12'>
          <SwiperVirtual isRtl={isRtl} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Slider
