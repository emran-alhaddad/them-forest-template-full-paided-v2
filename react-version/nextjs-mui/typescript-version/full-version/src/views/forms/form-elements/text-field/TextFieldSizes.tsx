// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldSizes = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField label='Size' id='size-small' defaultValue='Small' />
      <CustomTextField label='Size' size='medium' id='size-normal' defaultValue='Medium' />
    </form>
  )
}

export default TextFieldSizes
