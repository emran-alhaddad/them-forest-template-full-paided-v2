export const InputMaskExamplesJSXCode = (<pre className='language-jsx'><code className='language-jsx'>{`// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import MuiInputLabel from '@mui/material/InputLabel'

// ** CleaveJS Imports
import Cleave from 'cleave.js/react'
import 'cleave.js/dist/addons/cleave-phone.us'

const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  lineHeight: 1.154,
  maxWidth: 'max-content',
  marginBottom: theme.spacing(1),
  color: theme.palette.text.primary,
  fontSize: theme.typography.body2.fontSize
}))

const InputMaskExamples = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='credit-card'>Credit Card</InputLabel>
        <Cleave id='credit-card' options={{ creditCard: true }} placeholder='0000 0000 0000 0000' />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='phone-number'>Phone Number</InputLabel>
        <Cleave id='phone-number' placeholder='1 234 567 8900' options={{ phone: true, phoneRegionCode: 'US' }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='date'>Date</InputLabel>
        <Cleave
          id='date'
          placeholder='2001-01-01'
          options={{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='time'>Time</InputLabel>
        <Cleave id='time' placeholder='12:00:00' options={{ time: true, timePattern: ['h', 'm', 's'] }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='numeral'>Numeral</InputLabel>
        <Cleave id='numeral' placeholder='10,000' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='blocks'>Blocks</InputLabel>
        <Cleave id='blocks' placeholder='Blocks [4, 3, 3]' options={{ blocks: [4, 3, 3], uppercase: true }} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='delimiter'>Delimiter</InputLabel>
        <Cleave
          id='delimiter'
          placeholder="Delimiter: '.'"
          options={{ delimiter: '·', blocks: [3, 3, 3], uppercase: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='custom-delimiter'>Custom Delimiters</InputLabel>
        <Cleave
          id='custom-delimiter'
          placeholder="Delimiter: ['.', '.', '-']"
          options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3, 2], uppercase: true }}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <InputLabel htmlFor='prefix'>Prefix</InputLabel>
        <Cleave id='prefix' options={{ prefix: '+63', blocks: [3, 3, 3, 4], uppercase: true }} />
      </Grid>
    </Grid>
  )
}

export default InputMaskExamples
`}</code></pre>) 

