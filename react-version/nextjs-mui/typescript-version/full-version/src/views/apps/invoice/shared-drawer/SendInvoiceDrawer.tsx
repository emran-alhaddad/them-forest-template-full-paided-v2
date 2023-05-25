// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomTextField from 'src/@core/components/mui/text-field'

interface Props {
  open: boolean
  toggle: () => void
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(6),
  justifyContent: 'space-between'
}))

const SendInvoiceDrawer = ({ open, toggle }: Props) => {
  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={toggle}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
      ModalProps={{ keepMounted: true }}
    >
      <Header>
        <Typography variant='h5'>Send Invoice</Typography>
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
      <Box sx={{ p: theme => theme.spacing(0, 6, 6) }}>
        <CustomTextField
          fullWidth
          type='email'
          label='From'
          sx={{ mb: 5 }}
          variant='outlined'
          placeholder='company@email.com'
          defaultValue='shelbyComapny@email.com'
        />
        <CustomTextField
          fullWidth
          label='To'
          type='email'
          sx={{ mb: 5 }}
          variant='outlined'
          placeholder='company@email.com'
          defaultValue='qConsolidated@email.com'
        />
        <CustomTextField
          fullWidth
          label='Subject'
          sx={{ mb: 5 }}
          variant='outlined'
          placeholder='Invoice regarding goods'
          defaultValue='Invoice of purchased Admin Templates'
        />
        <CustomTextField
          rows={10}
          fullWidth
          multiline
          sx={{ mb: 5 }}
          label='Message'
          type='textarea'
          variant='outlined'
          defaultValue={`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`}
        />
        <Box sx={{ mb: 6 }}>
          <CustomChip
            rounded
            size='small'
            skin='light'
            color='primary'
            label='Invoice Attached'
            icon={<Icon icon='tabler:link' fontSize='1.25rem' />}
          />
        </Box>
        <div>
          <Button variant='contained' onClick={toggle} sx={{ mr: 4 }}>
            Send
          </Button>
          <Button variant='tonal' color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  )
}

export default SendInvoiceDrawer
