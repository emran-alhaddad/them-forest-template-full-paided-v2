// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const defaultValues = {
  city: '',
  pincode: '',
  address: '',
  landmark: ''
}

const Address = ({ stepper }) => {
  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      stepper.next()
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='address'>
              Address
            </Label>
            <Controller
              id='address'
              name='address'
              control={control}
              render={({ field }) => (
                <Input placeholder='98  Borough bridge Road, Birmingham' invalid={errors.address && true} {...field} />
              )}
            />
            {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='landmark'>
              Landmark
            </Label>
            <Controller
              id='landmark'
              name='landmark'
              control={control}
              render={({ field }) => (
                <Input placeholder='Borough bridge' invalid={errors.landmark && true} {...field} />
              )}
            />
            {errors.landmark && <FormFeedback>{errors.landmark.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='pincode'>
              Pincode
            </Label>
            <Controller
              id='pincode'
              name='pincode'
              control={control}
              render={({ field }) => <Input placeholder='658921' invalid={errors.pincode && true} {...field} />}
            />
            {errors.pincode && <FormFeedback>{errors.pincode.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='city'>
              City
            </Label>
            <Controller
              id='city'
              name='city'
              control={control}
              render={({ field }) => <Input placeholder='Birmingham' invalid={errors.city && true} {...field} />}
            />
            {errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Address
