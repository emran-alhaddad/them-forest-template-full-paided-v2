// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  chipText: string
  progress: number
  subtitle: string
  chipColor?: ThemeColor
  progressColor?: ThemeColor
}

const data: DataType[] = [
  {
    progress: 85,
    chipText: '+92k',
    chipColor: 'success',
    title: 'Subscribers Gained',
    subtitle: '1.2k new subscriber'
  },
  {
    progress: 65,
    chipText: '+38k',
    chipColor: 'success',
    progressColor: 'info',
    title: 'Orders Received',
    subtitle: '2.4k new orders'
  }
]

const CardStatisticsSubscribersOrders = () => {
  const renderData = data.map((item: DataType, index: number) => (
    <Box key={index} sx={{ ...(index !== data.length - 1 && { mb: 7 }) }}>
      <Box sx={{ mb: 2, gap: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h6'>{item.title}</Typography>
        <CustomChip rounded size='small' skin='light' color={item.chipColor} label={item.chipText} />
      </Box>
      <Box sx={{ gap: 2, mb: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ color: 'text.secondary' }}>{item.subtitle}</Typography>
        <Typography variant='body2' sx={{ color: 'text.disabled' }}>
          {`${item.progress}%`}
        </Typography>
      </Box>
      <LinearProgress variant='determinate' value={item.progress} color={item.progressColor} sx={{ height: 8 }} />
    </Box>
  ))

  return (
    <Card>
      <CardHeader
        title='Statistics'
        action={
          <OptionsMenu
            options={['Refresh', 'Share', 'Update']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>{renderData}</CardContent>
    </Card>
  )
}

export default CardStatisticsSubscribersOrders
