// ** React Imports
import { useState } from 'react'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldControlledUncontrolled = () => {
  // ** State
  const [name, setName] = useState('Cat in the Hat')

  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField value={name} label='Controlled' onChange={handleChange} id='controlled-text-field' />
      <CustomTextField id='uncontrolled-text-field' label='Uncontrolled' defaultValue='foo' />
    </form>
  )
}

export default TextFieldControlledUncontrolled
