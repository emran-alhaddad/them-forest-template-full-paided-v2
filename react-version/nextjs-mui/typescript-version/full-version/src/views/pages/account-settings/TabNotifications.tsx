// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TableContainer from '@mui/material/TableContainer'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

interface TableDataType {
  type: string
  app: boolean
  email: boolean
  browser: boolean
}

const data: TableDataType[] = [
  {
    app: true,
    email: true,
    browser: true,
    type: 'New for you'
  },
  {
    app: true,
    email: true,
    browser: true,
    type: 'Account activity'
  },
  {
    app: false,
    email: true,
    browser: true,
    type: 'A new browser used to sign in'
  },
  {
    app: false,
    email: true,
    browser: false,
    type: 'A new device is linked'
  }
]

const TabNotifications = () => {
  return (
    <Card>
      <CardHeader
        title='Recent Devices'
        titleTypographyProps={{ sx: { mb: 1 } }}
        subheader={
          <Typography sx={{ color: 'text.secondary', display: 'flex' }}>
            We need permission from your browser to show notifications.{' '}
            <Typography component='span' sx={{ ml: 1, fontWeight: 500, color: 'text.primary' }}>
              Request Permission
            </Typography>
          </Typography>
        }
      />
      <CardContent>
        <TableContainer sx={{ borderRadius: '6px !important', border: theme => `1px solid ${theme.palette.divider}` }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Browser</TableCell>
                <TableCell align='center'>App</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                '& .MuiTableRow-root:last-child .MuiTableCell-root': { borderBottom: 0 },
                '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' }
              }}
            >
              {data.map(row => (
                <TableRow key={row.type}>
                  <TableCell sx={{ py: '0 !important' }}>
                    <Typography sx={{ whiteSpace: 'nowrap', color: 'text.secondary' }}>{row.type}</Typography>
                  </TableCell>
                  <TableCell align='center' sx={{ py: '0 !important' }}>
                    <Checkbox defaultChecked={row.email} />
                  </TableCell>
                  <TableCell align='center' sx={{ py: '0 !important' }}>
                    <Checkbox defaultChecked={row.browser} />
                  </TableCell>
                  <TableCell align='center' sx={{ py: '0 !important' }}>
                    <Checkbox defaultChecked={row.app} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

      <CardContent>
        <Typography sx={{ mb: 4, color: 'text.secondary' }}>When should we send you notifications?</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomTextField select fullWidth defaultValue='online'>
              <MenuItem value='online'>Only when I'm online</MenuItem>
              <MenuItem value='anytime'>Anytime</MenuItem>
            </CustomTextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ mr: 3 }}>
              Save Changes
            </Button>
            <Button variant='tonal' color='secondary'>
              Discard
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TabNotifications
