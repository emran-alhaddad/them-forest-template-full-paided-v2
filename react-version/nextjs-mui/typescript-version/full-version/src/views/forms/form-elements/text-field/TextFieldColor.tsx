// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldColor = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField id='color-secondary' label='Secondary' color='secondary' />
      <CustomTextField id='color-success' label='Success' color='success' />
      <CustomTextField id='color-error' label='Error' color='error' />
      <CustomTextField id='color-warning' label='Warning' color='warning' />
      <CustomTextField id='color-info' label='Info' color='info' />
    </form>
  )
}

export default TextFieldColor
