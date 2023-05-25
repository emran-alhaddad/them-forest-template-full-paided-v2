// ** Third Party Components
import classnames from 'classnames'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardText, Badge, ListGroup, ListGroupItem, Button } from 'reactstrap'

const PricingCards = ({ data, duration, bordered, fullWidth, cols }) => {
  const colsProps = cols ? cols : { md: 4, xs: 12 }

  const renderPricingCards = () => {
    return data.map((item, index) => {
      const monthlyPrice = duration === 'yearly' ? item.yearlyPlan.perMonth : item.monthlyPrice,
        yearlyPrice = duration === 'yearly' ? item.yearlyPlan.totalAnnual : item.monthlyPrice,
        imgClasses = item.title === 'Basic' ? 'mb-2 mt-5' : item.title === 'Standard' ? 'mb-1' : 'mb-2'

      return (
        <Col key={index} {...colsProps}>
          <Card
            className={classnames('text-center', {
              border: bordered,
              'shadow-none': bordered,
              popular: item.popular === true,
              'border-primary': bordered && item.popular === true,
              [`${item.title.toLowerCase()}-pricing`]: item.title
            })}
          >
            <CardBody>
              {item.popular === true ? (
                <div className='pricing-badge text-end'>
                  <Badge color='light-primary' pill>
                    Popular
                  </Badge>
                </div>
              ) : null}
              <img className={imgClasses} src={item.img} alt='pricing svg' />
              <h3>{item.title}</h3>
              <CardText>{item.subtitle}</CardText>
              <div className='annual-plan'>
                <div className='plan-price mt-2'>
                  <sup className='font-medium-1 fw-bold text-primary me-25'>$</sup>
                  <span className={`pricing-${item.title.toLowerCase()}-value fw-bolder text-primary`}>
                    {monthlyPrice}
                  </span>
                  <span className='pricing-duration text-body font-medium-1 fw-bold ms-25'>/month</span>
                </div>
                {item.title !== 'Basic' && duration === 'yearly' ? (
                  <small className='annual-pricing text-muted'>USD {yearlyPrice} / year</small>
                ) : null}
              </div>
              <ListGroup tag='ul' className='list-group-circle text-start mb-2'>
                {item.planBenefits.map((benefit, i) => (
                  <ListGroupItem key={i} tag='li'>
                    {benefit}
                  </ListGroupItem>
                ))}
              </ListGroup>
              <Button block outline={item.title !== 'Standard'} color={item.title === 'Basic' ? 'success' : 'primary'}>
                {item.title === 'Basic' ? 'Your current plan' : 'Upgrade'}
              </Button>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  const defaultCols = {
    sm: { offset: 2, size: 10 },
    lg: { offset: 2, size: 10 }
  }

  return (
    <Row className='pricing-card'>
      <Col {...(!fullWidth ? defaultCols : {})} className={classnames({ 'mx-auto': !fullWidth })}>
        <Row>{renderPricingCards()}</Row>
      </Col>
    </Row>
  )
}

export default PricingCards
