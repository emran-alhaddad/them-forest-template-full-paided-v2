// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Types
import { InvoiceType } from 'src/types/apps/invoiceTypes'

// ** Demo Component Imports
import UsersInvoiceListTable from 'src/views/apps/user/view/UsersInvoiceListTable'
import UsersProjectListTable from 'src/views/apps/user/view/UsersProjectListTable'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface Props {
  invoiceData: InvoiceType[]
}

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  '& .MuiTimelineItem-root:before': {
    display: 'none'
  }
})

const UserViewAccount = ({ invoiceData }: Props) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UsersProjectListTable />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader
            title='User Activity Timeline'
            action={
              <OptionsMenu
                options={['Share timeline', 'Suggest edits', 'Report bug']}
                iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
              />
            }
          />
          <CardContent>
            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='warning' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mr: 2 }}>
                      Client Meeting
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                      Today
                    </Typography>
                  </Box>
                  <Typography variant='body2' sx={{ mb: 3 }}>
                    Project meeting with john @10:15am
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt='Avatar' src='/images/avatars/3.png' sx={{ width: 38, height: 38, mr: 3 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                        Leona Watkins (Client)
                      </Typography>
                      <Typography variant='caption'>CEO of Infibeam</Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='primary' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mr: 2 }}>
                      Create a new project for client
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                      2 Days Ago
                    </Typography>
                  </Box>
                  <Typography variant='body2'>Add files to new design folder</Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='info' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ mb: theme => `${theme.spacing(3)} !important` }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mr: 2 }}>
                      Shared 2 New Project Files
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                      6 Days Ago
                    </Typography>
                  </Box>
                  <Typography variant='body2' sx={{ mb: 3 }}>
                    Sent by Mollie Dixon
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 2 } }}>
                    <Box sx={{ mr: 3, display: 'flex', alignItems: 'center', color: 'warning.main' }}>
                      <Icon fontSize='1.25rem' icon='tabler:file-text' />
                      <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                        App Guidelines
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main' }}>
                      <Icon fontSize='1.25rem' icon='tabler:table' />
                      <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.primary' }}>
                        Testing Results
                      </Typography>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='secondary' />
                </TimelineSeparator>
                <TimelineContent>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mr: 2 }}>
                      Project status updated
                    </Typography>
                    <Typography variant='caption' sx={{ color: 'text.disabled' }}>
                      10 Days Ago
                    </Typography>
                  </Box>
                  <Typography variant='body2'>WooCommerce iOS App Completed</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <UsersInvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default UserViewAccount
