// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{ data: [77, 55, 23, 43, 77, 55, 89] }]

const CardStatisticsOrder = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      type: 'bar',
      stacked: false,
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.primary.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded',
        startingShape: 'rounded',
        colors: {
          backgroundBarRadius: 5,
          backgroundBarColors: [
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg,
            theme.palette.customColors.trackBg
          ]
        }
      }
    },
    grid: {
      show: false,
      padding: {
        top: 16,
        left: -8,
        right: 0,
        bottom: 16
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1350,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: '20%' }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '30%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Order</Typography>
        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
          Last Week
        </Typography>
        <ReactApexcharts type='bar' height={97} series={series} options={options} />
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h4'>124k</Typography>
          <Typography variant='body2' sx={{ color: 'success.main' }}>
            +12.6%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsOrder
