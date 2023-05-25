// ** React Imports
import { Fragment } from 'react'

// ** Billing Components
import PaymentMethods from './PaymentMethods'
import BillingAddress from './BillingAddress'
import BillingCurrentPlan from './BillingCurrentPlan'

const BillingTab = () => {
  return (
    <Fragment>
      <BillingCurrentPlan />
      <PaymentMethods />
      <BillingAddress />
    </Fragment>
  )
}

export default BillingTab
