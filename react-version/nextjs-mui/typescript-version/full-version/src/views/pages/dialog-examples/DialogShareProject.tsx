// ** React Imports
import { Ref, useState, forwardRef, ReactElement, MouseEvent, Fragment } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import ListItem from '@mui/material/ListItem'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Fade, { FadeProps } from '@mui/material/Fade'
import ListItemText from '@mui/material/ListItemText'
import { Theme, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogContent from '@mui/material/DialogContent'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

// ** Custom Component Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomAutocomplete from 'src/@core/components/mui/autocomplete'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs Imports
import themeConfig from 'src/configs/themeConfig'

// ** Hooks Imports
import { useSettings } from 'src/@core/hooks/useSettings'

interface DataType {
  name: string
  email: string
  value: string
  avatar: string
}

interface OptionsType {
  name: string
  avatar: string
}

const Transition = forwardRef(function Transition(
  props: FadeProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Fade ref={ref} {...props} />
})

const data: DataType[] = [
  {
    avatar: '1.png',
    value: 'Can Edit',
    name: 'Lester Palmer',
    email: 'pe@vogeiz.net'
  },
  {
    avatar: '2.png',
    value: 'owner',
    name: 'Mittie Blair',
    email: 'peromak@zukedohik.gov'
  },
  {
    avatar: '3.png',
    value: 'Can Comment',
    name: 'Marvin Wheeler',
    email: 'rumet@jujpejah.net'
  },
  {
    avatar: '4.png',
    value: 'Can View',
    name: 'Nannie Ford',
    email: 'negza@nuv.io'
  },
  {
    avatar: '5.png',
    value: 'Can Edit',
    name: 'Julian Murphy',
    email: 'lunebame@umdomgu.net'
  },
  {
    avatar: '6.png',
    value: 'Can View',
    name: 'Sophie Gilbert',
    email: 'ha@sugit.gov'
  },
  {
    avatar: '7.png',
    value: 'Can Comment',
    name: 'Chris Watkins',
    email: 'zokap@mak.org'
  },
  {
    avatar: '8.png',
    value: 'Can Edit',
    name: 'Adelaide Nichols',
    email: 'ujinomu@jigo.com'
  }
]

const options: OptionsType[] = [
  {
    avatar: '1.png',
    name: 'Chandler Bing'
  },
  {
    avatar: '2.png',
    name: 'Rachel Green'
  },
  {
    avatar: '3.png',
    name: 'Joey Tribbiani'
  },
  {
    avatar: '4.png',
    name: 'Pheobe Buffay'
  },
  {
    avatar: '5.png',
    name: 'Ross Geller'
  },
  {
    avatar: '8.png',
    name: 'Monica Geller'
  }
]

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

const DialogShareProject = () => {
  // ** States
  const [show, setShow] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  // ** Var
  const { direction } = settings

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <CardContent sx={{ textAlign: 'center', '& svg': { mb: 2 } }}>
        <Icon icon='tabler:file-description' fontSize='2rem' />
        <Typography variant='h6' sx={{ mb: 4 }}>
          Share Project
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Elegant Share Project options modal popup example, easy to use in any page.
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
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            py: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <CustomCloseButton onClick={() => setShow(false)}>
            <Icon icon='tabler:x' fontSize='1.25rem' />
          </CustomCloseButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h3' sx={{ mb: 3 }}>
              Share Project
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Share project with a team members</Typography>
          </Box>
          <CustomAutocomplete
            autoHighlight
            sx={{ mb: 6 }}
            id='add-members'
            options={options}
            ListboxComponent={List}
            getOptionLabel={option => option.name || ''}
            renderInput={params => (
              <CustomTextField {...params} label='Add Members' placeholder='Add project members...' />
            )}
            renderOption={(props, option) => (
              <ListItem {...props}>
                <ListItemAvatar>
                  <Avatar src={`/images/avatars/${option.avatar}`} alt={option.name} sx={{ height: 28, width: 28 }} />
                </ListItemAvatar>
                <ListItemText primary={option.name} />
              </ListItem>
            )}
          />
          <Typography variant='h4'>{`${data.length} Members`}</Typography>
          <List
            dense
            sx={{
              mb: 3,
              '& .MuiListItemText-primary': {
                ...theme.typography.body1,
                fontWeight: 500,
                color: 'text.secondary'
              },
              '& .MuiListItemText-secondary': {
                ...theme.typography.body1,
                fontWeight: 500,
                color: 'text.disabled'
              }
            }}
          >
            {data.map(member => {
              return (
                <ListItem key={member.name} sx={{ px: 0, py: 2, display: 'flex', flexWrap: 'wrap' }}>
                  <ListItemAvatar>
                    <Avatar src={`/images/avatars/${member.avatar}`} alt={member.name} sx={{ height: 38, width: 38 }} />
                  </ListItemAvatar>
                  <ListItemText sx={{ m: 0 }} primary={member.name} secondary={member.email} />
                  <ListItemSecondaryAction sx={{ right: 0 }}>
                    {hidden ? (
                      <IconButton
                        size='small'
                        aria-haspopup='true'
                        onClick={handleClick}
                        aria-controls='modal-share-examples'
                      >
                        <Icon icon='tabler:chevron-down' fontSize={20} />
                      </IconButton>
                    ) : (
                      <Fragment>
                        <Button
                          color='secondary'
                          aria-haspopup='true'
                          onClick={handleClick}
                          sx={{ textTransform: 'capitalize' }}
                          aria-controls='modal-share-examples'
                          endIcon={<Icon icon='tabler:chevron-down' fontSize={20} />}
                        >
                          {member.value}
                        </Button>
                      </Fragment>
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              )
            })}
          </List>
          <Box
            sx={{
              rowGap: 2,
              columnGap: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
              <Icon icon='tabler:users' />
              <Typography variant='h6'>{`Public to ${themeConfig.templateName} - Pixinvent`}</Typography>
            </Box>
            <Button variant='contained'>Copy Project Link</Button>
          </Box>
          <Menu
            keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}
            id='modal-share-examples'
            anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
          >
            <MenuItem value='owner' sx={{ fontSize: theme => theme.typography.body2.fontSize }} onClick={handleClose}>
              Owner
            </MenuItem>
            <MenuItem
              value='Can Edit'
              onClick={handleClose}
              sx={{ fontSize: theme => theme.typography.body2.fontSize }}
            >
              Can Edit
            </MenuItem>
            <MenuItem
              value='Can Comment'
              onClick={handleClose}
              sx={{ fontSize: theme => theme.typography.body2.fontSize }}
            >
              Can Comment
            </MenuItem>
            <MenuItem
              value='Can View'
              onClick={handleClose}
              sx={{ fontSize: theme => theme.typography.body2.fontSize }}
            >
              Can View
            </MenuItem>
          </Menu>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

export default DialogShareProject
