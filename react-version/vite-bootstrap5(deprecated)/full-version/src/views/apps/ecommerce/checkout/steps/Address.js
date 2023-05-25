// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Reactstrap Imports
import { Form, Input, Card, Label, CardHeader, CardTitle, CardBody, CardText, Button, Row, Col } from 'reactstrap'

const defaultValues = {
  checkoutName: '',
  checkoutCity: '',
  checkoutState: '',
  checkoutNumber: '',
  checkoutFlatNo: '',
  checkoutPincode: '',
  checkoutLandmark: ''
}

const Address = props => {
  // ** Props
  const { stepper } = props

  // ** Vars
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** On form submit if there are no errors then go to next step
  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      stepper.next()
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <Form className='list-view product-checkout' onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className='flex-column align-items-start'>
          <CardTitle tag='h4'>Add New Address</CardTitle>
          <CardText className='text-muted mt-25'>
            Be sure to check "Deliver to this address" when you have finished
          </CardText>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutName'>
                  Full Name:
                </Label>
                <Controller
                  control={control}
                  name='checkoutName'
                  render={({ field }) => (
                    <Input id='checkoutName' placeholder='John Doe' invalid={errors.checkoutName && true} {...field} />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutNumber'>
                  Mobile Number:
                </Label>
                <Controller
                  control={control}
                  name='checkoutNumber'
                  render={({ field }) => (
                    <Input
                      type='number'
                      id='checkoutNumber'
                      placeholder='0123456789'
                      invalid={errors.checkoutNumber && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutFlatNo'>
                  Flat, House No:
                </Label>
                <Controller
                  control={control}
                  name='checkoutFlatNo'
                  render={({ field }) => (
                    <Input
                      type='number'
                      id='checkoutFlatNo'
                      placeholder='9447 Glen Eagles Drive'
                      invalid={errors.checkoutFlatNo && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutLandmark'>
                  Landmark e.g. near apollo hospital:
                </Label>
                <Controller
                  control={control}
                  name='checkoutLandmark'
                  render={({ field }) => (
                    <Input
                      id='checkoutLandmark'
                      placeholder='Near Apollo Hospital'
                      invalid={errors.checkoutLandmark && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutCity'>
                  Town/City:
                </Label>
                <Controller
                  control={control}
                  name='checkoutCity'
                  render={({ field }) => (
                    <Input
                      id='checkoutCity'
                      placeholder='Los Angeles'
                      invalid={errors.checkoutCity && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutPincode'>
                  Pincode:
                </Label>
                <Controller
                  control={control}
                  name='checkoutPincode'
                  render={({ field }) => (
                    <Input
                      type='number'
                      id='checkoutPincode'
                      placeholder='201301'
                      invalid={errors.checkoutPincode && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='checkoutState'>
                  State:
                </Label>
                <Controller
                  control={control}
                  name='checkoutState'
                  render={({ field }) => (
                    <Input
                      id='checkoutState'
                      placeholder='California'
                      invalid={errors.checkoutState && true}
                      {...field}
                    />
                  )}
                />
              </div>
            </Col>
            <Col md='6' sm='12'>
              <div className='mb-2'>
                <Label className='form-label' for='add-type'>
                  Address Type:
                </Label>
                <Input type='select' name='add-type' id='add-type'>
                  <option value='home'>Home</option>
                  <option value='work'>Work</option>
                </Input>
              </div>
            </Col>
            <Col sm='12'>
              <Button type='submit' className='btn-next delivery-address' color='primary'>
                Save And Deliver Here
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <div className='customer-card'>
        <Card>
          <CardHeader>
            <CardTitle tag='h4'>John Doe</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className='mb-0'>9447 Glen Eagles Drive</CardText>
            <CardText>Lewis Center, OH 43035</CardText>
            <CardText>UTC-5: Eastern Standard Time (EST)</CardText>
            <CardText>202-555-0140</CardText>
            <Button
              block
              type='button'
              color='primary'
              onClick={() => stepper.next()}
              className='btn-next delivery-address mt-2'
            >
              Deliver To This Address
            </Button>
          </CardBody>
        </Card>
      </div>
    </Form>
  )
}

export default Address
