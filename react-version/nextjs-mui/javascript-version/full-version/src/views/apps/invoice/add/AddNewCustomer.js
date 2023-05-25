// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  company: yup.string().required(),
  contact: yup.string().min(10).max(10).required(),
  address: yup.string().max(120).required()
})

const AddNewCustomer = ({ open, toggle, setSelectedClient, clients, setClients }) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', email: '', company: '', address: '', country: 'USA', contact: '' }
  })

  const onSubmit = data => {
    const { address, company, contact, country, email, name } = data

    const finalData = {
      name,
      country,
      contact,
      company,
      address,
      companyEmail: email
    }
    if (clients !== undefined) {
      setClients([...clients, finalData])
    }
    setSelectedClient(finalData)
    toggle()
    reset({ name: '', email: '', company: '', address: '', country: 'USA', contact: '' })
  }

  const handleDrawerClose = () => {
    toggle()
    reset({ name: '', email: '', company: '', address: '', country: 'USA', contact: '' })
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleDrawerClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
    >
      <Header>
        <Typography variant='h6'>Add New Customer</Typography>
        <IconButton
          size='small'
          onClick={toggle}
          sx={{
            p: '0.375rem',
            borderRadius: 1,
            color: 'text.primary',
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.16)`
            }
          }}
        >
          <Icon icon='tabler:x' fontSize='1.25rem' />
        </IconButton>
      </Header>
      <Box component='form' sx={{ p: theme => theme.spacing(0, 6, 6) }} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='name'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              fullWidth
              label='Name'
              value={value}
              sx={{ mb: 5 }}
              variant='outlined'
              onChange={onChange}
              error={Boolean(errors.name)}
              {...(errors.name && { helperText: errors.name.message })}
            />
          )}
        />
        <Controller
          name='company'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              fullWidth
              value={value}
              sx={{ mb: 5 }}
              label='Company'
              variant='outlined'
              onChange={onChange}
              error={Boolean(errors.company)}
              {...(errors.company && { helperText: errors.company.message })}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              fullWidth
              type='email'
              label='Email'
              value={value}
              sx={{ mb: 5 }}
              variant='outlined'
              onChange={onChange}
              error={Boolean(errors.email)}
              {...(errors.email && { helperText: errors.email.message })}
            />
          )}
        />
        <Controller
          name='address'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              fullWidth
              rows={6}
              multiline
              value={value}
              sx={{ mb: 5 }}
              label='Address'
              variant='outlined'
              onChange={onChange}
              error={Boolean(errors.address)}
              placeholder='1037 Lady Bug  Drive New York'
              {...(errors.address && { helperText: errors.address.message })}
            />
          )}
        />
        <Controller
          name='country'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              select
              fullWidth
              sx={{ mb: 5 }}
              label='Country'
              id='invoice-country'
              error={Boolean(errors.country)}
              {...(errors.country && { helperText: errors.country.message })}
              SelectProps={{
                value: value,
                onChange: e => onChange(e)
              }}
            >
              <MenuItem value='USA'>USA</MenuItem>
              <MenuItem value='UK'>UK</MenuItem>
              <MenuItem value='Russia'>Russia</MenuItem>
              <MenuItem value='Australia'>Australia</MenuItem>
              <MenuItem value='Canada'>Canada</MenuItem>
            </CustomTextField>
          )}
        />
        <Controller
          name='contact'
          control={control}
          rules={{ required: true }}
          render={({ field: { value, onChange } }) => (
            <CustomTextField
              fullWidth
              type='number'
              sx={{ mb: 6 }}
              value={value}
              variant='outlined'
              onChange={onChange}
              label='Contact Number'
              placeholder='763-242-9206'
              error={Boolean(errors.contact)}
              {...(errors.contact && { helperText: errors.contact.message })}
            />
          )}
        />
        <div>
          <Button type='submit' variant='contained' sx={{ mr: 4 }}>
            Add
          </Button>
          <Button variant='tonal' color='secondary' onClick={handleDrawerClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  )
}

export default AddNewCustomer
