// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldFormProps = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField required id='form-props-required' label='Required' defaultValue='Hello World' />
      <CustomTextField disabled id='form-props-disabled' label='Disabled' defaultValue='Hello World' />
      <CustomTextField
        type='password'
        label='Password'
        id='form-props-password-input'
        autoComplete='current-password'
      />
      <CustomTextField
        label='Read Only'
        defaultValue='Hello World'
        id='form-props-read-only-input'
        InputProps={{ readOnly: true }}
      />
      <CustomTextField type='number' label='Number' id='form-props-number' InputLabelProps={{ shrink: true }} />
      <CustomTextField
        label='Label'
        placeholder='Placeholder'
        id='form-props-full-width'
        InputLabelProps={{ shrink: true }}
      />
      <CustomTextField id='form-props-search' label='Search field' type='search' />
      <CustomTextField
        label='Helper text'
        id='form-props-helperText'
        defaultValue='Default Value'
        helperText='Some important text'
      />
    </form>
  )
}

export default TextFieldFormProps
