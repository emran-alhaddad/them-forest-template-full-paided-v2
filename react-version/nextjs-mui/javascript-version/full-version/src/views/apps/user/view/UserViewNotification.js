// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import Button from '@mui/material/Button'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TableContainer from '@mui/material/TableContainer'

const UserViewNotification = () => {
  return (
    <Card>
      <CardHeader title='Notifications' sx={{ pb: 1.5 }} />

      <CardContent>
        <Typography sx={{ mb: 6, color: 'text.secondary' }}>
          You will receive notification for the below selected items.
        </Typography>
        <TableContainer sx={{ borderRadius: '6px !important', border: theme => `1px solid ${theme.palette.divider}` }}>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Browser</TableCell>
                <TableCell align='center'>App</TableCell>
              </TableRow>
            </TableHead>

            <TableBody sx={{ '& .MuiTableRow-root:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}>
              <TableRow>
                <TableCell sx={{ fontSize: theme => theme.typography.body1.fontSize }}>New for you</TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: theme => theme.typography.body1.fontSize }}>Account activity</TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ fontSize: theme => theme.typography.body1.fontSize }}>
                  A new browser used to sign in
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox />
                </TableCell>
              </TableRow>
              <TableRow sx={{ '& .MuiTableCell-root': { border: 0 } }}>
                <TableCell sx={{ fontSize: theme => theme.typography.body1.fontSize }}>
                  A new device is linked
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox defaultChecked />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox />
                </TableCell>
                <TableCell align='center' sx={{ pt: '0 !important', pb: '0 !important' }}>
                  <Checkbox />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

      <CardActions>
        <Button variant='contained' sx={{ mr: 2 }}>
          Save Changes
        </Button>
        <Button color='secondary' variant='tonal'>
          Discard
        </Button>
      </CardActions>
    </Card>
  )
}

export default UserViewNotification
