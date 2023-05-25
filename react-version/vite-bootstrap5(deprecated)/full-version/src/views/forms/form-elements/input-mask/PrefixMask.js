// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

const PrefixMask = () => {
  const options = { prefix: '+63', blocks: [3, 3, 3, 4], uppercase: true }
  return (
    <Fragment>
      <Label for='prefix'>Prefix</Label>
      <Cleave className='form-control' options={options} id='prefix' />
    </Fragment>
  )
}

export default PrefixMask
