// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

const data = [
  {
    amount: '$999.29',
    title: 'Apple iPhone 13',
    subtitle: 'Item: #FXZ-4567',
    imgSrc: '/images/cards/apple-iPhone-13.png'
  },
  {
    amount: '$72.40',
    title: 'Nike Air Jordan',
    subtitle: 'Item: #FXZ-3456',
    imgSrc: '/images/cards/nike-air-jordan.png'
  },
  {
    amount: '$99.90',
    title: 'Beats Studio 2',
    subtitle: 'Item: #FXZ-9485',
    imgSrc: '/images/cards/beats-studio-2.png'
  },
  {
    amount: '$249.99',
    subtitle: 'Item: #FXZ-2345',
    title: 'Apple Watch Series 7',
    imgSrc: '/images/cards/apple-watch-series-7.png'
  },
  {
    amount: '$79.40',
    title: 'Amazon Echo Dot',
    subtitle: 'Item: #FXZ-8959',
    imgSrc: '/images/cards/amazon-echo-dot.png'
  },
  {
    amount: '$129.48',
    subtitle: 'Item: #FXZ-7892',
    title: 'PlayStation Console',
    imgSrc: '/images/cards/play-station-console.png'
  }
]

const CardPopularProducts = () => {
  return (
    <Card>
      <CardHeader
        title='Popular Products'
        subheader='Total 10.4k Visitors'
        action={
          <OptionsMenu
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
            options={['Price - low to high', 'Price - high to low', 'Best seller']}
          />
        }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                '& img': { mr: 4 },
                alignItems: 'center',
                mb: index !== data.length - 1 ? 4.875 : undefined
              }}
            >
              <img width={46} src={item.imgSrc} alt={item.title} />

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
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary' }}>{item.amount}</Typography>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default CardPopularProducts
