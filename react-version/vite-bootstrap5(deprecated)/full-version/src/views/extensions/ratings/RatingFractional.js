// ** Third Party Components
import Rating from 'react-rating'
import { Star } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const RatingFractional = ({ filledColor, dir }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Fractional</CardTitle>
      </CardHeader>
      <CardBody>
        <Rating
          fractions={2}
          direction={dir}
          initialRating={2.5}
          emptySymbol={<Star size={32} fill='#babfc7' stroke='#babfc7' />}
          fullSymbol={<Star size={32} fill={filledColor} stroke={filledColor} />}
        />
      </CardBody>
    </Card>
  )
}

export default RatingFractional
