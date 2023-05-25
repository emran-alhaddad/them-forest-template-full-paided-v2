// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const defaultValues = {
  google: '',
  twitter: '',
  facebook: '',
  linkedin: ''
}

const SocialLinks = ({ stepper }) => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      alert('submitted')
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key} url`
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Social Links</h5>
        <small>Enter Your Social Links.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='twitter'>
              Twitter
            </Label>
            <Controller
              id='twitter'
              name='twitter'
              control={control}
              render={({ field }) => (
                <Input placeholder='https://twitter.com/johndoe' invalid={errors.twitter && true} {...field} />
              )}
            />
            {errors.twitter && <FormFeedback>{errors.twitter.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='facebook'>
              Facebook
            </Label>
            <Controller
              id='facebook'
              name='facebook'
              control={control}
              render={({ field }) => (
                <Input placeholder='https://facebook.com/johndoe' invalid={errors.facebook && true} {...field} />
              )}
            />
            {errors.facebook && <FormFeedback>{errors.facebook.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='google'>
              Google+
            </Label>
            <Controller
              id='google'
              name='google'
              control={control}
              render={({ field }) => (
                <Input placeholder='https://plus.google.com/johndoe' invalid={errors.google && true} {...field} />
              )}
            />
            {errors.google && <FormFeedback>{errors.google.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='linkedin'>
              Linkedin
            </Label>
            <Controller
              id='linkedin'
              name='linkedin'
              control={control}
              render={({ field }) => (
                <Input placeholder='https://linkedin.com/johndoe' invalid={errors.linkedin && true} {...field} />
              )}
            />
            {errors.linkedin && <FormFeedback>{errors.linkedin.message}</FormFeedback>}
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='success' className='btn-submit'>
            Submit
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
