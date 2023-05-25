// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  progress: number
  subtitle: string
  progressColor: ThemeColor
}

const data: DataType[] = [
  {
    progress: 54,
    title: 'Laravel',
    subtitle: 'eCommerce',
    progressColor: 'error',
    imgSrc: '/images/logos/laravel.png'
  },
  {
    progress: 85,
    title: 'Figma',
    subtitle: 'App UI Kit',
    progressColor: 'primary',
    imgSrc: '/images/logos/figma.png'
  },
  {
    progress: 64,
    title: 'VusJs',
    subtitle: 'Calendar App',
    progressColor: 'success',
    imgSrc: '/images/logos/vuejs.png'
  },
  {
    progress: 40,
    title: 'React',
    subtitle: 'Dashboard',
    progressColor: 'info',
    imgSrc: '/images/logos/react.png'
  },
  {
    progress: 17,
    title: 'Bootstrap',
    subtitle: 'Website',
    progressColor: 'primary',
    imgSrc: '/images/logos/bootstrap.png'
  },
  {
    progress: 30,
    title: 'Sketch',
    progressColor: 'warning',
    subtitle: 'Website Design',
    imgSrc: '/images/logos/sketch.png'
  }
]

const CardActiveProjects = () => {
  return (
    <Card>
      <CardHeader
        title='Active Projects'
        subheader='Average 72% completed'
        action={
          <OptionsMenu
            options={['Refresh', 'Update', 'Share']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 4.5 : undefined
              }}
            >
              <img alt={item.title} src={item.imgSrc} width={32} />
              <Box
                sx={{
                  ml: 4,
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
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LinearProgress
                    value={item.progress}
                    variant='determinate'
                    color={item.progressColor}
                    sx={{ mr: 4, height: 8, width: 80 }}
                  />
                  <Typography sx={{ color: 'text.disabled' }}>{`${item.progress}%`}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardActiveProjects
