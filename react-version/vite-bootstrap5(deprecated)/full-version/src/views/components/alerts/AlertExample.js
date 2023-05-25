// ** React Imports
import { useState } from 'react'

// ** Icons Imports
import { AlertCircle } from 'react-feather'

// ** Reactstrap Imports
import { Alert, Label, Input } from 'reactstrap'

const AlertExample = () => {
  // ** States
  const [visible, setVisible] = useState(true)
  const [inputTerm, setInputTerm] = useState('')

  const handleInput = e => {
    setInputTerm(e.target.value)

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <div className='demo-spacing-0'>
      <div className='mb-2'>
        <Label className='form-label' htmlFor='numbers'>
          Enter numbers only
        </Label>
        <Input className='w-25 h-25 ps-1' placeholder='0123456789' value={inputTerm} onChange={e => handleInput(e)} />
      </div>
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body'>
          <AlertCircle size={15} />{' '}
          <span className='ms-1'>
            The value is <strong>invalid</strong> you can only enter numbers
          </span>
        </div>
      </Alert>
    </div>
  )
}
export default AlertExample
