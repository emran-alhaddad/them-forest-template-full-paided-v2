// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  progress: number
  percentage: string
  progressColor: ThemeColor
}

const data: DataType[] = [
  {
    progress: 67,
    percentage: '54.4%',
    title: 'Google Chrome',
    progressColor: 'primary',
    imgSrc: '/images/logos/google-chrome.png'
  },
  {
    progress: 40,
    percentage: '14.6%',
    title: 'Apple Safari',
    progressColor: 'success',
    imgSrc: '/images/logos/safari.png'
  },
  {
    progress: 30,
    percentage: '6.1%',
    title: 'Mozilla Firefox',
    progressColor: 'secondary',
    imgSrc: '/images/logos/mozilla-firefox.png'
  },
  {
    progress: 20,
    percentage: '8.0%',
    title: 'Opera Mini',
    progressColor: 'info',
    imgSrc: '/images/logos/opera-mini.png'
  },
  {
    progress: 15,
    percentage: '4.2%',
    progressColor: 'warning',
    title: 'Internet Explorer',
    imgSrc: '/images/logos/internet-explorer.png'
  },
  {
    progress: 15,
    title: 'Brave',
    percentage: '0.3%',
    progressColor: 'error',
    imgSrc: '/images/logos/brave.png'
  }
]

const CrmBrowserStates = () => {
  return (
    <Card>
      <CardHeader
        title='Browser States'
        subheader={`Counter April ${new Date().getFullYear()}`}
        action={
          <OptionsMenu
            options={['Last 28 Days', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                '& img': { mr: 4 },
                alignItems: 'center',
                mb: index !== data.length - 1 ? 8.25 : undefined
              }}
            >
              <img width={28} src={item.imgSrc} alt={item.title} />

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
                <Typography variant='h6'>{item.title}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant='h6' sx={{ mr: 4, color: 'text.secondary' }}>
                    {item.percentage}
                  </Typography>
                  <Box sx={{ display: 'flex', position: 'relative' }}>
                    <CircularProgress
                      size={28}
                      value={100}
                      thickness={5}
                      variant='determinate'
                      sx={{ position: 'absolute', color: theme => theme.palette.customColors.trackBg }}
                    />
                    <CircularProgress
                      size={28}
                      thickness={5}
                      value={item.progress}
                      variant='determinate'
                      color={item.progressColor}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CrmBrowserStates
