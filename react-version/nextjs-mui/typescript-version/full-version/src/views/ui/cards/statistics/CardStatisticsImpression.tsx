// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{ name: 'Income', data: [3350, 3350, 4800, 4800, 2950, 2950, 1800, 1800, 3750, 3750, 5700, 5700] }]

const CardStatisticsImpression = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    stroke: {
      width: 3,
      curve: 'straight'
    },
    colors: [hexToRGBA(theme.palette.error.main, 1)],
    grid: {
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: 15,
        right: 2,
        bottom: 5
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Impression</Typography>
        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
          This Week
        </Typography>
        <ReactApexcharts type='line' height={97} series={series} options={options} />
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant='h4'>26.1k</Typography>
          <Typography variant='body2' sx={{ color: 'error.main' }}>
            -24.5%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsImpression
