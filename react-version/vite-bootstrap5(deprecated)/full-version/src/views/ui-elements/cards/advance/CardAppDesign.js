// ** Third Party Components
import classnames from 'classnames'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardTitle, CardBody, CardText, Badge, Button } from 'reactstrap'

// ** Avatar Imports
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar9 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import avatar14 from '@src/assets/images/portrait/small/avatar-s-14.jpg'

const CardAppDesign = () => {
  const avatarArr = [
    {
      img: avatar9,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'PI',
      color: 'light-danger'
    },
    {
      img: avatar14,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      img: avatar7,
      imgHeight: 34,
      imgWidth: 34
    },
    {
      content: 'AL',
      color: 'light-secondary'
    }
  ]

  const designPlanningArr = [
    {
      title: 'Due Date',
      subtitle: '12 Apr, 21'
    },
    {
      title: 'Budget',
      subtitle: '$49251.91'
    },
    {
      title: 'Cost',
      subtitle: '$840.99'
    }
  ]

  return (
    <Card className='card-app-design'>
      <CardBody>
        <Badge color='light-primary'>03 Sep, 20</Badge>
        <CardTitle className='mt-1 mb-75'>App design</CardTitle>
        <CardText className='font-small-2 mb-2'>
          You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design
        </CardText>
        <div className='design-group mb-2 pt-50'>
          <h6 className='section-label'>Team</h6>
          <Badge className='me-1' color='light-warning'>
            Figma
          </Badge>
          <Badge color='light-primary'>Wireframe</Badge>
        </div>
        <div className='design-group pt-25'>
          <h6 className='section-label'>Members</h6>
          {avatarArr.map((obj, index) => {
            return <Avatar key={index} className={classnames({ 'me-75': index !== avatarArr.length - 1 })} {...obj} />
          })}
        </div>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
            </div>
          ))}
        </div>
        <div className='d-grid'>
          <Button color='primary'>Join Team</Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardAppDesign
