// ** React Imports
import { Ref, useState, forwardRef, ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import DialogContent from '@mui/material/DialogContent'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const FacebookBtn = styled(IconButton)<IconButtonProps>(({ theme }) => {
  return {
    color: theme.palette.common.white,
    backgroundColor: '#3B5998 !important',
    borderRadius: theme.shape.borderRadius
  }
})

const TwitterBtn = styled(IconButton)<IconButtonProps>(({ theme }) => {
  return {
    margin: theme.spacing(0, 3),
    color: theme.palette.common.white,
    backgroundColor: '#55ACEE !important',
    borderRadius: theme.shape.borderRadius
  }
})

const GoogleBtn = styled(IconButton)<IconButtonProps>(({ theme }) => {
  return {
    color: theme.palette.common.white,
    backgroundColor: '#DB4437 !important',
    borderRadius: theme.shape.borderRadius
  }
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

const DialogReferEarn = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='tabler:gift' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Refer & Earn
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague.
        </Typography>
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
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`],
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Refer & Earn
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Invite your friend to vuexy, if thay sign up, you and your friend will get 30 days free trial
            </Typography>
          </Box>
          <Grid container spacing={6} sx={{ mt: 4, textAlign: 'center' }}>
            <Grid item md={4} xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <CustomAvatar
                  skin='light'
                  color='primary'
                  variant='rounded'
                  sx={{ mb: 4, width: [70, 82], height: [70, 82], '& svg': { fontSize: ['2.2rem', '3.125rem'] } }}
                >
                  <Icon icon='tabler:send' />
                </CustomAvatar>
                <Typography variant='h5' sx={{ mb: 1.5 }}>
                  Send Invitation 🤟🏻
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Send your referral link to your friend</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <CustomAvatar
                  skin='light'
                  color='primary'
                  variant='rounded'
                  sx={{ mb: 4, width: [70, 82], height: [70, 82], '& svg': { fontSize: ['2.2rem', '3.125rem'] } }}
                >
                  <Icon icon='tabler:clipboard' />
                </CustomAvatar>
                <Typography variant='h5' sx={{ mb: 1.5 }}>
                  Registration 👩🏻‍💻
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Let them register to our services</Typography>
              </Box>
            </Grid>
            <Grid item md={4} xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <CustomAvatar
                  skin='light'
                  color='primary'
                  variant='rounded'
                  sx={{ mb: 4, width: [70, 82], height: [70, 82], '& svg': { fontSize: ['2.2rem', '3.125rem'] } }}
                >
                  <Icon icon='tabler:rocket' />
                </CustomAvatar>
                <Typography variant='h5' sx={{ mb: 1.5 }}>
                  Free Trial 🎉
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Your friend will get 30 days free trial</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 8 }} />
          <Box sx={{ mb: 8 }}>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Invite your friends
            </Typography>
            <Box
              sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', flexWrap: { xs: 'wrap', sm: 'nowrap' } }}
            >
              <CustomTextField
                fullWidth
                id='refer-email'
                sx={{ mr: { xs: 0, sm: 4 }, '& .MuiInputLabel-root': { maxWidth: '100%' } }}
                placeholder='johnDoe@email.com'
                label={`Enter your friend’s email address and invite them to join ${themeConfig.templateName} 😍`}
              />
              <Button variant='contained' sx={{ mt: { xs: 2, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
                Send
              </Button>
            </Box>
          </Box>
          <div>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Share the referral link
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexWrap: ['wrap', 'nowrap'],
                justifyContent: ['flex-start', 'initial']
              }}
            >
              <CustomTextField
                fullWidth
                id='refer-social'
                sx={{ pr: 1.25, mr: [0, 4], '& .MuiInputLabel-root': { maxWidth: '100%' } }}
                placeholder='http://referral.link'
                label='You can also copy and send it or share it on your social media. 🥳'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <Button size='small'>Copy Link</Button>
                    </InputAdornment>
                  )
                }}
              />
              <Box sx={{ mt: [2, 0], display: 'flex', alignItems: 'center' }}>
                <FacebookBtn>
                  <Icon icon='tabler:brand-facebook' />
                </FacebookBtn>
                <TwitterBtn>
                  <Icon icon='tabler:brand-twitter' />
                </TwitterBtn>
                <GoogleBtn>
                  <Icon icon='tabler:brand-google' />
                </GoogleBtn>
              </Box>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogReferEarn
