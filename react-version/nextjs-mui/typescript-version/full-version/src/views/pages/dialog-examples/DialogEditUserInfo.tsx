// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { SelectChangeEvent } from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 0,
  right: 0,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const DialogEditUserInfo = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [languages, setLanguages] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof languages>) => {
    const {
      target: { value }
    } = event
    setLanguages(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='tabler:user' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Edit User Info
        </Typography>
        <Typography sx={{ mb: 3 }}>Use this modal to modify the existing user&prime;s current information.</Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={() => setShow(false)}
        TransitionComponent={Transition}
        onBackdropClick={() => setShow(false)}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(8)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Edit User Information
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Updating user details will receive a privacy audit.
            </Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item sm={6} xs={12}>
              <CustomTextField fullWidth defaultValue='Oliver' label='First Name' placeholder='John' />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField fullWidth defaultValue='Queen' label='Last Name' placeholder='Doe' />
            </Grid>
            <Grid item xs={12}>
              <CustomTextField fullWidth defaultValue='oliverQueen' label='Username' placeholder='johnDoe' />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField
                fullWidth
                label='Billing Email'
                placeholder='johnDoe@email.com'
                defaultValue='oliverQueen@email.com'
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField select defaultValue='Status' fullWidth id='status-select' label='Status'>
                <MenuItem value='Status'>Status</MenuItem>
                <MenuItem value='Active'>Active</MenuItem>
                <MenuItem value='Inactive'>Inactive</MenuItem>
                <MenuItem value='Suspended'>Suspended</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField fullWidth label='Tax ID' placeholder='Tax-7490' defaultValue='Tax-8894' />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField fullWidth label='Contact' placeholder='+ 123 456 7890' defaultValue='+1 609 933 4422' />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField
                select
                fullWidth
                label='Language'
                SelectProps={{
                  multiple: true,
                  value: languages,
                  onChange: e => handleChange(e as SelectChangeEvent<typeof languages>),
                  renderValue: selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {(selected as string[]).map(value => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )
                }}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Hindi'>Hindi</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item sm={6} xs={12}>
              <CustomTextField
                select
                fullWidth
                label='Country'
                placeholder='UK'
                id='country-select'
                defaultValue='Select Country'
              >
                <MenuItem value='Select Country'>Select Country</MenuItem>
                <MenuItem value='France'>France</MenuItem>
                <MenuItem value='Russia'>Russia</MenuItem>
                <MenuItem value='China'>China</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='US'>US</MenuItem>
              </CustomTextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label='Make this default shipping address'
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 1 }} onClick={() => setShow(false)}>
            Submit
          </Button>
          <Button variant='tonal' color='secondary' onClick={() => setShow(false)}>
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default DialogEditUserInfo
