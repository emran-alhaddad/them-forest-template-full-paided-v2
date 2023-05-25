export const TimelineCenterJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Switch from '@mui/material/Switch'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TimelineContent from '@mui/lab/TimelineContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomTimelineDot from 'src/@core/components/mui/timeline-dot'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)(({ theme }) => ({
  '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTimelineItem-root': {
      width: '100%',
      '&:before': {
        display: 'none'
      }
    }
  }
}))

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineCenter = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const hiddenMD = useMediaQuery(theme => theme.breakpoints.down('md'))
  const { direction } = settings

  return (
    <Timeline position={hiddenMD ? 'right' : 'alternate'}>
      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='error'>
            <Icon icon='tabler:plane-tilt' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='primary'>
            <Icon icon='tabler:clock' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='warning'>
            <Icon icon='tabler:shopping-cart' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='success'>
            <Icon icon='tabler:file-pencil' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='error'>
            <Icon icon='tabler:server' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Ubuntu Server
            </Typography>
            <CustomChip size='small' skin='light' color='error' label='Inactive' />
          </Box>
          <List dense>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:globe' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='IP Address' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>192.654.8.566</Typography>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:cpu' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='CPU' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>4 Cores</Typography>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:keyframes' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='Memory' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>2 GB</Typography>
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:share' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:refresh' fontSize={20} />
              </IconButton>
            </div>
            <Switch sx={{ mr: -2 }} />
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='success'>
            <Icon icon='tabler:map-pin' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
              <Icon icon='tabler:map-pin' fontSize={20} />
              <span>Location</span>
            </Typography>
            <CustomChip size='small' label='High' skin='light' color='error' />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body2' sx={{ mb: 2, fontWeight: 500 }}>
              Final location for the company celebration.
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?
            </Typography>
          </Box>
          <Divider sx={{ my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:link' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:user' fontSize={20} />
              </IconButton>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Due Date: 15th Jan
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineCenter
`}</code>
  </pre>
)

export const TimelineFilledJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineFilled = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineFilled
`}</code>
  </pre>
)

export const TimelineOutlinedJSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineOutlined = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineOutlined
`}</code>
  </pre>
)

export const TimelineCenterTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Switch from '@mui/material/Switch'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { Theme, styled } from '@mui/material/styles'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TimelineContent from '@mui/lab/TimelineContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomTimelineDot from 'src/@core/components/mui/timeline-dot'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>(({ theme }) => ({
  '& .MuiTimelineItem-root:nth-of-type(even) .MuiTimelineContent-root': {
    textAlign: 'left'
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTimelineItem-root': {
      width: '100%',
      '&:before': {
        display: 'none'
      }
    }
  }
}))

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineCenter = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const hiddenMD = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const { direction } = settings

  return (
    <Timeline position={hiddenMD ? 'right' : 'alternate'}>
      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='error'>
            <Icon icon='tabler:plane-tilt' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='primary'>
            <Icon icon='tabler:clock' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='warning'>
            <Icon icon='tabler:shopping-cart' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='success'>
            <Icon icon='tabler:file-pencil' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='error'>
            <Icon icon='tabler:server' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Ubuntu Server
            </Typography>
            <CustomChip size='small' skin='light' color='error' label='Inactive' />
          </Box>
          <List dense>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:globe' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='IP Address' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>192.654.8.566</Typography>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:cpu' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='CPU' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>4 Cores</Typography>
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:keyframes' fontSize='1.25rem' />
              </ListItemIcon>
              <ListItemText primary='Memory' sx={{ '& .MuiListItemText-primary': { color: 'text.secondary' } }} />
              <Typography variant='body2'>2 GB</Typography>
            </ListItem>
          </List>
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:share' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:refresh' fontSize={20} />
              </IconButton>
            </div>
            <Switch sx={{ mr: -2 }} />
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <CustomTimelineDot skin='light' color='success'>
            <Icon icon='tabler:map-pin' fontSize={20} />
          </CustomTimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='h6' sx={{ mr: 2, display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
              <Icon icon='tabler:map-pin' fontSize={20} />
              <span>Location</span>
            </Typography>
            <CustomChip size='small' label='High' skin='light' color='error' />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='body2' sx={{ mb: 2, fontWeight: 500 }}>
              Final location for the company celebration.
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem?
            </Typography>
          </Box>
          <Divider sx={{ my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:link' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.primary' }}>
                <Icon icon='tabler:user' fontSize={20} />
              </IconButton>
            </Box>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Due Date: 15th Jan
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineCenter
`}</code>
  </pre>
)

export const TimelineFilledTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineFilled = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineFilled
`}</code>
  </pre>
)

export const TimelineOutlinedTSXCode = (
  <pre className='language-jsx'>
    <code className='language-jsx'>{`// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineOutlined = () => {
  // ** Hook & Var
  const { settings } = useSettings()
  const { direction } = settings

  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Get on the flight
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              Wednesday
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <Icon fontSize={20} icon={direction === 'ltr' ? 'tabler:arrow-right' : 'tabler:arrow-left'} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.disabled' }}>
            6:30 AM
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={22} height={22} alt='invoice.pdf' src='/images/icons/file-icons/pdf.png' />
            <Typography variant='body2' sx={{ ml: 2 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Interview Schedule
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              6th October
            </Typography>
          </Box>
          <Typography variant='body2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem.
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', my: theme => {theme.spacing(3)} !important }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Avatar src='/images/avatars/2.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                  Rebecca Godman
                </Typography>
                <Typography variant='caption'>Javascript Developer</Typography>
              </Box>
            </Box>
            <div>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:message' fontSize={20} />
              </IconButton>
              <IconButton sx={{ color: 'text.secondary' }}>
                <Icon icon='tabler:phone-call' fontSize={20} />
              </IconButton>
            </div>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='warning' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: { sm: 'row', xs: 'column' } }}>
            <ImgShoe width={70} height={70} alt='Shoe img' src='/images/misc/shoe.jpeg' />
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography variant='h6' sx={{ mr: 2, mt: { sm: 0, xs: 2 } }}>
                  Sold Puma POPX Blue Color
                </Typography>
                <Typography variant='caption' sx={{ mb: { sm: 0, xs: 2 }, color: 'text.disabled' }}>
                  4th October
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2 }}>
                PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable
                material.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'center' }}>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Customer
              </Typography>
              <Typography variant='caption'>Micheal Scott</Typography>
            </Box>
            <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Price
              </Typography>
              <Typography variant='caption'>375.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                Quantity
              </Typography>
              <Typography variant='caption'>1</Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ mr: 2 }} variant='h6'>
              Design Review
            </Typography>
            <Typography variant='caption' sx={{ color: 'text.disabled' }}>
              4th October
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 2 }}>
            Weekly review of freshly prepared design for our new application.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src='/images/avatars/1.png' sx={{ width: '2rem', height: '2rem', mr: 2 }} />
            <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
              John Doe (Client)
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineOutlined
`}</code>
  </pre>
)
