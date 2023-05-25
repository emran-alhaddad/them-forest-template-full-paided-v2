// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button } from 'reactstrap'

const SocialLinks = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Social Links</h5>
        <small>Enter Your Social Links.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`twitter-${type}`}>
              Twitter
            </Label>
            <Input type='text' id={`twitter-${type}`} name='twitter' placeholder='https://twitter.com/abc' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`facebook-${type}`}>
              Facebook
            </Label>
            <Input type='text' id={`facebook-${type}`} name='facebook' placeholder='https://facebook.com/abc' />
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`google-${type}`}>
              Google+
            </Label>
            <Input type='text' id={`google-${type}`} name='google' placeholder='https://plus.google.com/abc' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`linkedin-${type}`}>
              Linkedin
            </Label>
            <Input type='text' id={`linkedin-${type}`} name='linkedin' placeholder='https://linkedin.com/abc' />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='success' className='btn-submit' onClick={() => alert('submitted')}>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
