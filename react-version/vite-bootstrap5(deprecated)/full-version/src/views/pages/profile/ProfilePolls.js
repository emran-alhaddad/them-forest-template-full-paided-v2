// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import classnames from 'classnames'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Progress, Input, Label, UncontrolledTooltip } from 'reactstrap'

const ProfilePolls = ({ data }) => {
  const renderOptions = () => {
    return data.map((option, index) => {
      return (
        <div key={option.name} className='profile-polls-info mt-2'>
          <div className='d-flex justify-content-between'>
            <div className='form-check'>
              <Input type='radio' name='polls' id={`radio-${option.name.toLowerCase()}`} />
              <Label className='form-check-label' for={`radio-${option.name.toLowerCase()}`}>
                {option.name}
              </Label>
            </div>
            <div className='text-end'>{option.result}</div>
          </div>
          <Progress className='my-50' value={option.result.replace('%', ' ').trim()} />
          <div
            className={classnames('avatar-group', {
              'mt-1': index > 0,
              'my-1': index === 0
            })}
          >
            {option.votedUser.map(user => {
              return (
                <Fragment key={user.username}>
                  <Avatar
                    imgWidth='26'
                    imgHeight='26'
                    img={user.img}
                    className='pull-up'
                    id={user.username.toLowerCase().split(' ').join('-')}
                  />
                  <UncontrolledTooltip target={user.username.toLowerCase().split(' ').join('-')} placement='top'>
                    {user.username}
                  </UncontrolledTooltip>
                </Fragment>
              )
            })}
          </div>
        </div>
      )
    })
  }

  return (
    <Card>
      <CardBody>
        <h5 className='mb-1'>Polls</h5>
        <CardText className='mb-0'>Who is the best actor in Marvel Cinematic Universe?</CardText>
        {renderOptions()}
      </CardBody>
    </Card>
  )
}

export default ProfilePolls
