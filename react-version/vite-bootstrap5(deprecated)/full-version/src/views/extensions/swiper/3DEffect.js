// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/banner/banner-21.jpg'
import img2 from '@src/assets/images/banner/banner-22.jpg'
import img3 from '@src/assets/images/banner/banner-23.jpg'
import img4 from '@src/assets/images/banner/banner-24.jpg'

const params = {
  effect: 'cube',
  pagination: {
    clickable: true
  },
  cubeEffect: {
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    slideShadows: true
  }
}

const SwiperThreeD = ({ isRtl }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>3D Cube Effect</CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper {...params} dir={isRtl ? 'rtl' : 'ltr'}>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt='swiper 2' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt='swiper 3' className='img-fluid' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 4' className='img-fluid' />
          </SwiperSlide>
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperThreeD
