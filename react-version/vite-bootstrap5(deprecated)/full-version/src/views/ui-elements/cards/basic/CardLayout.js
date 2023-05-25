// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import CardGroup from './CardGroup'
import GridCards from './GridCards'

const CardLayout = () => {
  return (
    <Fragment>
      <h5 className='mt-3 mb-2'>Card layout</h5>
      <h6 className='my-3 text-muted'>Card Group</h6>
      <CardGroup />
      <h6 className='my-3 text-muted'>Grid Card</h6>
      <GridCards />
    </Fragment>
  )
}

export default CardLayout
