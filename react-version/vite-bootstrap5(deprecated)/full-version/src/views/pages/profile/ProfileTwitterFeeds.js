// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import { CheckCircle, Star } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText } from 'reactstrap'

const ProfileTwitterFeeds = ({ data }) => {
  const renderFeeds = () => {
    return data.map((feed, index) => {
      return (
        <div
          className={classnames('profile-twitter-feed', {
            'mt-1': index === 0,
            'mt-2': index !== 0
          })}
          key={index}
        >
          <div className='d-flex justify-content-start align-items-center mb-1'>
            <Avatar className='me-1' img={feed.imgUrl} imgHeight='40' imgWidth='40' />
            <div className='profile-user-info'>
              <h6 className='mb-0'>{feed.title}</h6>
              <a href='/' onClick={e => e.preventDefault()}>
                <small className='text-muted'>@{feed.id}</small>
                <CheckCircle size={14} />
              </a>
            </div>
            <div className='profile-star ms-auto'>
              <Star
                size={18}
                className={classnames('cursor-pointer', {
                  'profile-favorite': feed.favorite === true
                })}
              />
            </div>
          </div>
          <CardText className='mb-50'>{feed.desc}</CardText>
          <a href='/' onClick={e => e.preventDefault()}>
            <small>{feed.tags}</small>
          </a>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5>Twitter Feeds</h5>
        {renderFeeds()}
      </CardBody>
    </Card>
  )
}

export default ProfileTwitterFeeds
