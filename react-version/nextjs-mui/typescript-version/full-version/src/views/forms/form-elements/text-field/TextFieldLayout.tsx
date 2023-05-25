// ** MUI Import
import Box from '@mui/material/Box'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldLayout = () => {
  return (
    <Box noValidate component='form' autoComplete='off' sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <CustomTextField fullWidth label='Full width' id='outlined-full-width' sx={{ mb: 4 }} />
      <CustomTextField
        label='None'
        sx={{ mr: 4 }}
        id='outlined-margin-none'
        defaultValue='Margin None'
        helperText='Some important text'
      />
      <CustomTextField
        label='Dense'
        margin='dense'
        sx={{ mr: 4 }}
        id='outlined-margin-dense'
        defaultValue='Margin Dense'
        helperText='Some important text'
      />
      <CustomTextField
        label='Normal'
        margin='normal'
        id='outlined-margin-normal'
        defaultValue='Margin Normal'
        helperText='Some important text'
      />
    </Box>
  )
}

export default TextFieldLayout
