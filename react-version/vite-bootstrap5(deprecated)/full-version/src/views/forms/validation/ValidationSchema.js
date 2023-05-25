// ** React Imports
import { Fragment } from 'react'

// ** Third Party Components
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { Check } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button, Form, Label, Input, FormFeedback } from 'reactstrap'

const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup.string().min(3).required(),
    firstName: yup.string().min(3).required(),
    password: yup.string().min(6).required()
  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onChange', resolver: yupResolver(SignupSchema) })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      toast(
        <div className='d-flex'>
          <div className='me-1'>
            <Avatar size='sm' color='success' icon={<Check size={12} />} />
          </div>
          <div className='d-flex flex-column'>
            <h6>Form Submitted!</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <strong>firstName</strong>: {data.firstName}
              </li>
              <li>
                <strong>lastName</strong>: {data.lastName}
              </li>
              <li>
                <strong>email</strong>: {data.email}
              </li>
              <li>
                <strong>password</strong>: {data.password}
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }

  const handleReset = () => {
    reset({
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Validation Schema With OnChange</CardTitle>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1'>
            <Label className='form-label' for='firstName'>
              First Name
            </Label>
            <Controller
              id='firstName'
              name='firstName'
              defaultValue=''
              control={control}
              render={({ field }) => <Input {...field} placeholder='Bruce' invalid={errors.firstName && true} />}
            />
            {errors.firstName && <FormFeedback>{errors.firstName.message}</FormFeedback>}
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='lastName'>
              Last Name
            </Label>
            <Controller
              id='lastName'
              name='lastName'
              defaultValue=''
              control={control}
              render={({ field }) => <Input {...field} placeholder='Wayne' invalid={errors.lastName && true} />}
            />
            {errors.lastName && <FormFeedback>{errors.lastName.message}</FormFeedback>}
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='email'>
              Email
            </Label>
            <Controller
              id='email'
              name='email'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input {...field} type='email' placeholder='bruce.wayne@email.com' invalid={errors.email && true} />
              )}
            />
            {errors.email && <FormFeedback>{errors.email.message}</FormFeedback>}
          </div>
          <div className='mb-1'>
            <Label className='form-label' for='password'>
              Password
            </Label>
            <Controller
              id='password'
              name='password'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <Input {...field} type='password' placeholder='Password' invalid={errors.password && true} />
              )}
            />
            {errors.password && <FormFeedback>{errors.password.message}</FormFeedback>}
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

export default ValidationOnChange
