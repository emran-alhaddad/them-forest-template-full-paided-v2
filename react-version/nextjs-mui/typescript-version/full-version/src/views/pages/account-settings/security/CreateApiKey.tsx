// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'
import CustomTextField from 'src/@core/components/mui/text-field'

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(-6)
  },
  [theme.breakpoints.up('md')]: {
    bottom: 0,
    position: 'absolute'
  }
}))

const CreateApiKeyCard = () => {
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { apiKeyName: '' } })

  const onSubmit = () => {
    return true
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardHeader title='Create an API key' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CustomTextField
                select
                fullWidth
                sx={{ mb: 5 }}
                defaultValue=''
                label='Choose The Api Key Type You Want To Create'
              >
                <MenuItem value='full-control'>Full Control</MenuItem>
                <MenuItem value='modify'>Modify</MenuItem>
                <MenuItem value='read-execute'>Read Execute</MenuItem>
                <MenuItem value='list-folder-contents'>List Folder Contents</MenuItem>
                <MenuItem value='read-only'>Read Only</MenuItem>
                <MenuItem value='read-write'>Read Write</MenuItem>
              </CustomTextField>
              <FormControl fullWidth sx={{ mb: 5 }}>
                <Controller
                  name='apiKeyName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomTextField
                      fullWidth
                      {...field}
                      placeholder='Api Key 1'
                      label='Name The Api Key'
                      error={Boolean(errors.apiKeyName)}
                      {...(errors.apiKeyName && { error: true, helperText: 'Please enter API key name' })}
                    />
                  )}
                />
              </FormControl>
              <Button type='submit' variant='contained' fullWidth>
                Create Key
              </Button>
            </form>
          </Grid>

          <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Img alt='avatar' height={250} src='/images/pages/girl-with-laptop.png' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CreateApiKeyCard
