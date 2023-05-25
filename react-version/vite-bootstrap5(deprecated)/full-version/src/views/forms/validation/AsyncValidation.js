// ** Third Party Components
import toast from 'react-hot-toast'
import { Check } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Form, Label, Input } from 'reactstrap'

const AsyncValidationForm = () => {
  // ** Hooks
  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    if (Object.values(data).every(field => field.length > 0)) {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
      await sleep(1000)
      if (Object.values(data).every(field => field.length > 0)) {
        toast(
          <div className='d-flex'>
            <div className='me-1'>
              <Avatar size='sm' color='success' icon={<Check size={12} />} />
            </div>
            <div className='d-flex flex-column'>
              <h6>Form Submitted!</h6>
              <div>
                <ul className='list-unstyled mb-0'>
                  <li>
                    <strong>firstName</strong>: {data.firstNameAsync}
                  </li>
                  <li>
                    <strong>lastName</strong>: {data.lastNameAsync}
                  </li>
                  <li>
                    <strong>email</strong>: {data.email}
                  </li>
                  <li>
                    <strong>password</strong>: {data.passwordAsync}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
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
  const handleReset = () => {
    reset({
      email: '',
      lastNameAsync: '',
      passwordAsync: '',
      firstNameAsync: ''
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Async Submit</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Label className='form-label' for='firstNameAsync'>
              First Name
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='firstNameAsync'
              name='firstNameAsync'
              render={({ field }) => <Input {...field} placeholder='Bruce' invalid={errors.firstNameAsync && true} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='lastNameAsync'>
              Last Name
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='lastNameAsync'
              name='lastNameAsync'
              render={({ field }) => <Input {...field} placeholder='Wayne' invalid={errors.lastNameAsync && true} />}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='emailAsync'>
              Email
            </Label>
            <Controller
              name='email'
              id='emailAsync'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input {...field} type='email' placeholder='bruce.wayne@email.com' invalid={errors.email && true} />
              )}
            />
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='passwordAsync'>
              Password
            </Label>
            <Controller
              defaultValue=''
              control={control}
              id='passwordAsync'
              name='passwordAsync'
              render={({ field }) => (
                <Input {...field} type='password' placeholder='Password' invalid={errors.passwordAsync && true} />
              )}
            />
          </div>
          <div className='d-flex'>
            <Button className='me-1' color='primary' type='submit'>
              Submit
            </Button>
            <Button outline color='secondary' type='reset' onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export default AsyncValidationForm
