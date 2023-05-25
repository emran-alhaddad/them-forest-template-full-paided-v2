// ** MUI Imports
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
