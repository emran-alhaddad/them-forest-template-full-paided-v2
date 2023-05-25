// ** React Imports
import { useState, useEffect, Fragment } from 'react'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components
import PricingFaqs from './PricingFaqs'
import PricingCards from './PricingCards'
import PricingTrial from './PricingTrial'
import PricingHeader from './PricingHeader'

// ** Styles
import '@styles/base/pages/page-pricing.scss'

const Pricing = () => {
  // ** States
  const [data, setData] = useState(null),
    [faq, setFaq] = useState(null),
    [duration, setDuration] = useState('monthly')

  useEffect(() => {
    axios.get('/pricing/data').then(res => {
      const dataArr = [],
        faqArr = []

      Object.entries(res.data).forEach(([key, val]) => {
        if (key !== 'qandA') {
          dataArr.push(val)
          setData([...dataArr])
        } else {
          faqArr.push(val)
          setFaq(faqArr[0])
        }
      })
    })
  }, [])

  return (
    <div id='pricing-table'>
      <PricingHeader duration={duration} setDuration={setDuration} />
      {data !== null && faq !== null ? (
        <Fragment>
          <PricingCards data={data} duration={duration} />
          <PricingTrial />
          <PricingFaqs data={faq} />
        </Fragment>
      ) : null}
    </div>
  )
}

export default Pricing
