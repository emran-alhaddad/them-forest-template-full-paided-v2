// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import Cleave from 'cleave.js/react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

const DelimitersMask = () => {
  const options = { delimiter: '·', blocks: [3, 3, 3], uppercase: true }
  return (
    <Fragment>
      <Label for='delimiters'>Delimiters</Label>
      <Cleave className='form-control' placeholder="Delimiter: '.'" options={options} id='delimiters' />
    </Fragment>
  )
}

export default DelimitersMask
