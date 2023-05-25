// ** Reactstrap Imports
import { Row, Col, Card, CardTitle, CardHeader, CardBody, Table, Input, Button } from 'reactstrap'

const typesArr = [
  {
    title: 'New for you',
    defaultChecked: ['email']
  },
  {
    title: 'Account activity',
    defaultChecked: ['browser', 'app']
  },
  {
    title: 'A new browser used to sign in',
    defaultChecked: ['email', 'browser', 'app']
  },
  {
    title: 'A new device is linked',
    defaultChecked: ['browser']
  }
]
const NotificationsTabContent = () => {
  return (
    <Card>
      <CardHeader className='border-bottom'>
        <CardTitle tag='h4'>Notifications</CardTitle>
      </CardHeader>
      <CardBody className='pt-2'>
        <h5 className='mb-0'>
          We need permission from your browser to show notifications. <strong>Request permission</strong>
        </h5>
      </CardBody>
      <Table className='text-nowrap text-center border-bottom' responsive>
        <thead>
          <tr>
            <th className='text-start'>Type</th>
            <th>✉️ Email</th>
            <th>🖥 Browser</th>
            <th>👩🏻‍💻 App</th>
          </tr>
        </thead>
        <tbody>
          {typesArr.map((type, index) => {
            return (
              <tr key={index}>
                <td className='text-start'>{type.title}</td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('email')} />
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('browser')} />
                  </div>
                </td>
                <td>
                  <div className='d-flex form-check justify-content-center'>
                    <Input type='checkbox' defaultChecked={type.defaultChecked.includes('app')} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <CardBody className='mt-50'>
        <Row className='gy-2'>
          <Col md='6'>
            <h5 className='mb-1'>When should we send you notifications?</h5>
            <Input type='select' defaultValue='Full Access Always'>
              <option value='full-access'>Full Access Always</option>
              <option value='only-online'>Only when I'm online</option>
              <option value='never'>Never</option>
            </Input>
          </Col>
          <Col className='mt-2' xs={12}>
            <Button className='me-1' color='primary'>
              Save Changes
            </Button>
            <Button outline>Discard</Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default NotificationsTabContent
