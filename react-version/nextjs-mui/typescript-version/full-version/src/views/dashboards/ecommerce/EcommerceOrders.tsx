// ** React Imports
import { Fragment, SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Tab from '@mui/material/Tab'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface TimelineItemData {
  name: string
  address: string
}

type TimelineData = Record<'sender' | 'receiver', TimelineItemData>

type Data = Record<'new' | 'preparing' | 'shipping', TimelineData[]>

const data: Data = {
  new: [
    {
      sender: {
        name: 'Micheal Hughes',
        address: '101 Boulder, California, 933130'
      },
      receiver: {
        name: 'Daisy Coleman',
        address: '939 Orange, California, 910614'
      }
    },
    {
      sender: {
        name: 'Glenn Todd',
        address: '1713 Garnet, California, 939573'
      },
      receiver: {
        name: 'Arthur West',
        address: '156 Blaze, California, 925878'
      }
    }
  ],
  preparing: [
    {
      sender: {
        name: 'Rose Cole',
        address: '61 Unions, California, 922523'
      },
      receiver: {
        name: 'Polly Spencer',
        address: '865 Delta, California, 932830'
      }
    },
    {
      sender: {
        name: 'Jerry Wood',
        address: '37 Marjory, California, 951958'
      },
      receiver: {
        name: 'Sam McCormick',
        address: '926 Reynolds, California, 910279'
      }
    }
  ],
  shipping: [
    {
      sender: {
        name: 'Alex Walton',
        address: '78 Judson, California, 956084'
      },
      receiver: {
        name: 'Eula Griffin',
        address: '56 Bernard, California, 965133'
      }
    },
    {
      sender: {
        name: 'Lula Barton',
        address: '95 Gaylord, California, 991955'
      },
      receiver: {
        name: 'Craig Jacobs',
        address: '73 Sandy, California, 954566'
      }
    }
  ]
}

const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  },
  '& .MuiTimelineDot-root': {
    border: 0,
    padding: 0
  }
})

const EcommerceOrders = () => {
  // ** State
  const [value, setValue] = useState<string>('new')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <CardHeader
        sx={{ pb: 4 }}
        title='Orders'
        subheader='62 deliveries in progress'
        action={
          <OptionsMenu
            options={['Show all orders', 'Share', 'Refresh']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <TabContext value={value}>
        <TabList variant='fullWidth' onChange={handleChange} aria-label='tabs in orders card'>
          <Tab value='new' label='New' />
          <Tab value='preparing' label='Preparing' />
          <Tab value='shipping' label='Shipping' />
        </TabList>
        <TabPanel value={value}>
          {data[value as keyof Data].map((item: TimelineData, index: number) => {
            return (
              <Fragment key={index}>
                <Timeline>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color='success' variant='outlined' sx={{ mt: 0 }}>
                        <Icon fontSize='1.25rem' icon='tabler:circle-check' />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mt: 0, pt: 0, mb: theme => `${theme.spacing(1)} !important` }}>
                      <Typography
                        variant='body2'
                        sx={{
                          mb: 0.5,
                          fontWeight: 500,
                          lineHeight: 'normal',
                          color: 'success.main',
                          textTransform: 'uppercase'
                        }}
                      >
                        Sender
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant='h6'>
                        {item.sender.name}
                      </Typography>
                      <Typography sx={{ color: 'text.disabled' }}>{item.sender.address}</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color='primary' variant='outlined' sx={{ mt: 1.5 }}>
                        <Icon fontSize='1.25rem' icon='tabler:map-pin' />
                      </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent sx={{ mt: 0, pb: 0 }}>
                      <Typography
                        variant='body2'
                        sx={{
                          mb: 0.5,
                          fontWeight: 500,
                          lineHeight: 'normal',
                          color: 'primary.main',
                          textTransform: 'uppercase'
                        }}
                      >
                        Receiver
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} variant='h6'>
                        {item.receiver.name}
                      </Typography>
                      <Typography sx={{ color: 'text.disabled' }}>{item.receiver.address}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
                {index !== data[value as keyof Data].length - 1 && <Divider sx={{ my: 4, borderStyle: 'dashed' }} />}
              </Fragment>
            )
          })}
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default EcommerceOrders
