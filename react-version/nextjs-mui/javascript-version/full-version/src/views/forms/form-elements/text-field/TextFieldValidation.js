// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldValidation = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField error id='validation-error' label='Error' defaultValue='Hello World' />
      <CustomTextField
        error
        label='Error'
        defaultValue='Hello World'
        helperText='Incorrect entry.'
        id='validation-error-helper-text'
      />
    </form>
  )
}

export default TextFieldValidation
