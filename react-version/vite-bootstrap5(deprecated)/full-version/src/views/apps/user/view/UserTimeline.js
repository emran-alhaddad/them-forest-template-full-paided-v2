// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import pdf from '@src/assets/images/icons/file-icons/pdf.png'
import ceo from '@src/assets/images/portrait/small/avatar-s-7.jpg'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Timeline Data
const data = [
  {
    title: 'User login',
    content: 'User login at 2:12pm',
    meta: '12 mins ago'
  },
  {
    title: 'Meeting with john',
    content: 'React Project meeting with john @10:15am',
    meta: '45 mins ago',
    color: 'warning',
    customContent: (
      <div className='d-flex align-items-center mb-50'>
        <Avatar img={ceo} imgHeight={38} imgWidth={38} />
        <div className='ms-50'>
          <h6 className='mb-0'>Leona Watkins (Client)</h6>
          <span>CEO of Pixinvent</span>
        </div>
      </div>
    )
  },
  {
    title: 'Create a new react project for client',
    content: 'Add files to new design folder',
    meta: '2 days ago',
    color: 'info'
  },
  {
    title: 'Create Invoices for client',
    content: 'Create new Invoices and send to Leona Watkins',
    meta: '12 mins ago',
    color: 'danger',
    customContent: (
      <div className='d-flex align-items-center'>
        <img className='me-1' src={pdf} alt='pdf' height='23' />
        <h6 className='mb-0'>invoice.pdf</h6>
      </div>
    )
  }
]

const UserTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>User Activity Timeline</CardTitle>
      </CardHeader>
      <CardBody className='pt-1'>
        <Timeline data={data} className='ms-50' />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
