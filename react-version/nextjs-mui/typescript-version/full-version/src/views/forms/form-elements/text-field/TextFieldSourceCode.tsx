export const TextFieldColorJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldControlledUncontrolledJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
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
`}</code>
  </pre>
)

export const TextFieldIconsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldIcons = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField
        label='With Adornment'
        id='input-with-icon-textfield'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon icon='tabler:user-circle' />
            </InputAdornment>
          )
        }}
      />
      <Box sx={{ display: 'inline-flex' }}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item sx={{ '& svg': { mt: 6, color: 'action.active' } }}>
            <Icon icon='tabler:user-circle' />
          </Grid>
          <Grid item>
            <CustomTextField id='input-with-icon-grid' label='With a grid' />
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}

export default TextFieldIcons
`}</code>
  </pre>
)

export const TextFieldFormPropsJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldInputAdornmentJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldInputAdornment = () => {
  // ** State
  const [values, setValues] = useState({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <CustomTextField
        label='Password'
        value={values.password}
        id='icons-adornment-password'
        onChange={handleChange('password')}
        type={values.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                edge='end'
                onClick={handleClickShowPassword}
                onMouseDown={e => e.preventDefault()}
                aria-label='toggle password visibility'
              >
                <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default TextFieldInputAdornment
`}</code>
  </pre>
)

export const TextFieldCustomJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldCustom = () => {
  return <CustomTextField label='Default' />
}

export default TextFieldCustom
`}</code>
  </pre>
)

export const TextFieldLayoutJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Import
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
`}</code>
  </pre>
)

export const TextFieldSizesJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldValidationJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldVariantJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import TextField from '@mui/material/TextField'

const TextFieldVariant = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <TextField id='outlined-basic' label='Outlined' />
      <TextField id='filled-basic' label='Filled' variant='filled' />
      <TextField id='standard-basic' label='Standard' variant='standard' />
    </form>
  )
}

export default TextFieldVariant
`}</code>
  </pre>
)

export const TextFieldControlledUncontrolledTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldControlledUncontrolled = () => {
  // ** State
  const [name, setName] = useState<string>('Cat in the Hat')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
`}</code>
  </pre>
)

export const TextFieldFormPropsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldCustomTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldCustom = () => {
  return <CustomTextField label='Default' />
}

export default TextFieldCustom
`}</code>
  </pre>
)

export const TextFieldColorTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldInputAdornmentTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** React Imports
import { ChangeEvent, useState } from 'react'

// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

interface State {
  weight: string
  password: string
  showPassword: boolean
}

const TextFieldInputAdornment = () => {
  // ** State
  const [values, setValues] = useState<State>({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <CustomTextField
        label='Password'
        value={values.password}
        id='icons-adornment-password'
        onChange={handleChange('password')}
        type={values.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                edge='end'
                onClick={handleClickShowPassword}
                onMouseDown={e => e.preventDefault()}
                aria-label='toggle password visibility'
              >
                <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default TextFieldInputAdornment
`}</code>
  </pre>
)

export const TextFieldIconsTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

const TextFieldIcons = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <CustomTextField
        label='With Adornment'
        id='input-with-icon-textfield'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon icon='tabler:user-circle' />
            </InputAdornment>
          )
        }}
      />
      <Box sx={{ display: 'inline-flex' }}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item sx={{ '& svg': { mt: 6, color: 'action.active' } }}>
            <Icon icon='tabler:user-circle' />
          </Grid>
          <Grid item>
            <CustomTextField id='input-with-icon-grid' label='With a grid' />
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}

export default TextFieldIcons
`}</code>
  </pre>
)

export const TextFieldLayoutTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Import
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
`}</code>
  </pre>
)

export const TextFieldVariantTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import TextField from '@mui/material/TextField'

const TextFieldVariant = () => {
  return (
    <form className='demo-space-x' noValidate autoComplete='off'>
      <TextField id='outlined-basic' label='Outlined' />
      <TextField id='filled-basic' label='Filled' variant='filled' />
      <TextField id='standard-basic' label='Standard' variant='standard' />
    </form>
  )
}

export default TextFieldVariant
`}</code>
  </pre>
)

export const TextFieldSizesTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)

export const TextFieldValidationTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** Custom Component Import
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
`}</code>
  </pre>
)
