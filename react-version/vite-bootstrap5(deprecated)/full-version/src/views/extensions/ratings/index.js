// ** Reactstrap Imports
import { Fragment, useContext } from 'react'

// ** Reactstrap Components
import { Row, Col } from 'reactstrap'

// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Demo Components
import RatingBasic from './RatingBasic'
import RatingSizes from './RatingSizes'
import RatingEvents from './RatingEvents'
import RatingNumbers from './RatingNumbers'
import RatingReadOnly from './RatingReadOnly'
import RatingCustomSvg from './RatingCustomSvg'
import RatingFractional from './RatingFractional'
import RatingControlled from './RatingControlled'

// ** Custom Header
import ExtensionsHeader from '@components/extensions-header'

// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'

const Rating = () => {
  // ** Hooks
  const [isRtl] = useRTL()

  // ** Context
  const themeColors = useContext(ThemeColors)

  return (
    <Fragment>
      <ExtensionsHeader
        title='React Rating'
        subTitle='A rating react component with custom symbols'
        link='https://github.com/dreyescat/react-rating'
      />
      <Row className='match-height'>
        <Col lg={6} xs={12}>
          <RatingBasic dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingReadOnly dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingFractional dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingCustomSvg dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingNumbers dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingEvents dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingControlled dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
        <Col lg={6} xs={12}>
          <RatingSizes dir={isRtl ? 'rtl' : 'ltr'} filledColor={themeColors.colors.warning.main} />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Rating
