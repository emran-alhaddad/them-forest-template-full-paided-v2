// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Import
import Icon from 'src/@core/components/icon'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const series = [
  { data: [2000, 2000, 4000, 4000, 3050, 3050, 2050, 2050, 3050, 3050, 4700, 4700, 2750, 2750, 5700, 5700] }
]

const data = [
  {
    title: 'Donates',
    trend: 'negative',
    amount: '$756.26',
    trendDiff: 139.34
  },
  {
    title: 'Podcasts',
    trendDiff: 576.24,
    amount: '$2,207.03'
  }
]

const CrmProjectStatus = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0,
        opacityFrom: 1,
        shadeIntensity: 1,
        stops: [0, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.4,
              color: theme.palette.warning.main
            },
            {
              offset: 100,
              opacity: 0.1,
              color: theme.palette.background.paper
            }
          ]
        ]
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: theme.palette.warning.main
      }
    },
    grid: {
      show: false,
      padding: {
        top: 14,
        right: 5,
        bottom: 22
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        title='Project Status'
        action={
          <OptionsMenu
            options={['Share', 'Refresh', 'Update']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomAvatar skin='light' color='warning' variant='rounded' sx={{ mr: 3, width: 34, height: 34 }}>
            <Icon icon='tabler:currency-dollar' />
          </CustomAvatar>
          <Box
            sx={{
              rowGap: 1,
              columnGap: 4,
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant='h6'>$4,3742</Typography>
              <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                Your Earnings
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 500, color: 'success.main' }}>+10.2%</Typography>
          </Box>
        </Box>
        <ReactApexcharts type='area' height={254} series={series} options={options} />
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              rowGap: 1,
              columnGap: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: index !== data.length - 1 ? 4 : undefined
            }}
          >
            <Typography variant='h6'>{item.title}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mr: 4, color: 'text.secondary' }}>{item.amount}</Typography>
              <Typography sx={{ fontWeight: 500, color: `${item.trend === 'negative' ? 'error' : 'success'}.main` }}>
                {`${item.trend === 'negative' ? '-' : '+'}${item.trendDiff}`}
              </Typography>
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  )
}

export default CrmProjectStatus
