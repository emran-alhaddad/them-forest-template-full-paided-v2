// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import PageHeader from 'src/@core/components/page-header'

const icons = [
  'tabler:123',
  'tabler:24-hours',
  'tabler:2fa',
  'tabler:360',
  'tabler:360-view',
  'tabler:3d-cube-sphere',
  'tabler:3d-cube-sphere-off',
  'tabler:3d-rotate',
  'tabler:a-b',
  'tabler:a-b-2',
  'tabler:a-b-off',
  'tabler:abacus',
  'tabler:abacus-off',
  'tabler:abc',
  'tabler:access-point',
  'tabler:access-point-off',
  'tabler:accessible',
  'tabler:accessible-off',
  'tabler:activity',
  'tabler:activity-heartbeat',
  'tabler:ad',
  'tabler:ad-2',
  'tabler:ad-off',
  'tabler:address-book',
  'tabler:address-book-off',
  'tabler:adjustments',
  'tabler:adjustments-alt',
  'tabler:adjustments-horizontal',
  'tabler:adjustments-off',
  'tabler:aerial-lift',
  'tabler:affiliate',
  'tabler:air-balloon',
  'tabler:air-conditioning',
  'tabler:air-conditioning-disabled',
  'tabler:alarm',
  'tabler:alarm-minus',
  'tabler:alarm-off',
  'tabler:alarm-plus',
  'tabler:alarm-snooze',
  'tabler:album',
  'tabler:album-off',
  'tabler:alert-circle',
  'tabler:alert-octagon',
  'tabler:alert-triangle',
  'tabler:alien',
  'tabler:align-box-bottom-center',
  'tabler:align-box-bottom-left',
  'tabler:align-box-bottom-right'
]

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Icons = () => {
  const renderIconGrids = () => {
    return icons.map((icon, index) => {
      return (
        <Grid item key={index}>
          <Tooltip arrow title={icon} placement='top'>
            <Card>
              <CardContent sx={{ display: 'flex', p: theme => `${theme.spacing(5)} !important` }}>
                <Icon icon={icon} fontSize='1.625rem' />
              </CardContent>
            </Card>
          </Tooltip>
        </Grid>
      )
    })
  }

  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h4'>
            <LinkStyled href='https://iconify.design/' target='_blank'>
              Iconify Design
            </LinkStyled>
          </Typography>
        }
        subtitle={<Typography sx={{ color: 'text.secondary' }}>Modern unified SVG framework</Typography>}
      />
      <Grid item xs={12}>
        <Grid container spacing={6}>
          {renderIconGrids()}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          target='_blank'
          rel='noreferrer'
          variant='contained'
          component={LinkStyled}
          href='https://icon-sets.iconify.design/'
        >
          View All Icons
        </Button>
      </Grid>
    </Grid>
  )
}

export default Icons
