// ** Reactstrap Imports\
import { Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'

// ** Chrome Logo
import chromeLogo from '@src/assets/images/icons/google-chrome.png'

const recentDevicesArr = [
  {
    device: 'Dell XPS 15',
    location: 'United States',
    browser: 'Chrome on Windows',
    activity: '10, Jan 2021 20:07'
  },
  {
    location: 'Ghana',
    device: 'Google Pixel 3a',
    browser: 'Chrome on Android',
    activity: '11, Jan 2021 10:16'
  },
  {
    location: 'Mayotte',
    device: 'Apple iMac',
    browser: 'Chrome on MacOS',
    activity: '11, Jan 2021 12:10'
  },
  {
    location: 'Mauritania',
    device: 'Apple iPhone XR',
    browser: 'Chrome on iPhone',
    activity: '12, Jan 2021 8:29'
  }
]

const RecentDevices = () => {
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Recent devices</CardTitle>
      </CardHeader>
      <CardBody className='my-2 py-25'>
        <Table className='text-nowrap text-center' responsive bordered>
          <thead>
            <tr>
              <th className='text-start'>Browser</th>
              <th>Device</th>
              <th>Location</th>
              <th>Recent Activity</th>
            </tr>
          </thead>
          <tbody>
            {recentDevicesArr.map((item, index) => {
              return (
                <tr key={index}>
                  <td className='text-start'>
                    <img className='me-25' src={chromeLogo} alt={item.device} width='20' height='20' />
                    <span className='fw-bolder'>{item.browser}</span>
                  </td>
                  <td>{item.device}</td>
                  <td>{item.location}</td>
                  <td>{item.activity}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default RecentDevices
