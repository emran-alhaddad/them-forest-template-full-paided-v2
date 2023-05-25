// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import AvatarGroup from '@mui/material/AvatarGroup'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'

const ProjectAvatar = ({ project }) => {
  const { title, avatar, avatarColor = 'primary' } = project
  if (avatar.length) {
    return <CustomAvatar src={avatar} sx={{ width: 38, height: 38 }} />
  } else {
    return (
      <CustomAvatar skin='light' color={avatarColor} sx={{ width: 38, height: 38 }}>
        {getInitials(title)}
      </CustomAvatar>
    )
  }
}

const Projects = ({ data }) => {
  return (
    <Grid container spacing={6}>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <Card>
                <CardHeader
                  avatar={<ProjectAvatar project={item} />}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    '& .MuiCardHeader-avatar': { mr: 3 }
                  }}
                  subheader={
                    <Typography sx={{ display: 'flex', flexDirectionL: 'column', color: 'text.secondary' }}>
                      <Typography component='span' sx={{ mr: 1, fontWeight: 500 }}>
                        Client:
                      </Typography>{' '}
                      {item.client}
                    </Typography>
                  }
                  action={
                    <OptionsMenu
                      iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
                      options={[
                        'Rename Project',
                        'View Details',
                        'Add to Favorites',
                        { divider: true, dividerProps: { sx: { my: theme => `${theme.spacing(2)} !important` } } },
                        { text: 'Leave Project', menuItemProps: { sx: { color: 'error.main' } } }
                      ]}
                    />
                  }
                  title={
                    <Typography
                      href='/'
                      variant='h5'
                      component={Link}
                      onClick={e => e.preventDefault()}
                      sx={{
                        textDecoration: 'none',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {item.title}
                    </Typography>
                  }
                />
                <CardContent>
                  <Box
                    sx={{
                      mb: 4,
                      gap: 2,
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <CustomChip
                      rounded
                      size='small'
                      skin='light'
                      sx={{ height: 60 }}
                      label={
                        <>
                          <Box sx={{ display: 'flex' }}>
                            <Typography sx={{ fontWeight: 500 }}>{item.budgetSpent}</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{`/${item.budget}`}</Typography>
                          </Box>
                          <Typography sx={{ color: 'text.secondary' }}>Total Budget</Typography>
                        </>
                      }
                    />
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 1, fontWeight: 500 }}>Start Date:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{item.startDate}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ mr: 1, fontWeight: 500 }}>Deadline:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{item.deadline}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                </CardContent>
                <Divider sx={{ my: '0 !important' }} />
                <CardContent>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ mr: 1, fontWeight: 500 }}>All Hours:</Typography>
                      <Typography sx={{ color: 'text.secondary' }}>{item.hours}</Typography>
                    </Box>
                    <CustomChip
                      rounded
                      size='small'
                      skin='light'
                      color={item.chipColor}
                      label={`${item.daysLeft} days left`}
                    />
                  </Box>
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='body2'>{`Tasks: ${item.completedTask}/${item.totalTask}`}</Typography>
                    <Typography variant='body2'>
                      {`${Math.round((item.completedTask / item.totalTask) * 100)}% Completed`}
                    </Typography>
                  </Box>
                  <LinearProgress
                    color='primary'
                    variant='determinate'
                    sx={{ mb: 3, height: 10 }}
                    value={Math.round((item.completedTask / item.totalTask) * 100)}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AvatarGroup className='pull-up' sx={{ mr: 2 }}>
                        {item.avatarGroup &&
                          item.avatarGroup.map((person, index) => {
                            return (
                              <Tooltip key={index} title={person.name}>
                                <CustomAvatar src={person.avatar} alt={person.name} sx={{ height: 32, width: 32 }} />
                              </Tooltip>
                            )
                          })}
                        <Avatar sx={{ height: 32, width: 32, fontWeight: 500, fontSize: '0.75rem' }}>
                          +{item.members}
                        </Avatar>
                      </AvatarGroup>
                    </Box>
                    <Box
                      href='/'
                      component={Link}
                      onClick={e => e.preventDefault()}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        '& svg': { mr: 1.5, color: 'text.secondary' }
                      }}
                    >
                      <Icon fontSize='1.5rem' icon='tabler:message-dots' />
                      <Typography sx={{ color: 'text.secondary' }}>{item.comments}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default Projects
