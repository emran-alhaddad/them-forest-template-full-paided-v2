// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Button, Alert } from 'reactstrap'

const ButtonTags = () => {
  return (
    <Fragment>
      <Alert color='warning'>
        <div className='alert-body'>
          <strong>Note:</strong> Link button will redirect you to another page
        </div>
      </Alert>

      <div className='demo-inline-spacing'>
        <a
          color='primary'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary'
          href='https://pixinvent.com/'
        >
          Link
        </a>
        <Button.Ripple color='primary' tag={Link} to='/'>
          Router
        </Button.Ripple>
        <Button.Ripple color='primary' tag='button'>
          Button
        </Button.Ripple>
        <input className='btn btn-primary' type='button' value='Input' />
        <input className='btn btn-primary' type='submit' value='Submit' />
      </div>
    </Fragment>
  )
}
export default ButtonTags
