// ** React Imports
import { Fragment } from 'react'

// ** Demo Components
import CardTitles from './CardTitles'
import CardImages from './CardImages'
import CardLayout from './CardLayout'
import CardNavigation from './CardNavigation'
import CardHeaderFooter from './CardHeaderFooter'
import CardContentTypes from './CardContentTypes'
import CardTextAlignment from './CardTextAlignment'
import CardStyleVariation from './CardStyleVariation'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

const BasicCards = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Basic Cards' data={[{ title: 'Cards' }, { title: 'Basic Cards' }]} />
      <CardTitles />
      <CardContentTypes />
      <CardHeaderFooter />
      <CardTextAlignment />
      <CardNavigation />
      <CardImages />
      <CardStyleVariation />
      <CardLayout />
    </Fragment>
  )
}

export default BasicCards
