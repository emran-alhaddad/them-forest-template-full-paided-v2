// ** React Imports
import { useState } from 'react'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextareaCustom = () => {
  // ** State
  const [value, setValue] = useState('Controlled')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <form noValidate autoComplete='off' className='demo-space-x'>
      <CustomTextField
        multiline
        maxRows={4}
        value={value}
        label='Multiline'
        onChange={handleChange}
        id='textarea-outlined-controlled'
      />
      <CustomTextField multiline id='textarea-outlined' placeholder='Placeholder' label='Multiline Placeholder' />
      <CustomTextField
        rows={4}
        multiline
        label='Multiline'
        defaultValue='Default Value'
        id='textarea-outlined-static'
      />
    </form>
  )
}

export default TextareaCustom
