// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  subtitle: string
  trendNumber: number
  trend?: 'positive' | 'negative'
}

const data: DataType[] = [
  {
    title: '$8.45k',
    trendNumber: 25.8,
    subtitle: 'United States',
    imgSrc: '/images/cards/us.png'
  },
  {
    title: '$7.78k',
    trend: 'negative',
    trendNumber: 16.2,
    subtitle: 'Brazil',
    imgSrc: '/images/cards/brazil.png'
  },
  {
    title: '$6.48k',
    subtitle: 'India',
    trendNumber: 12.3,
    imgSrc: '/images/cards/india.png'
  },
  {
    title: '$5.12k',
    trend: 'negative',
    trendNumber: 11.9,
    subtitle: 'Australia',
    imgSrc: '/images/cards/australia.png'
  },
  {
    title: '$4.45k',
    subtitle: 'France',
    trendNumber: 16.2,
    imgSrc: '/images/cards/france.png'
  },
  {
    title: '$3.90k',
    subtitle: 'China',
    trendNumber: 14.8,
    imgSrc: '/images/cards/china.png'
  }
]

const CardSalesByCountries = () => {
  return (
    <Card>
      <CardHeader
        title='Sales by Countries'
        subheader='Monthly Sales Overview'
        action={
          <OptionsMenu
            options={['Last Week', 'Last Month', 'Last Year']}
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
                mb: index !== data.length - 1 ? 4.5 : undefined
              }}
            >
              <img width={34} src={item.imgSrc} alt={item.subtitle} />

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
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='body2' sx={{ color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    '& svg': { mr: 1 },
                    alignItems: 'center',
                    '& > *': { color: item.trend === 'negative' ? 'error.main' : 'success.main' }
                  }}
                >
                  <Icon
                    fontSize='1.25rem'
                    icon={item.trend === 'negative' ? 'tabler:chevron-down' : 'tabler:chevron-up'}
                  />
                  <Typography variant='h6'>{`${item.trendNumber}%`}</Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardSalesByCountries
