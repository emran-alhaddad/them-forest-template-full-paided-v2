// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />
})

const CustomCloseButton = styled(IconButton)(({ theme }) => ({
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

const DialogAuthentication = () => {
  // ** States
  const [show, setShow] = useState(false)
  const [authType, setAuthType] = useState('app')
  const [showAuthDialog, setShowAuthDialog] = useState(false)

  // ** Hook
  const { settings } = useSettings()

  // ** Var
  const { direction } = settings

  const handleClose = () => {
    setShow(false)
    setAuthType('app')
  }

  const handleAuthDialogClose = () => {
    if (show) {
      setShow(false)
    }
    setShowAuthDialog(false)
    if (authType !== 'app') {
      setTimeout(() => {
        setAuthType('app')
      }, 250)
    }
  }
  const arrowIcon = direction === 'ltr' ? 'tabler:chevron-right' : 'tabler:chevron-left'

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='tabler:lock' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Two Factor Auth
        </Typography>
        <Typography sx={{ mb: 3 }}>Enhance your application security by enabling two factor authentication.</Typography>
        <Button variant='contained' onClick={() => setShow(true)}>
          Show
        </Button>
      </CardContent>
      <Dialog
        fullWidth
        open={show}
        maxWidth='md'
        scroll='body'
        onClose={handleClose}
        onBackdropClick={handleClose}
        TransitionComponent={Transition}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={handleClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant='h3' sx={{ mb: 3 }}>
                  Select Authentication Method
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  You also need to select a method by which the proxy authenticates to the directory serve.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                onClick={() => setAuthType('app')}
                sx={{
                  py: 4.75,
                  px: 7.2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  border: theme =>
                    `1px solid ${authType === 'app' ? theme.palette.primary.main : theme.palette.divider}`
                }}
              >
                <Box
                  sx={{
                    rowGap: 2,
                    columnGap: 3,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: ['center', 'start'],
                    flexDirection: ['column', 'row']
                  }}
                >
                  <Box sx={{ display: 'flex', ...(authType === 'app' ? { color: 'primary.main' } : {}) }}>
                    <Icon icon='tabler:settings' fontSize={35} />
                  </Box>
                  <div>
                    <Typography variant='h4' sx={{ mb: 2, ...(authType === 'app' ? { color: 'primary.main' } : {}) }}>
                      Authenticator Apps
                    </Typography>
                    <Typography sx={{ ...(authType === 'app' ? { color: 'primary.main' } : {}) }}>
                      Get code from an app like Google Authenticator or Microsoft Authenticator.
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                onClick={() => setAuthType('sms')}
                sx={{
                  py: 4.75,
                  px: 7.2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  border: theme =>
                    `1px solid ${authType === 'sms' ? theme.palette.primary.main : theme.palette.divider}`
                }}
              >
                <Box
                  sx={{
                    rowGap: 2,
                    columnGap: 3,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: ['center', 'start'],
                    flexDirection: ['column', 'row']
                  }}
                >
                  <Box sx={{ display: 'flex', ...(authType === 'sms' ? { color: 'primary.main' } : {}) }}>
                    <Icon icon='tabler:message' fontSize={35} />
                  </Box>
                  <div>
                    <Typography
                      variant='h4'
                      sx={{
                        mb: 2,
                        textTransform: 'uppercase',
                        ...(authType === 'sms' ? { color: 'primary.main' } : {})
                      }}
                    >
                      sms
                    </Typography>
                    <Typography sx={{ ...(authType === 'sms' ? { color: 'primary.main' } : {}) }}>
                      We will send a code via SMS if you need to use your backup login method.
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant='contained'
                endIcon={<Icon icon={arrowIcon} />}
                onClick={() => {
                  setShow(false)
                  setShowAuthDialog(true)
                }}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth='md'
        scroll='body'
        open={showAuthDialog}
        onClose={handleAuthDialogClose}
        TransitionComponent={Transition}
        onBackdropClick={handleAuthDialogClose}
        sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
      >
        <DialogContent
          sx={{
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={handleAuthDialogClose}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              {authType === 'sms' ? (
                <div>
                  <Typography variant='h5'>Verify Your Mobile Number for SMS</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Enter your mobile phone number with country code and we will send you a verification code.
                  </Typography>
                  <CustomTextField
                    fullWidth
                    type='number'
                    sx={{ my: 4 }}
                    label='Mobile Number'
                    placeholder='123 456 7890'
                  />
                  <Grid container spacing={6}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='tonal' color='secondary' onClick={handleAuthDialogClose} sx={{ mr: 4 }}>
                        Cancel
                      </Button>
                      <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <div>
                  <Typography variant='h3' sx={{ mb: 4, textAlign: 'center' }}>
                    Add Authenticator App
                  </Typography>
                  <Typography variant='h5'>Authenticator Apps</Typography>
                  <Typography sx={{ mb: 4, color: 'text.secondary' }}>
                    Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password,
                    scan the QR code. It will generate a 6 digit code for you to enter below.
                  </Typography>

                  <Box sx={{ my: 12, display: 'flex', justifyContent: 'center' }}>
                    <img width={122} height={122} alt='qr-code' src='/images/pages/pixinvent-qr.png' />
                  </Box>

                  <Alert severity='warning' icon={false} sx={{ mb: 4, '& .MuiAlert-message': { overflow: 'hidden' } }}>
                    <AlertTitle sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      ASDLKNASDA9AHS678dGhASD78AB
                    </AlertTitle>
                    If you having trouble using the QR code, select manual entry on your app
                  </Alert>

                  <CustomTextField
                    fullWidth
                    sx={{ mb: 4 }}
                    label='Enter Authentication Code'
                    placeholder='Enter Authentication Code'
                  />
                  <Grid container spacing={6}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant='tonal' color='secondary' onClick={handleAuthDialogClose} sx={{ mr: 4 }}>
                        Cancel
                      </Button>
                      <Button variant='contained' endIcon={<Icon icon={arrowIcon} />} onClick={handleAuthDialogClose}>
                        Continue
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              )}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogAuthentication
